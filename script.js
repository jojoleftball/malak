// State
let currentLang = 'ar';
let currentTheme = 'light';
let cart = {};
let userId = 'USER' + Math.random().toString(36).substr(2, 9).toUpperCase();
let userQr = 'QR' + Math.random().toString(36).substr(2, 9).toUpperCase();

// Theme initialization
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    currentTheme = savedTheme;
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcons();
}

// Toggle theme
function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    updateThemeIcons();
}

// Update theme icons
function updateThemeIcons() {
    const themeIcons = document.querySelectorAll('.theme-icon');
    const themeButtons = document.querySelectorAll('.theme-toggle');
    const iconText = currentTheme === 'light' ? '🌙' : '☀️';
    const ariaLabel = currentTheme === 'light' ? 'Switch to dark theme' : 'Switch to light theme';
    
    themeIcons.forEach(icon => {
        icon.textContent = iconText;
    });
    
    themeButtons.forEach(button => {
        button.setAttribute('aria-label', ariaLabel);
    });
}

// Products with real images
const products = [
    { 
        id: 1, 
        nameEn: 'Decorated Tin Cans', 
        nameAr: 'علب معدنية مزينة', 
        price: 25, 
        image: 'images/tin-cans.jpg' 
    },
    { 
        id: 2, 
        nameEn: 'Wooden Pen Holder', 
        nameAr: 'حامل أقلام خشبي', 
        price: 30, 
        image: 'images/pen-holder.jpg' 
    },
    { 
        id: 3, 
        nameEn: 'Hair Accessories Organizer', 
        nameAr: 'منظم اكسسوارات الشعر', 
        price: 30, 
        image: 'images/hair-organizer.jpg' 
    },
    { 
        id: 4, 
        nameEn: 'Decorative Candles', 
        nameAr: 'شموع زينة', 
        price: 45, 
        image: 'images/candles.jpg' 
    },
    { 
        id: 5, 
        nameEn: 'Patchwork Tote Bag', 
        nameAr: 'حقيبة قماشية', 
        price: 50, 
        image: 'images/tote-bag.jpg' 
    },
    { 
        id: 6, 
        nameEn: 'Embroidered Crossbody Bag', 
        nameAr: 'شنطة كروس مطرزة', 
        price: 50, 
        image: 'images/crossbody-bag.jpg' 
    },
    { 
        id: 7, 
        nameEn: 'Decorative Mason Jar', 
        nameAr: 'برطمان زينة', 
        price: 40, 
        image: 'images/mason-jar.jpg' 
    },
    { 
        id: 8, 
        nameEn: 'Wall Hanging Jar Lights', 
        nameAr: 'فوانيس حائط', 
        price: 40, 
        image: 'images/jar-lights.jpg' 
    },
    { 
        id: 9, 
        nameEn: 'Giraffe Wall Art', 
        nameAr: 'لوحة زرافة', 
        price: 60, 
        image: 'images/giraffe-art.jpg' 
    },
    { 
        id: 10, 
        nameEn: 'Pearl Whale Art', 
        nameAr: 'لوحة حوت باللؤلؤ', 
        price: 60, 
        image: 'images/whale-art.jpg' 
    }
];

// Translations
const translations = {
    en: {
        loginSubtitle: 'Transform Trash into Treasure',
        emailLabel: 'Email',
        passwordLabel: 'Password',
        nameLabel: 'Name',
        loginBtn: 'Login',
        signupBtn: 'Sign Up',
        noAccountText: "Don't have an account?",
        haveAccountText: "Already have an account?",
        signupLink: 'Sign Up',
        loginLink: 'Login',
        langSwitch: '🇪🇬 العربية',
        welcomeTitle: 'Welcome!',
        welcomeText: 'Welcome to our website! Contribute with us to the progress of our country.',
        skipBtn: 'Skip',
        navShop: 'Shop',
        navHelp: 'Help',
        navSettings: 'Settings',
        helpTitle: 'Help',
        surveyLink: 'Survey',
        ratingLink: 'Rate Us',
        supportLink: 'Get Support',
        settingsTitle: 'Settings',
        yourIdLabel: 'Your ID',
        yourQrLabel: 'Your QR Code',
        changePasswordBtn: 'Change Password',
        changeLanguageBtn: 'Change Language (العربية)',
        logoutBtn: 'Logout',
        cartTitle: 'Shopping Cart',
        emptyCartText: 'Your cart is empty',
        totalLabel: 'Total:',
        transferToLabel: 'Transfer to:',
        deliveryLabel: 'Delivery time: 1 day',
        checkoutBtn: 'Checkout'
    },
    ar: {
        loginSubtitle: 'تحويل النفايات إلى كنوز',
        emailLabel: 'البريد الإلكتروني',
        passwordLabel: 'كلمة المرور',
        nameLabel: 'الاسم',
        loginBtn: 'تسجيل الدخول',
        signupBtn: 'إنشاء حساب',
        noAccountText: 'ليس لديك حساب؟',
        haveAccountText: 'لديك حساب بالفعل؟',
        signupLink: 'إنشاء حساب',
        loginLink: 'تسجيل الدخول',
        langSwitch: '🇺🇸 English',
        welcomeTitle: 'مرحباً بك!',
        welcomeText: 'مرحباً بك في موقعنا! ساهم معنا في تقدم وطننا.',
        skipBtn: 'تخطي',
        navShop: 'المتجر',
        navHelp: 'المساعدة',
        navSettings: 'الإعدادات',
        helpTitle: 'المساعدة',
        surveyLink: 'استبيان',
        ratingLink: 'قيمنا',
        supportLink: 'احصل على الدعم',
        settingsTitle: 'الإعدادات',
        yourIdLabel: 'معرفك',
        yourQrLabel: 'رمز QR الخاص بك',
        changePasswordBtn: 'تغيير كلمة المرور',
        changeLanguageBtn: 'تغيير اللغة (English)',
        logoutBtn: 'تسجيل الخروج',
        cartTitle: 'سلة التسوق',
        emptyCartText: 'سلة التسوق فارغة',
        totalLabel: 'المجموع:',
        transferToLabel: 'تحويل إلى:',
        deliveryLabel: 'وقت التوصيل: يوم واحد',
        checkoutBtn: 'إتمام الشراء'
    }
};

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    updateTranslations();
    document.getElementById('userId').textContent = userId;
    document.getElementById('userQr').textContent = userQr;
});

// Language functions
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
    updateTranslations();
    if (!document.getElementById('mainApp').classList.contains('hidden')) {
        renderProducts();
        renderCart();
    }
}

function updateTranslations() {
    const elements = document.querySelectorAll('[id]');
    elements.forEach(element => {
        const id = element.id;
        if (translations[currentLang][id]) {
            element.textContent = translations[currentLang][id];
        }
    });
}

// Authentication functions
function handleLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (!email || !password) {
        alert(currentLang === 'en' ? 'Please fill in all fields' : 'يرجى ملء جميع الحقول');
        return false;
    }
    
    // Show welcome page first
    document.getElementById('loginPage').classList.add('hidden');
    document.getElementById('welcomePage').classList.remove('hidden');
    return false;
}

function handleSignup() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    
    if (!name || !email || !password) {
        alert(currentLang === 'en' ? 'Please fill in all fields' : 'يرجى ملء جميع الحقول');
        return false;
    }
    
    // Show welcome page first
    document.getElementById('loginPage').classList.add('hidden');
    document.getElementById('welcomePage').classList.remove('hidden');
    return false;
}

function toggleSignup() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    
    if (loginForm.classList.contains('hidden')) {
        loginForm.classList.remove('hidden');
        signupForm.classList.add('hidden');
    } else {
        loginForm.classList.add('hidden');
        signupForm.classList.remove('hidden');
    }
}

function showMainApp() {
    document.getElementById('welcomePage').classList.add('hidden');
    document.getElementById('mainApp').classList.remove('hidden');
    renderProducts();
}

function logout() {
    document.getElementById('mainApp').classList.add('hidden');
    document.getElementById('loginPage').classList.remove('hidden');
    cart = {};
    updateCartBadge();
    
    // Reset form fields
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('name').value = '';
    document.getElementById('signupEmail').value = '';
    document.getElementById('signupPassword').value = '';
    
    // Return to login form
    document.getElementById('loginForm').classList.remove('hidden');
    document.getElementById('signupForm').classList.add('hidden');
}

// Navigation functions
function showPage(page) {
    // Hide all pages
    document.getElementById('shopPage').classList.add('hidden');
    document.getElementById('helpPage').classList.add('hidden');
    document.getElementById('settingsPage').classList.add('hidden');
    
    // Remove active class from all nav buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected page
    document.getElementById(page + 'Page').classList.remove('hidden');
    
    // Set active nav button
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach((btn, index) => {
        if (page === 'shop' && index === 0) btn.classList.add('active');
        if (page === 'help' && index === 1) btn.classList.add('active');
        if (page === 'settings' && index === 2) btn.classList.add('active');
    });
}

// Product functions
function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        const quantity = cart[product.id] || 0;
        const maxQtyReached = quantity >= 5;
        
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${currentLang === 'en' ? product.nameEn : product.nameAr}" 
                     onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik04MCA2MEg2MFY4MEg4MFY2MFpNMTAwIDYwSDEyMFY4MEgxMDBWNjBaTTE0MCA2MEgxMjBWODBIMTQwVjYwWk04MCA4MEg2MFYxMDBIODBWODBaTTEwMCA4MEgxMjBWMTBIMTAwVjgwWk0xNDAgODBIMTIwVjEwMEgxNDBWODBaTTgwIDEwMEg2MFYxMjBIODBWMTAwWk0xMDAgMTIwSDEyMFYxNDBIMTAwVjEyMFpNMTQwIDEwMEgxMjBWMTIwSDE0MFYxMDBaIiBmaWxsPSIjOTlBQUFGIi8+Cjwvc3ZnPg=='">
            </div>
            <div class="product-info">
                <div class="product-name">${currentLang === 'en' ? product.nameEn : product.nameAr}</div>
                <div class="product-price">${product.price} ${currentLang === 'en' ? 'EGP' : 'جنيه'}</div>
                <div class="product-actions">
                    <div class="quantity-controls">
                        <button type="button" class="qty-btn minus" onclick="updateQuantity(${product.id}, -1)" ${quantity === 0 ? 'disabled' : ''}>-</button>
                        <div class="quantity">${quantity}</div>
                        <button type="button" class="qty-btn plus" onclick="updateQuantity(${product.id}, 1)" ${maxQtyReached ? 'disabled' : ''}>+</button>
                    </div>
                </div>
                <button type="button" class="add-to-cart-btn" onclick="addToCart(${product.id})" ${maxQtyReached ? 'disabled' : ''}>
                    ${currentLang === 'en' ? 'Add to Cart' : 'أضف إلى السلة'}
                </button>
                ${maxQtyReached ? `<div class="max-qty-msg">${currentLang === 'en' ? 'Maximum quantity reached' : 'تم الوصول للحد الأقصى'}</div>` : ''}
            </div>
        `;
        
        productsGrid.appendChild(productCard);
    });
}

function updateQuantity(productId, change) {
    if (!cart[productId]) {
        cart[productId] = 0;
    }
    
    cart[productId] += change;
    
    if (cart[productId] < 0) {
        cart[productId] = 0;
    }
    
    if (cart[productId] > 5) {
        cart[productId] = 5;
    }
    
    renderProducts();
    updateCartBadge();
}

function addToCart(productId) {
    if (!cart[productId]) {
        cart[productId] = 0;
    }
    
    if (cart[productId] < 5) {
        cart[productId]++;
        renderProducts();
        updateCartBadge();
        
        // Show success feedback
        const product = products.find(p => p.id === productId);
        const productName = currentLang === 'en' ? product.nameEn : product.nameAr;
        alert(`${currentLang === 'en' ? 'Added to cart:' : 'تم الإضافة إلى السلة:'} ${productName}`);
    }
}

// Cart functions
function updateCartBadge() {
    const cartBadge = document.getElementById('cartBadge');
    const totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
    
    if (totalItems > 0) {
        cartBadge.textContent = totalItems;
        cartBadge.classList.remove('hidden');
    } else {
        cartBadge.classList.add('hidden');
    }
}

function showCart() {
    const cartModal = document.getElementById('cartModal');
    const cartEmpty = document.getElementById('cartEmpty');
    const cartFull = document.getElementById('cartFull');
    
    const totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
    
    if (totalItems === 0) {
        cartEmpty.classList.remove('hidden');
        cartFull.classList.add('hidden');
    } else {
        cartEmpty.classList.add('hidden');
        cartFull.classList.remove('hidden');
        renderCart();
    }
    
    cartModal.classList.remove('hidden');
}

function hideCart() {
    document.getElementById('cartModal').classList.add('hidden');
}

function closeCartIfOutside(event) {
    if (event.target === document.getElementById('cartModal')) {
        hideCart();
    }
}

function renderCart() {
    const cartItemsList = document.getElementById('cartItemsList');
    const cartTotal = document.getElementById('cartTotal');
    
    cartItemsList.innerHTML = '';
    let totalPrice = 0;
    
    Object.keys(cart).forEach(productId => {
        const quantity = cart[productId];
        if (quantity > 0) {
            const product = products.find(p => p.id === parseInt(productId));
            const itemTotal = product.price * quantity;
            totalPrice += itemTotal;
            
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-image">
                    <img src="${product.image}" alt="${currentLang === 'en' ? product.nameEn : product.nameAr}" 
                         onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yNCAyNEgzNlYzNkgyNFYyNFpNMzAgMzBIMzZWMzZIMzBWMzBaTTI0IDM2SDMwVjQySDI0VjM2Wk0zNiAzNkg0MlY0MkgzNlYzNloiIGZpbGw9IiM5OUFBQUYiLz4KPC9zdmc+'">
                </div>
                <div class="cart-item-info">
                    <div class="cart-item-name">${currentLang === 'en' ? product.nameEn : product.nameAr}</div>
                    <div class="cart-item-price">${quantity} × ${product.price} ${currentLang === 'en' ? 'EGP' : 'جنيه'} = ${itemTotal} ${currentLang === 'en' ? 'EGP' : 'جنيه'}</div>
                </div>
                <div class="cart-item-actions">
                    <button type="button" class="qty-btn minus" onclick="updateCartItem(${product.id}, -1)">-</button>
                    <button type="button" class="qty-btn plus" onclick="updateCartItem(${product.id}, 1)">+</button>
                    <button type="button" class="qty-btn remove" onclick="removeFromCart(${product.id})">🗑️</button>
                </div>
            `;
            
            cartItemsList.appendChild(cartItem);
        }
    });
    
    cartTotal.textContent = `${totalPrice} ${currentLang === 'en' ? 'EGP' : 'جنيه'}`;
}

function updateCartItem(productId, change) {
    updateQuantity(productId, change);
    showCart(); // Refresh cart display
}

function removeFromCart(productId) {
    delete cart[productId];
    renderCart();
    renderProducts();
    updateCartBadge();
    
    // If cart is empty after removal, show empty state
    const totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
    if (totalItems === 0) {
        document.getElementById('cartEmpty').classList.remove('hidden');
        document.getElementById('cartFull').classList.add('hidden');
    }
}

function handleCheckout() {
    const totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
    
    if (totalItems === 0) {
        alert(currentLang === 'en' ? 'Your cart is empty!' : 'سلة التسوق فارغة!');
        return;
    }
    
    const totalPrice = Object.keys(cart).reduce((sum, productId) => {
        const product = products.find(p => p.id === parseInt(productId));
        return sum + (product.price * cart[productId]);
    }, 0);
    
    const confirmMessage = currentLang === 'en' 
        ? `Confirm purchase of ${totalItems} items for ${totalPrice} EGP? Transfer to: 01200206113`
        : `تأكيد شراء ${totalItems} عنصر بمبلغ ${totalPrice} جنيه؟ التحويل إلى: 01200206113`;
    
    if (confirm(confirmMessage)) {
        alert(currentLang === 'en' ? 'Order placed successfully! Delivery in 1 day.' : 'تم تقديم الطلب بنجاح! التوصيل خلال يوم واحد.');
        cart = {};
        hideCart();
        renderProducts();
        updateCartBadge();
    }
}

function handleChangePassword() {
    const newPassword = prompt(currentLang === 'en' ? 'Enter new password:' : 'أدخل كلمة المرور الجديدة:');
    if (newPassword) {
        alert(currentLang === 'en' ? 'Password changed successfully!' : 'تم تغيير كلمة المرور بنجاح!');
    }
}

function openSurvey() {
    const surveyUrl = currentLang === 'en' 
        ? 'https://docs.google.com/forms/d/e/1FAIpQLSeExampleSurveyEN'
        : 'https://docs.google.com/forms/d/e/1FAIpQLSeExampleSurveyAR';
    
    window.open(surveyUrl, '_blank');
}
