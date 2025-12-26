// ==========================================
// منطق احراز هویت - Authentication Logic
// ==========================================

const USERS_KEY = 'shop_makwan_users';
const CURRENT_USER_KEY = 'shop_makwan_current_user';

// --- Functions ---

function getUsers() {
    const users = localStorage.getItem(USERS_KEY);
    return users ? JSON.parse(users) : [];
}

function saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function getCurrentUser() {
    const user = localStorage.getItem(CURRENT_USER_KEY);
    return user ? JSON.parse(user) : null;
}

function setCurrentUser(user) {
    if (user) {
        localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
    } else {
        localStorage.removeItem(CURRENT_USER_KEY);
    }
}

// Register
function register(name, identifier, password) {
    const users = getUsers();

    // Check if user already exists
    if (users.find(u => u.identifier === identifier)) {
        return { success: false, message: 'این حساب کاربری قبلاً ثبت شده است.' };
    }

    const newUser = {
        id: Date.now(),
        name,
        identifier,
        password, // In a real app, this should be hashed
        createdAt: new Date().toISOString()
    };

    users.push(newUser);
    saveUsers(users);

    // Log in automatically after registration
    setCurrentUser(newUser);
    return { success: true, message: 'ثبت‌نام با موفقیت انجام شد!' };
}

// Login
function login(identifier, password) {
    const users = getUsers();
    const user = users.find(u => u.identifier === identifier && u.password === password);

    if (user) {
        setCurrentUser(user);
        return { success: true, message: 'خوش آمدید!' };
    } else {
        return { success: false, message: 'نام کاربری یا رمز عبور اشتباه است.' };
    }
}

// Logout
function logout() {
    setCurrentUser(null);
    window.location.href = 'index.html';
}

// Update UI based on auth status
function updateAuthUI() {
    const user = getCurrentUser();
    const navActions = document.querySelector('.nav-actions');

    if (!navActions) return;

    // Check if we are on the login page
    const isLoginPage = window.location.pathname.includes('login.html');

    if (user) {
        // Find or create cart link (keep it if exist)
        const cartLink = document.querySelector('a[href="cart.html"]');
        const cartBadge = document.querySelector('.cart-badge')?.textContent || '0';

        navActions.innerHTML = `
            ${cartLink ? `
                <a href="cart.html" class="nav-btn">
                    🛒 سبد خرید
                    <span class="cart-badge">${cartBadge}</span>
                </a>
            ` : ''}
            <div class="user-menu" style="position: relative; display: inline-block;">
                <button class="nav-btn" onclick="toggleUserDropdown()" style="background: var(--bg-accent); border-radius: var(--radius-lg); padding: var(--spacing-sm) var(--spacing-lg);">
                    👤 ${user.name}
                </button>
                <div id="user-dropdown" class="card" style="display: none; position: absolute; left: 0; top: 110%; min-width: 180px; z-index: 1000; padding: var(--spacing-sm);">
                    <a href="#" class="nav-link" style="display: block; padding: var(--spacing-sm);">پنل کاربری</a>
                    <a href="#" class="nav-link" style="display: block; padding: var(--spacing-sm);">سفارشات من</a>
                    <hr style="margin: var(--spacing-sm) 0; border: 0; border-top: 1px solid var(--border);">
                    <button onclick="logout()" class="nav-link" style="width: 100%; border: none; background: none; text-align: right; color: var(--error); cursor: pointer;">خروج</button>
                </div>
            </div>
        `;
    } else if (!isLoginPage) {
        // Add Login button if not on login page
        navActions.insertAdjacentHTML('beforeend', `
            <a href="login.html" class="btn btn-primary" style="padding: var(--spacing-sm) var(--spacing-xl); font-size: 0.9rem;">
                ورود / ثبت‌نام
            </a>
        `);
    }
}

function toggleUserDropdown() {
    const dropdown = document.getElementById('user-dropdown');
    if (dropdown) {
        dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
    }
}

// --- Event Listeners (only if form exists) ---

document.addEventListener('DOMContentLoaded', () => {
    updateAuthUI();

    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const identifier = document.getElementById('login-identifier').value;
            const password = document.getElementById('login-password').value;
            const message = document.getElementById('auth-message');

            const result = login(identifier, password);
            if (result.success) {
                message.className = 'auth-msg success';
                message.textContent = result.message;
                setTimeout(() => window.location.href = 'index.html', 1000);
            } else {
                message.className = 'auth-msg error';
                message.textContent = result.message;
            }
        });
    }

    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('reg-name').value;
            const identifier = document.getElementById('reg-identifier').value;
            const password = document.getElementById('reg-password').value;
            const confirm = document.getElementById('reg-confirm').value;
            const message = document.getElementById('auth-message');

            if (password !== confirm) {
                message.className = 'auth-msg error';
                message.textContent = 'کلمه عبور و تکرار آن یکسان نیستند.';
                return;
            }

            const result = register(name, identifier, password);
            if (result.success) {
                message.className = 'auth-msg success';
                message.textContent = result.message;
                setTimeout(() => window.location.href = 'index.html', 1000);
            } else {
                message.className = 'auth-msg error';
                message.textContent = result.message;
            }
        });
    }
});
