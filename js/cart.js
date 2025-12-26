// ==========================================
// سبد خرید - Shopping Cart Functionality
// ==========================================

// وضعیت سبد خرید
let cart = [];

// بارگذاری سبد از localStorage
function loadCart() {
    const savedCart = localStorage.getItem('cosmetics_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
    }
}

// ذخیره سبد در localStorage
function saveCart() {
    localStorage.setItem('cosmetics_cart', JSON.stringify(cart));
    updateCartUI();
}

// افزودن محصول به سبد
function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) {
        showNotification('محصول یافت نشد!', 'error');
        return;
    }

    // بررسی موجودی
    if (!product.stock) {
        showNotification('این محصول ناموجود است', 'error');
        return;
    }

    // بررسی وجود محصول در سبد
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            brand: product.brand,
            quantity: quantity
        });
    }

    saveCart();
    showNotification('محصول به سبد خرید اضافه شد', 'success');
}

// حذف محصول از سبد
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    showNotification('محصول از سبد خرید حذف شد', 'info');
}

// بروزرسانی تعداد محصول
function updateQuantity(productId, newQuantity) {
    const item = cart.find(item => item.id === productId);

    if (item) {
        if (newQuantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = newQuantity;
            saveCart();
        }
    }
}

// افزایش تعداد
function increaseQuantity(productId) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += 1;
        saveCart();
    }
}

// کاهش تعداد
function decreaseQuantity(productId) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        if (item.quantity > 1) {
            item.quantity -= 1;
            saveCart();
        } else {
            removeFromCart(productId);
        }
    }
}

// محاسبه مجموع سبد
function getCartTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// محاسبه تعداد کل اقلام
function getCartItemCount() {
    return cart.reduce((count, item) => count + item.quantity, 0);
}

// پاک کردن کل سبد
function clearCart() {
    cart = [];
    saveCart();
    showNotification('سبد خرید خالی شد', 'info');
}

// بروزرسانی UI سبد
function updateCartUI() {
    // بروزرسانی شماره badge
    const cartBadge = document.querySelector('.cart-badge');
    if (cartBadge) {
        const count = getCartItemCount();
        cartBadge.textContent = count;
        cartBadge.style.display = count > 0 ? 'flex' : 'none';
    }

    // بروزرسانی صفحه سبد خرید
    const cartContainer = document.getElementById('cart-items');
    if (cartContainer) {
        renderCartItems();
    }
}

// رندر کردن اقلام سبد
function renderCartItems() {
    const cartContainer = document.getElementById('cart-items');
    const emptyMessage = document.getElementById('empty-cart-message');
    const cartSummary = document.getElementById('cart-summary');

    if (cart.length === 0) {
        if (cartContainer) cartContainer.innerHTML = '';
        if (emptyMessage) emptyMessage.style.display = 'block';
        if (cartSummary) cartSummary.style.display = 'none';
        return;
    }

    if (emptyMessage) emptyMessage.style.display = 'none';
    if (cartSummary) cartSummary.style.display = 'block';

    if (cartContainer) {
        cartContainer.innerHTML = cart.map(item => `
      <div class="cart-item" data-product-id="${item.id}">
        <div class="cart-item-image">
          <img src="${item.image}" alt="${item.name}" onerror="this.src='images/placeholder.jpg'">
        </div>
        <div class="cart-item-details">
          <h3 class="cart-item-name">${item.name}</h3>
          <p class="cart-item-brand">${item.brand}</p>
          <p class="cart-item-price">${formatPrice(item.price)} تومان</p>
        </div>
        <div class="cart-item-actions">
          <div class="quantity-controls">
            <button class="btn-quantity" onclick="decreaseQuantity(${item.id})">-</button>
            <span class="quantity-display">${item.quantity}</span>
            <button class="btn-quantity" onclick="increaseQuantity(${item.id})">+</button>
          </div>
          <button class="btn-remove" onclick="removeFromCart(${item.id})">
            🗑️ حذف
          </button>
        </div>
        <div class="cart-item-total">
          ${formatPrice(item.price * item.quantity)} تومان
        </div>
      </div>
    `).join('');
    }

    // بروزرسانی خلاصه سبد
    updateCartSummary();
}

// بروزرسانی خلاصه قیمت
function updateCartSummary() {
    const subtotal = getCartTotal();
    const shipping = subtotal > 500000 ? 0 : 30000; // ارسال رایگان برای خرید بالای 500 هزار
    const discount = 0; // محاسبه تخفیف کد تخفیف
    const total = subtotal + shipping - discount;

    const subtotalElement = document.getElementById('cart-subtotal');
    const shippingElement = document.getElementById('cart-shipping');
    const discountElement = document.getElementById('cart-discount');
    const totalElement = document.getElementById('cart-total');

    if (subtotalElement) subtotalElement.textContent = formatPrice(subtotal) + ' تومان';
    if (shippingElement) {
        shippingElement.textContent = shipping === 0 ? 'رایگان' : formatPrice(shipping) + ' تومان';
    }
    if (discountElement) discountElement.textContent = formatPrice(discount) + ' تومان';
    if (totalElement) totalElement.textContent = formatPrice(total) + ' تومان';
}

// فرمت قیمت با جداکننده
function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// نمایش اعلان
function showNotification(message, type = 'info') {
    // حذف اعلان قبلی
    const existing = document.querySelector('.notification');
    if (existing) {
        existing.remove();
    }

    // ساخت اعلان جدید
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
    <span>${message}</span>
    <button onclick="this.parentElement.remove()">✕</button>
  `;

    document.body.appendChild(notification);

    // نمایش با انیمیشن
    setTimeout(() => notification.classList.add('show'), 10);

    // حذف خودکار بعد از 3 ثانیه
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// اعمال کد تخفیف (placeholder)
function applyCoupon() {
    const couponInput = document.getElementById('coupon-code');
    if (!couponInput) return;

    const code = couponInput.value.trim();

    if (!code) {
        showNotification('لطفاً کد تخفیف را وارد کنید', 'error');
        return;
    }

    // اینجا می‌توانید کد تخفیف را بررسی کنید
    showNotification('این قابلیت به زودی فعال می‌شود', 'info');
}

// رفتن به صفحه پرداخت
function proceedToCheckout() {
    if (cart.length === 0) {
        showNotification('سبد خرید شما خالی است', 'error');
        return;
    }

    // اینجا می‌توانید به درگاه پرداخت متصل شوید
    showNotification('در حال انتقال به درگاه پرداخت...', 'info');

    // Placeholder: نمایش اطلاعات سبد
    console.log('Cart contents:', cart);
    console.log('Total amount:', getCartTotal());

    // بعداً اینجا کد اتصال به درگاه پرداخت قرار می‌گیرد
    setTimeout(() => {
        alert('اتصال به درگاه پرداخت:\n' +
            'این قسمت آماده اتصال به سیستم پرداخت شماست.\n' +
            'مجموع: ' + formatPrice(getCartTotal()) + ' تومان');
    }, 1000);
}

// بارگذاری سبد هنگام لود صفحه
document.addEventListener('DOMContentLoaded', function () {
    loadCart();
});

// Export functions برای استفاده در سایر صفحات
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        addToCart,
        removeFromCart,
        updateQuantity,
        increaseQuantity,
        decreaseQuantity,
        getCartTotal,
        getCartItemCount,
        clearCart,
        formatPrice
    };
}
