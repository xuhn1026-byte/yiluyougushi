/**
 * 坤瑞橡胶官网 - 性能优化模块
 * 图片懒加载、预加载、动画优化等
 */

// 图片懒加载
class LazyLoader {
    constructor(options = {}) {
        this.options = {
            rootMargin: options.rootMargin || '50px 0px',
            threshold: options.threshold || 0.01,
            placeholder: options.placeholder || 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
        };
        
        this.init();
    }
    
    init() {
        // 检查浏览器是否支持 IntersectionObserver
        if ('IntersectionObserver' in window) {
            this.observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.loadImage(entry.target);
                        this.observer.unobserve(entry.target);
                    }
                });
            }, {
                rootMargin: this.options.rootMargin,
                threshold: this.options.threshold
            });
            
            this.observeImages();
        } else {
            // 降级处理：直接加载所有图片
            this.loadAllImages();
        }
    }
    
    observeImages() {
        const images = document.querySelectorAll('img[data-src]');
        images.forEach(img => {
            // 设置占位图
            if (!img.src) {
                img.src = this.options.placeholder;
            }
            this.observer.observe(img);
        });
    }
    
    loadImage(img) {
        const src = img.getAttribute('data-src');
        const srcset = img.getAttribute('data-srcset');
        
        if (!src) return;
        
        // 创建新图片对象进行预加载
        const preloadImg = new Image();
        
        preloadImg.onload = () => {
            img.src = src;
            if (srcset) {
                img.srcset = srcset;
            }
            img.classList.add('loaded');
            img.removeAttribute('data-src');
            img.removeAttribute('data-srcset');
        };
        
        preloadImg.onerror = () => {
            img.classList.add('error');
        };
        
        preloadImg.src = src;
    }
    
    loadAllImages() {
        document.querySelectorAll('img[data-src]').forEach(img => {
            this.loadImage(img);
        });
    }
}

// 资源预加载
class ResourcePreloader {
    constructor() {
        this.preloadQueue = [];
    }
    
    // 预加载图片
    preloadImage(src) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(src);
            img.onerror = () => reject(src);
            img.src = src;
        });
    }
    
    // 预加载关键资源
    preloadCriticalResources() {
        // 预加载轮播图图片
        const carouselImages = document.querySelectorAll('.carousel-slide img');
        carouselImages.forEach((img, index) => {
            if (index < 2) { // 只预加载前两张
                this.preloadQueue.push(this.preloadImage(img.src));
            }
        });
        
        // 预加载Logo
        const logo = document.querySelector('.logo-container img');
        if (logo) {
            this.preloadQueue.push(this.preloadImage(logo.src));
        }
        
        return Promise.all(this.preloadQueue);
    }
}

// 动画性能优化
class AnimationOptimizer {
    constructor() {
        this.init();
    }
    
    init() {
        // 检测用户是否偏好减少动画
        this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        if (this.prefersReducedMotion) {
            this.disableAnimations();
        } else {
            this.optimizeAnimations();
        }
    }
    
    // 禁用动画
    disableAnimations() {
        document.documentElement.style.setProperty('--transition-fast', '0.01ms');
        document.documentElement.style.setProperty('--transition-normal', '0.01ms');
        document.documentElement.style.setProperty('--transition-slow', '0.01ms');
        
        document.querySelectorAll('.scroll-reveal').forEach(el => {
            el.classList.add('revealed');
        });
    }
    
    // 优化动画性能
    optimizeAnimations() {
        // 使用 requestAnimationFrame 优化滚动动画
        let ticking = false;
        
        const updateAnimations = () => {
            // 在这里执行动画更新
            ticking = false;
        };
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateAnimations);
                ticking = true;
            }
        }, { passive: true });
        
        // 为动画元素添加 will-change 提示
        this.addWillChangeHints();
    }
    
    // 添加 will-change 提示
    addWillChangeHints() {
        const animatedElements = document.querySelectorAll(
            '.carousel-slide, .content-card, .product-card, .news-card'
        );
        
        animatedElements.forEach(el => {
            el.style.willChange = 'transform, opacity';
            
            // 动画结束后移除 will-change
            el.addEventListener('transitionend', () => {
                el.style.willChange = 'auto';
            }, { once: true });
        });
    }
}

// 触摸设备优化
class TouchOptimizer {
    constructor() {
        this.isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
        this.init();
    }
    
    init() {
        if (this.isTouchDevice) {
            this.optimizeForTouch();
        }
    }
    
    optimizeForTouch() {
        // 增大触摸目标
        document.querySelectorAll('.nav-link, .dropdown-link, .card-link').forEach(el => {
            el.style.minHeight = '44px';
            el.style.display = 'flex';
            el.style.alignItems = 'center';
        });
        
        // 禁用悬停效果（使用触摸替代）
        document.body.classList.add('touch-device');
        
        // 优化滚动性能
        document.querySelectorAll('.mobile-nav').forEach(el => {
            el.style.webkitOverflowScrolling = 'touch';
        });
    }
}

// 缓存优化
class CacheOptimizer {
    constructor() {
        this.init();
    }
    
    init() {
        // 注册 Service Worker（如果支持）
        if ('serviceWorker' in navigator) {
            this.registerServiceWorker();
        }
    }
    
    registerServiceWorker() {
        // 这里可以添加 Service Worker 注册逻辑
        // 由于这是一个静态网站，可以创建一个简单的 SW 来缓存资源
        
        const swCode = `
            self.addEventListener('install', e => {
                e.waitUntil(
                    caches.open('kunray-v1').then(cache => {
                        return cache.addAll([
                            '/',
                            '/index.html',
                            '/styles/globals.css',
                            '/scripts/language.js',
                            '/scripts/carousel.js',
                            '/scripts/navigation.js'
                        ]);
                    })
                );
            });
            
            self.addEventListener('fetch', e => {
                e.respondWith(
                    caches.match(e.request).then(response => {
                        return response || fetch(e.request);
                    })
                );
            });
        `;
        
        // 创建 Blob URL
        const blob = new Blob([swCode], { type: 'application/javascript' });
        const swUrl = URL.createObjectURL(blob);
        
        navigator.serviceWorker.register(swUrl).catch(() => {
            // Service Worker 注册失败，静默处理
        });
    }
}

// 性能监控
class PerformanceMonitor {
    constructor() {
        this.init();
    }
    
    init() {
        // 页面加载性能
        window.addEventListener('load', () => {
            setTimeout(() => {
                this.logPerformanceMetrics();
            }, 0);
        });
    }
    
    logPerformanceMetrics() {
        if (window.performance && window.performance.timing) {
            const timing = window.performance.timing;
            
            const metrics = {
                // DNS 查询时间
                dns: timing.domainLookupEnd - timing.domainLookupStart,
                // TCP 连接时间
                tcp: timing.connectEnd - timing.connectStart,
                // 首字节时间
                ttfb: timing.responseStart - timing.requestStart,
                // DOM 解析时间
                domParse: timing.domComplete - timing.domLoading,
                // 页面完全加载时间
                loadComplete: timing.loadEventEnd - timing.navigationStart
            };
            
        }

        // Core Web Vitals
        if (window.performance && window.performance.getEntriesByType) {
            window.performance.getEntriesByType('paint');
        }
    }
}

// 初始化所有优化模块
document.addEventListener('DOMContentLoaded', () => {
    // 懒加载
    new LazyLoader();
    
    // 动画优化
    new AnimationOptimizer();
    
    // 触摸优化
    new TouchOptimizer();
    
    // 性能监控
    new PerformanceMonitor();
    
    // 预加载关键资源
    const preloader = new ResourcePreloader();
    preloader.preloadCriticalResources();
});

// 导出供其他模块使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        LazyLoader,
        ResourcePreloader,
        AnimationOptimizer,
        TouchOptimizer,
        PerformanceMonitor
    };
}
