/**
 * 坤瑞橡胶官网 - 轮播图模块
 * 支持自动翻页、手动切换、指示器控制
 */

class Carousel {
    constructor(container, options = {}) {
        this.container = container;
        this.slides = container.querySelectorAll('.carousel-slide');
        this.indicators = container.querySelectorAll('.indicator');
        this.prevBtn = container.querySelector('.carousel-control.prev');
        this.nextBtn = container.querySelector('.carousel-control.next');
        
        // 配置选项
        this.options = {
            autoPlay: options.autoPlay !== false,
            interval: options.interval || 5000, // 默认5秒
            pauseOnHover: options.pauseOnHover !== false,
            transitionDuration: options.transitionDuration || 800
        };
        
        this.currentIndex = 0;
        this.slideCount = this.slides.length;
        this.autoPlayTimer = null;
        this.isPaused = false;
        
        this.init();
    }
    
    init() {
        if (this.slideCount === 0) return;
        
        this.bindEvents();
        
        if (this.options.autoPlay) {
            this.startAutoPlay();
        }
        
        // 初始显示第一张
        this.goToSlide(0);
    }
    
    bindEvents() {
        // 上一张按钮
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => {
                this.prev();
                this.resetAutoPlay();
            });
        }
        
        // 下一张按钮
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => {
                this.next();
                this.resetAutoPlay();
            });
        }
        
        // 指示器点击
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                this.goToSlide(index);
                this.resetAutoPlay();
            });
        });
        
        // 鼠标悬停暂停
        if (this.options.pauseOnHover) {
            this.container.addEventListener('mouseenter', () => {
                this.pause();
            });
            
            this.container.addEventListener('mouseleave', () => {
                this.resume();
            });
        }
        
        // 键盘控制
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.prev();
                this.resetAutoPlay();
            } else if (e.key === 'ArrowRight') {
                this.next();
                this.resetAutoPlay();
            }
        });
        
        // 触摸滑动支持
        this.bindTouchEvents();
        
        // 页面可见性变化
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.pause();
            } else {
                this.resume();
            }
        });
    }
    
    // 绑定触摸事件
    bindTouchEvents() {
        let startX = 0;
        let startY = 0;
        let isDragging = false;
        
        this.container.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
            isDragging = true;
            this.pause();
        }, { passive: true });
        
        this.container.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            
            const currentX = e.touches[0].clientX;
            const currentY = e.touches[0].clientY;
            const diffX = startX - currentX;
            const diffY = startY - currentY;
            
            // 判断是水平滑动还是垂直滑动
            if (Math.abs(diffX) > Math.abs(diffY)) {
                e.preventDefault();
            }
        }, { passive: false });
        
        this.container.addEventListener('touchend', (e) => {
            if (!isDragging) return;
            
            const endX = e.changedTouches[0].clientX;
            const endY = e.changedTouches[0].clientY;
            const diffX = startX - endX;
            const diffY = startY - endY;
            
            // 判断滑动方向（主要是水平滑动）
            if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
                if (diffX > 0) {
                    this.next();
                } else {
                    this.prev();
                }
                this.resetAutoPlay();
            }
            
            isDragging = false;
            this.resume();
        }, { passive: true });
    }
    
    // 跳转到指定幻灯片
    goToSlide(index) {
        if (index < 0) {
            index = this.slideCount - 1;
        } else if (index >= this.slideCount) {
            index = 0;
        }
        
        // 移除当前活动状态
        this.slides[this.currentIndex].classList.remove('active');
        this.slides[this.currentIndex].setAttribute('aria-hidden', 'true');
        if (this.indicators[this.currentIndex]) {
            this.indicators[this.currentIndex].classList.remove('active');
            this.indicators[this.currentIndex].setAttribute('aria-selected', 'false');
        }
        
        // 设置新的活动状态
        this.currentIndex = index;
        this.slides[this.currentIndex].classList.add('active');
        this.slides[this.currentIndex].setAttribute('aria-hidden', 'false');
        if (this.indicators[this.currentIndex]) {
            this.indicators[this.currentIndex].classList.add('active');
            this.indicators[this.currentIndex].setAttribute('aria-selected', 'true');
        }
        
        // 触发自定义事件
        this.container.dispatchEvent(new CustomEvent('slideChange', {
            detail: { index: this.currentIndex }
        }));
    }
    
    // 下一张
    next() {
        this.goToSlide(this.currentIndex + 1);
    }
    
    // 上一张
    prev() {
        this.goToSlide(this.currentIndex - 1);
    }
    
    // 开始自动播放
    startAutoPlay() {
        if (this.autoPlayTimer) {
            clearInterval(this.autoPlayTimer);
        }
        
        this.autoPlayTimer = setInterval(() => {
            if (!this.isPaused) {
                this.next();
            }
        }, this.options.interval);
    }
    
    // 停止自动播放
    stopAutoPlay() {
        if (this.autoPlayTimer) {
            clearInterval(this.autoPlayTimer);
            this.autoPlayTimer = null;
        }
    }
    
    // 暂停
    pause() {
        this.isPaused = true;
    }
    
    // 恢复
    resume() {
        this.isPaused = false;
    }
    
    // 重置自动播放
    resetAutoPlay() {
        if (this.options.autoPlay) {
            this.stopAutoPlay();
            this.startAutoPlay();
        }
    }
    
    // 销毁
    destroy() {
        this.stopAutoPlay();
        // 移除事件监听器的逻辑可以在这里添加
    }
}

// 页面加载完成后初始化轮播图
document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
        new Carousel(carouselContainer, {
            autoPlay: true,
            interval: 8000,      // 给开屏视频和标题留出更完整的观看时间
            pauseOnHover: true,  // 鼠标悬停暂停
            transitionDuration: 800
        });
    }
});

// 导出供其他模块使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Carousel;
}
