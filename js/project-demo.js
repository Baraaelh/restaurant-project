// Project Demo Interactive Features
document.addEventListener('DOMContentLoaded', function() {
    // Restaurant Demo Interactive Elements
    
    // Menu items hover effect
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Form validation
    const demoForm = document.querySelector('.contact-form');
    if (demoForm) {
        demoForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form inputs
            const inputs = this.querySelectorAll('input, textarea');
            let isValid = true;
            
            // Validate each input
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    input.style.borderColor = '#ef476f';
                    isValid = false;
                } else {
                    input.style.borderColor = '#06d6a0';
                }
            });
            
            if (isValid) {
                // Show success message
                Swal.fire({
                    icon: 'success',
                    title: 'تم إرسال الطلب!',
                    text: 'شكراً لك، سنتواصل معك قريباً لتأكيد الحجز.',
                    confirmButtonText: 'حسناً',
                    confirmButtonColor: '#ff6b35'
                });
                
                // Reset form
                this.reset();
                
                // Reset border colors
                inputs.forEach(input => {
                    input.style.borderColor = '#eee';
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'يرجى ملء جميع الحقول',
                    text: 'جميع الحواج مطلوبة لتتمكن من إرسال الرسالة.',
                    confirmButtonText: 'حسناً',
                    confirmButtonColor: '#ef476f'
                });
            }
        });
        
        // Reset border color on focus
        demoForm.querySelectorAll('input, textarea').forEach(input => {
            input.addEventListener('focus', function() {
                this.style.borderColor = '#ff6b35';
            });
            
            input.addEventListener('blur', function() {
                if (this.value.trim()) {
                    this.style.borderColor = '#06d6a0';
                } else {
                    this.style.borderColor = '#eee';
                }
            });
        });
    }
    
    // Add to cart functionality
    const addToCartButtons = document.querySelectorAll('.menu-item');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const itemName = this.querySelector('h3').textContent;
            const itemPrice = this.querySelector('p').textContent;
            
            Swal.fire({
                icon: 'success',
                title: 'تمت الإضافة!',
                html: `تم إضافة <strong>${itemName}</strong> إلى سلة الطلبات<br>السعر: ${itemPrice}`,
                showCancelButton: true,
                confirmButtonText: 'إكمال الطلب',
                cancelButtonText: 'متابعة التسوق',
                confirmButtonColor: '#ff6b35',
                cancelButtonColor: '#2d3047'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        icon: 'info',
                        title: 'سيتم توجيهك لصفحة الدفع',
                        text: 'هذا مجرد عرض توضيحي للمشروع.',
                        confirmButtonText: 'حسناً',
                        confirmButtonColor: '#ff6b35'
                    });
                }
            });
        });
    });
    
    // Navbar scroll effect for demo
    const restaurantNav = document.querySelector('.restaurant-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > restaurantNav.offsetTop + 100) {
            restaurantNav.style.position = 'fixed';
            restaurantNav.style.top = '0';
            restaurantNav.style.width = '100%';
            restaurantNav.style.zIndex = '100';
            restaurantNav.style.background = 'rgba(0, 0, 0, 0.9)';
        } else {
            restaurantNav.style.position = 'relative';
            restaurantNav.style.background = 'transparent';
        }
    });
    
    // Add animation to features
    const features = document.querySelectorAll('.feature');
    features.forEach((feature, index) => {
        feature.style.animationDelay = `${index * 0.1}s`;
        feature.classList.add('animate-fade-in-up');
    });
    
    // Add parallax effect to hero
    const restaurantHero = document.querySelector('.restaurant-hero');
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        restaurantHero.style.transform = `translate3d(0, ${rate}px, 0)`;
    });
    
    // Initialize tooltips
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = this.getAttribute('data-tooltip');
            document.body.appendChild(tooltip);
            
            const rect = this.getBoundingClientRect();
            tooltip.style.position = 'fixed';
            tooltip.style.left = rect.left + rect.width / 2 + 'px';
            tooltip.style.top = rect.top - 40 + 'px';
            tooltip.style.transform = 'translateX(-50%)';
            
            this.tooltip = tooltip;
        });
        
        element.addEventListener('mouseleave', function() {
            if (this.tooltip) {
                this.tooltip.remove();
                this.tooltip = null;
            }
        });
    });
    
    // Add tooltip styles
    const tooltipStyle = document.createElement('style');
    tooltipStyle.textContent = `
        .tooltip {
            background: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 5px 10px;
            border-radius: 4px;
            font-size: 0.8rem;
            white-space: nowrap;
            pointer-events: none;
            z-index: 1000;
        }
    `;
    document.head.appendChild(tooltipStyle);
});