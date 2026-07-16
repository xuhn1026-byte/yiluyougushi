/**
 * 坤瑞橡胶官网 - 导航模块
 * 处理导航栏滚动效果、移动端菜单、下拉菜单等
 */

class Navigation {
    constructor() {
        this.header = document.querySelector('.header');
        this.mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        this.mobileNav = document.querySelector('.mobile-nav');
        this.mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');
        
        this.init();
    }
    
    init() {
        this.bindScrollEvents();
        this.bindMobileMenuEvents();
        this.bindDropdownEvents();
        this.bindSmoothScroll();
        this.setActiveNavItem();
    }
    
    // 滚动事件
    bindScrollEvents() {
        let lastScrollY = window.scrollY;
        let ticking = false;
        
        const updateHeader = () => {
            const scrollY = window.scrollY;
            
            // 添加/移除滚动样式
            if (scrollY > 50) {
                this.header.classList.add('scrolled');
            } else {
                this.header.classList.remove('scrolled');
            }
            
            lastScrollY = scrollY;
            ticking = false;
        };
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateHeader);
                ticking = true;
            }
        }, { passive: true });
    }
    
    // 移动端菜单事件
    bindMobileMenuEvents() {
        if (!this.mobileMenuToggle || !this.mobileNav) return;
        
        // 切换菜单
        this.mobileMenuToggle.addEventListener('click', () => {
            this.toggleMobileMenu();
        });
        
        // 点击菜单外部关闭
        document.addEventListener('click', (e) => {
            if (this.mobileNav.classList.contains('active') &&
                !this.mobileNav.contains(e.target) &&
                !this.mobileMenuToggle.contains(e.target)) {
                this.closeMobileMenu();
            }
        });
        
        // ESC键关闭菜单
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.mobileNav.classList.contains('active')) {
                this.closeMobileMenu();
            }
        });
    }
    
    // 切换移动端菜单
    toggleMobileMenu() {
        const isActive = this.mobileNav.classList.contains('active');
        
        if (isActive) {
            this.closeMobileMenu();
        } else {
            this.openMobileMenu();
        }
    }
    
    // 打开移动端菜单
    openMobileMenu() {
        this.mobileNav.classList.add('active');
        this.mobileMenuToggle.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // 添加动画效果
        const menuItems = this.mobileNav.querySelectorAll('.mobile-nav-item');
        menuItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(20px)';
            setTimeout(() => {
                item.style.transition = 'all 0.3s ease';
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
            }, index * 50);
        });
    }
    
    // 关闭移动端菜单
    closeMobileMenu() {
        this.mobileNav.classList.remove('active');
        this.mobileMenuToggle.classList.remove('active');
        document.body.style.overflow = '';
        
        // 关闭所有下拉菜单
        this.mobileNav.querySelectorAll('.mobile-dropdown-menu').forEach(menu => {
            menu.classList.remove('active');
        });
        this.mobileNav.querySelectorAll('.mobile-dropdown-toggle').forEach(toggle => {
            toggle.classList.remove('active');
        });
    }
    
    // 下拉菜单事件
    bindDropdownEvents() {
        // 移动端下拉菜单
        this.mobileDropdownToggles.forEach(toggle => {
            toggle.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                const parent = toggle.parentElement;
                const dropdown = parent.querySelector('.mobile-dropdown-menu');
                
                // 切换当前下拉菜单
                toggle.classList.toggle('active');
                dropdown.classList.toggle('active');
                
                // 关闭其他下拉菜单
                this.mobileDropdownToggles.forEach(otherToggle => {
                    if (otherToggle !== toggle) {
                        otherToggle.classList.remove('active');
                        const otherParent = otherToggle.parentElement;
                        const otherDropdown = otherParent.querySelector('.mobile-dropdown-menu');
                        if (otherDropdown) {
                            otherDropdown.classList.remove('active');
                        }
                    }
                });
            });
        });
        
        // 桌面端下拉菜单触摸支持
        if (window.matchMedia('(pointer: coarse)').matches) {
            document.querySelectorAll('.has-dropdown').forEach(item => {
                const dropdown = item.querySelector('.dropdown-menu');
                if (!dropdown || window.getComputedStyle(dropdown).display === 'none') {
                    return;
                }

                item.addEventListener('click', (e) => {
                    if (e.target.classList.contains('nav-link')) {
                        e.preventDefault();
                        item.classList.toggle('active');
                    }
                });
            });
        }
    }
    
    // 平滑滚动
    bindSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                if (href === '#') return;
                
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    
                    // 关闭移动端菜单
                    if (this.mobileNav && this.mobileNav.classList.contains('active')) {
                        this.closeMobileMenu();
                    }
                    
                    // 计算滚动位置（考虑固定导航栏高度）
                    const headerHeight = this.header ? this.header.offsetHeight : 0;
                    const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    // 设置当前活动导航项
    setActiveNavItem() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        // 桌面端
        document.querySelectorAll('.nav-link').forEach(link => {
            const href = link.getAttribute('href');
            if (href && href.includes(currentPage)) {
                link.classList.add('active');
                const navItem = link.closest('.nav-item');
                if (navItem) {
                    navItem.classList.add('active');
                }
            }
        });
        
        // 移动端
        document.querySelectorAll('.mobile-nav-link').forEach(link => {
            const href = link.getAttribute('href');
            if (href && href.includes(currentPage)) {
                link.classList.add('active');
                const navItem = link.closest('.mobile-nav-item');
                if (navItem) {
                    navItem.classList.add('active');
                }
            }
        });
    }
}

// 滚动显示动画
class ScrollReveal {
    constructor(options = {}) {
        this.options = {
            threshold: options.threshold || 0.1,
            rootMargin: options.rootMargin || '0px 0px -50px 0px'
        };
        
        this.init();
    }
    
    init() {
        const elements = document.querySelectorAll('.scroll-reveal');
        
        if (elements.length === 0) return;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: this.options.threshold,
            rootMargin: this.options.rootMargin
        });
        
        elements.forEach(el => observer.observe(el));
    }
}

// 页面加载动画
class PageLoader {
    constructor() {
        this.init();
    }
    
    init() {
        document.body.classList.add('page-transition');
        
        // 页面加载完成后移除加载动画
        window.addEventListener('load', () => {
            document.body.classList.add('loaded');
        });
    }
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    new Navigation();
    new ScrollReveal();
    new PageLoader();
});

// 导出供其他模块使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Navigation, ScrollReveal, PageLoader };
}
