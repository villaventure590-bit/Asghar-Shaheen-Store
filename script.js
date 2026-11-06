// Global Application State
let products = [];
let cart = [];
let activeCategory = 'all';

// Seed Database Generator with 200+ Realistic Medical Products (35+ per Category)
function generateFullInventory() {
    const list = [];
    
    const categories = [
        { id: 'tablets', rx: true, img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80', names: ['Panadol Extra 500mg', 'Augmentin 625mg', 'Disprin 300mg', 'Brufen 400mg', 'Flagyl 400mg', 'Arinac Forte', 'Risek 20mg', 'Softin 10mg', 'Surbex-Z Multivitamin', 'Cac-1000 Plus', 'Rigix 10mg', 'Neuromet 500mcg', 'Zincon Tablet', 'Ponstan 500mg', 'Sinemet 275mg', 'Glucophage 500mg', 'Loprin 75mg', 'Lowplat 75mg', 'Getryl 2mg', 'Zestril 5mg', 'Concor 5mg', 'Xanax 0.5mg', 'Lexotanil 3mg', 'Voltral 50mg', 'Keflex 500mg', 'Velosef 500mg', 'Ciproxin 500mg', 'Claritek 250mg', 'Azomax 250mg', 'Entamizole Tablet', 'Hydryllin Tablet', 'Nuberol Forte', 'Ornidazole 500mg', 'Exforge 5/80mg', 'Lipiget 10mg'] },
        { id: 'syrups', rx: false, img: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=400&q=80', names: ['Panadol Pediatric Syrup', 'Hydryllin Cough Syrup', 'Brufen Suspension 120ml', 'ACE-Forte Cough Syrup', 'Gaviscon Liquid 120ml', 'Mucaine Antacid Gel', 'Cran Max Syrup', 'Gravinate Syrup', 'Rigix Syrup 60ml', 'Softin Syrup', 'Augmentin Suspension', 'Zentel De-worming Syrup', 'T-Day Syrup', 'Septran Suspension', 'Amoxil Syrup', 'Cefspan 100mg Suspension', 'Claritek Suspension', 'Flagyl Suspension', 'Ventolin Expectorant', 'Corex Cough Syrup', 'Sancos Syrup', 'Pulmonol Syrup', 'IvyDyane Herbal Syrup', 'Prospan Syrup', 'Peditral ORS Liquid', 'Digene Gel', 'Flysyrup Pediatric', 'Multivitamin Kids Tonic', 'Iron & Folic Syrup', 'Calcium D3 Syrup', 'Zincon Kids Syrup', 'Appetizer Syrup', 'B-Complex Liquid', 'Lactulose Constipation Gel', 'Econorm Liquid'] },
        { id: 'injections', rx: true, img: 'https://images.unsplash.com/photo-1550572017-edd951baa74c?auto=format&fit=crop&w=400&q=80', names: ['Tobradex Eye Drops', 'Betnesol Eye/Ear Drops', 'Otosporin Ear Drops', 'Cefzone 1g IV Injection', 'Rocephin 1g Injection', 'Voltral 75mg Ampoule', 'Gravinate Injection', 'Risek 40mg IV Injection', 'Dicloran Ampoule', 'Epival Injection 500mg', 'Nuberol Ampoule', 'Tetanus Toxoid Vaccine', 'Normal Saline 1000ml IV', 'Dextrose Water 5%', 'Ringer Lactate Infusion', 'Methycobal Injection', 'Neurobion Injection', 'Tranexa 500mg Injection', 'Omeprazole IV Powder', 'Amikacin 500mg Vial', 'Genticyn Drops', 'Xynor Drops', 'Refresh Tears Eye Drops', 'Tear Naturale Free', 'Patanol Eye Drops', 'Polyfax Ophthalmic Ointment', 'Chloramphenicol Drops', 'Brimopress Eye Drops', 'Travatan Eye Drops', 'Timolol Drops', 'Solu-Cortef Injection', 'Solu-Medrol 40mg', 'Heparin IV Injection', 'Insulin Mixtard 30/70', 'Lantus SoloStar Pen'] },
        { id: 'firstaid', rx: false, img: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=400&q=80', names: ['Sterile Cotton Roll 100g', 'Pyodine Antiseptic Solution 60ml', 'Sunnyplast Adhesive Bandages (Box)', 'Crepe Bandage 4 Inch', 'Gauze Bandage 3 Inch', 'Surgical Tape Micropore', 'Dettol Liquid Antiseptic 100ml', 'Burnol Ointment 20g', 'Polyfax Skin Ointment', 'Hydrogen Peroxide Solution', 'Spirit Antiseptic 100ml', 'Digital Clinical Thermometer', 'Blood Pressure Monitor Cuff', 'Glucose Test Strips (50s)', 'Lancets Box', 'Surgical Gloves (Pair)', 'N95 Face Masks (Pack of 5)', 'Emergency Scissors', 'Safety Pins Pack', 'Triangular Bandage', 'First Aid Storage Box', 'Ice Gel Pack', 'Hot Water Bottle', 'Alcohol Swabs (100s)', 'Cotton Buds Pack', 'Surgical Blade Size 11', 'Normal Saline Wash Solution', 'Eye Wash Cup', 'Medical Tweezers', 'Elastic Wrist Support', 'Ankle Binder Strap', 'Finger Splint', 'Tourniquet Elastic Rubber', 'Antiseptic Wipes (Box)', 'Burn Shield Gel'] },
        { id: 'babycare', rx: false, img: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=400&q=80', names: ['Lactogen 1 Milk Powder 400g', 'Meiji MT Formula 400g', 'Cerelac Wheat & Milk 175g', 'Pampers Baby Diapers Large', 'Huggies Baby Wipes (80s)', 'Sudocrem Nappy Rash Cream 60g', 'Johnson Baby Lotion 200ml', 'Johnson Baby Shampoo 200ml', 'Feeding Bottle 250ml Glass', 'Silicone Teat Twin Pack', 'Baby Gripe Water 120ml', 'Bonnisan Drops 30ml', 'Woodwards Gripe Water', 'Baby Nail Clipper Set', 'Nasal Aspirator Bulb', 'Baby Powder 100g', 'Mothernest Calcium Gummies', 'Pregnacare Care Tablets', 'Mepore Maternity Pads', 'Breast Pump Manual', 'Breast Milk Storage Bags', 'Nipple Care Ointment', 'Baby Pacifier Orthodontic', 'Baby Sterilizing Tablets', 'Infant Zinc Drops', 'Vitamin D3 Baby Drops', 'Colic Calm Drops', 'Teething Gel 10g', 'Baby Hair Brush Soft', 'Baby Bath Wash 200ml', 'Baby Sunblock Lotion', 'Baby Ear Swabs Safety', 'Sterile Baby Sponge', 'Thermometer Flexible Tip', 'Baby Food Feeder Mesh'] },
        { id: 'personalcare', rx: false, img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80', names: ['Dettol Soap Original', 'Lifebuoy Hand Wash 250ml', 'Sensodyne Repair Toothpaste', 'Listerine Mouthwash 250ml', 'Vaseine Petroleum Jelly', 'Dermive Face Wash', 'Maxdiff Skin Brightening Cream', 'Suncoat Sunblock SPF 60', 'Neogadin Tonic', 'Cac-1000 Effervescent', 'Isabgol Husk 100g', 'ORSL Rehydration Solution', 'Eno Fruit Salt Sachet', 'Glycerine Liquid 50ml', 'Castor Oil 60ml', 'Olive Oil Medical Grade', 'Eucalyptus Oil 30ml', 'Clove Oil Toothache Drops', 'Foot Crack Cream 50g', 'Anti-Fungal Powder 100g', 'Hand Sanitizer 100ml', 'Moisturizing Cream 100g', 'Aloe Vera Skin Gel', 'Anti-Dandruff Medicated Shampoo', 'Neem Antiseptic Soap', 'Charcoal Face Mask', 'Lip Balm Medicated', 'Face Wipes Wet Box', 'Cotton Balls 50g Pack', 'Safety Razor Blades', 'Sanitary Pads Pack', 'Intimate Wash Female', 'Nail Polish Remover Wipes', 'Body Spray Antiperspirant', 'Hair Tonic Medicated'] }
    ];

    let id = 1;
    categories.forEach(cat => {
        cat.names.forEach(name => {
            list.push({
                id: id++,
                name: name,
                category: cat.id,
                price: Math.floor(Math.random() * 850) + 45,
                isRx: cat.rx,
                image: cat.img
            });
        });
    });

    return list;
}

// Initializing Application Data
document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('asghar_products');
    if (saved) {
        products = JSON.parse(saved);
    } else {
        products = generateFullInventory();
        localStorage.setItem('asghar_products', JSON.stringify(products));
    }
    renderProducts();
});

// Navigation Controller
function switchPage(pageId) {
    document.querySelectorAll('.page-view').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));
    
    document.getElementById(pageId).classList.add('active');
    
    // Highlight Active Link
    const navMap = {
        'homePage': 0, 'aboutPage': 1, 'productsPage': 2, 'categoriesPage': 3, 'contactPage': 4
    };
    const links = document.querySelectorAll('.nav-link');
    if (links[navMap[pageId]]) {
        links[navMap[pageId]].classList.add('active');
    }
}

// Render Medicine Catalog Grid
function renderProducts() {
    const grid = document.getElementById('productGrid');
    if (!grid) return;
    
    const searchVal = document.getElementById('searchInput').value.toLowerCase();
    grid.innerHTML = '';

    const filtered = products.filter(p => {
        const matchCategory = activeCategory === 'all' || p.category === activeCategory;
        const matchSearch = p.name.toLowerCase().includes(searchVal);
        return matchCategory && matchSearch;
    });

    filtered.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div>
                <img src="${p.image}" class="product-img" alt="${p.name}">
                ${p.isRx ? '<span class="rx-badge">Rx Prescription Required</span>' : ''}
                <h3 class="product-title">${p.name}</h3>
                <div class="product-price">PKR ${p.price}</div>
            </div>
            <button class="btn btn-primary" style="margin-top:10px; width:100%;" onclick="addToEnquiry(${p.id})">
                <i class="fa-solid fa-plus"></i> Add to Enquiry List
            </button>
        `;
        grid.appendChild(card);
    });
}

function setCategoryFilter(cat, btn) {
    activeCategory = cat;
    document.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProducts();
}

function selectCategory(cat) {
    activeCategory = cat;
    switchPage('productsPage');
    const pills = document.querySelectorAll('.pill-btn');
    pills.forEach(p => {
        if (p.getAttribute('onclick').includes(cat)) {
            pills.forEach(b => b.classList.remove('active'));
            p.classList.add('active');
        }
    });
    renderProducts();
}

// Shopping Enquiry Management
function addToEnquiry(id) {
    const prod = products.find(p => p.id === id);
    if (prod) {
        cart.push(prod);
        updateCartUI();
        openModal('cartModal');
    }
}

function updateCartUI() {
    document.getElementById('cartBadge').innerText = cart.length;
    const cartList = document.getElementById('cartItemList');
    let total = 0;

    if (cart.length === 0) {
        cartList.innerHTML = '<p>Your enquiry list is currently empty.</p>';
        document.getElementById('cartTotal').innerText = 'Total: PKR 0';
        return;
    }

    cartList.innerHTML = '';
    cart.forEach((item, index) => {
        total += item.price;
        const div = document.createElement('div');
        div.style.cssText = 'display:flex; justify-content:space-between; margin-bottom:8px; border-bottom:1px solid #eee; padding-bottom:5px;';
        div.innerHTML = `
            <span>${item.name} ${item.isRx ? '(Rx)' : ''}</span>
            <span>PKR ${item.price}</span>
        `;
        cartList.appendChild(div);
    });

    document.getElementById('cartTotal').innerText = `Total: PKR ${total}`;
}

function sendWhatsAppOrder() {
    if (cart.length === 0) return alert('Your list is empty.');
    let msg = 'Assalamu Alaikum Asghar Medical Store, I would like to inquire about stock and purchase of:\n\n';
    cart.forEach((item, i) => {
        msg += `${i+1}. ${item.name} - PKR ${item.price}\n`;
    });
    msg += `\nPlease confirm availability for delivery in Loralai.`;
    window.open(`https://wa.me/923288041010?text=${encodeURIComponent(msg)}`, '_blank');
}

// Modal Handlers
function openModal(id) { document.getElementById(id).style.display = 'flex'; }
function closeModal(id) { document.getElementById(id).style.display = 'none'; }

// Admin Inventory Actions
function seedInventory() {
    products = generateFullInventory();
    localStorage.setItem('asghar_products', JSON.stringify(products));
    renderProducts();
    alert('Catalog updated with 200+ demo medicines!');
}

function resetInventory() {
    products = [];
    localStorage.removeItem('asghar_products');
    renderProducts();
    alert('Catalog emptied.');
}

document.getElementById('addProductForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const newProd = {
        id: Date.now(),
        name: document.getElementById('pName').value,
        category: document.getElementById('pCat').value,
        price: parseFloat(document.getElementById('pPrice').value),
        isRx: document.getElementById('pRx').value === 'true',
        image: document.getElementById('pImg').value || "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80"
    };
    products.unshift(newProd);
    localStorage.setItem('asghar_products', JSON.stringify(products));
    renderProducts();
    closeModal('adminModal');
    e.target.reset();
});

// Automatically update Formspree summary data whenever cart updates
function updateCartUI() {
    document.getElementById('cartBadge').innerText = cart.length;
    const cartList = document.getElementById('cartItemList');
    let total = 0;
    let summaryText = '';

    if (cart.length === 0) {
        cartList.innerHTML = '<p>Your enquiry list is currently empty.</p>';
        document.getElementById('cartTotal').innerText = 'Total: PKR 0';
        document.getElementById('formspreeSummary').value = '';
        document.getElementById('formspreeTotal').value = 'PKR 0';
        return;
    }

    cartList.innerHTML = '';
    cart.forEach((item, index) => {
        total += item.price;
        summaryText += `${index + 1}. ${item.name} (${item.isRx ? 'Rx Required' : 'OTC'}) - PKR ${item.price}\n`;
        
        const div = document.createElement('div');
        div.style.cssText = 'display:flex; justify-content:space-between; margin-bottom:8px; border-bottom:1px solid #eee; padding-bottom:5px;';
        div.innerHTML = `
            <span>${item.name} ${item.isRx ? '<small style="color:red;">(Rx)</small>' : ''}</span>
            <span>PKR ${item.price}</span>
        `;
        cartList.appendChild(div);
    });

    document.getElementById('cartTotal').innerText = `Total: PKR ${total}`;
    
    // Set hidden Formspree values
    document.getElementById('formspreeSummary').value = summaryText;
    document.getElementById('formspreeTotal').value = `PKR ${total}`;
}

// Validate cart is not empty before Formspree sends email
document.getElementById('formspreeOrderForm').addEventListener('submit', function(e) {
    if (cart.length === 0) {
        e.preventDefault();
        alert('Please add at least one medicine item to your list before submitting.');
    }
});

// dash bord 

// Set your secret password for the Admin Panel
const ADMIN_SECRET_KEY = "asghar2026"; 

// Verify password entry
function verifyAdminPassword() {
    const inputPass = document.getElementById('adminPassInput').value;
    const errorMsg = document.getElementById('adminLoginError');
    
    if (inputPass === ADMIN_SECRET_KEY) {
        document.getElementById('adminLoginForm').style.display = 'none';
        document.getElementById('adminDashboardView').style.display = 'block';
        errorMsg.style.display = 'none';
        document.getElementById('adminPassInput').value = '';
        renderAdminOrders();
    } else {
        errorMsg.style.display = 'block';
    }
}

// Lock Admin Panel
function lockAdminPanel() {
    document.getElementById('adminLoginForm').style.display = 'block';
    document.getElementById('adminDashboardView').style.display = 'none';
    closeModal('adminModal');
}

// Intercept Formspree submission to log order locally before sending
document.getElementById('formspreeOrderForm').addEventListener('submit', function(e) {
    if (cart.length === 0) {
        e.preventDefault();
        alert('Please add at least one medicine item to your enquiry list before submitting.');
        return;
    }

    // Save order data locally for Admin Dashboard view
    let orders = JSON.parse(localStorage.getItem('asghar_orders') || '[]');
    const newOrder = {
        id: Date.now(),
        date: new Date().toLocaleString(),
        itemsCount: cart.length,
        total: document.getElementById('cartTotal').innerText
    };
    orders.unshift(newOrder);
    localStorage.setItem('asghar_orders', JSON.stringify(orders));
});

// Render recorded orders in Admin Panel
function renderAdminOrders() {
    const ordersBody = document.getElementById('adminOrdersBody');
    let orders = JSON.parse(localStorage.getItem('asghar_orders') || '[]');

    if (orders.length === 0) {
        ordersBody.innerHTML = '<tr><td colspan="3" style="padding: 10px; text-align: center;">No customer orders logged yet.</td></tr>';
        return;
    }

    ordersBody.innerHTML = '';
    orders.forEach(order => {
        const tr = document.createElement('tr');
        tr.style.borderBottom = '1px solid #eee';
        tr.innerHTML = `
            <td style="padding: 8px;">${order.date}</td>
            <td style="padding: 8px;">${order.itemsCount} Medicine(s)</td>
            <td style="padding: 8px; font-weight: bold; color: var(--emerald-dark);">${order.total}</td>
        `;
        ordersBody.appendChild(tr);
    });
}
// dash borad end 

// admin securit  strat 
// -------------------------------------------------------------
// SECURE ADMIN AUTHENTICATION & LOCKOUT SYSTEM
// -------------------------------------------------------------

// Helper to intercept modal open and check if setup is needed
const originalOpenModal = window.openModal || function(id) { document.getElementById(id).style.display = 'block'; };
window.openModal = function(modalId) {
    if (modalId === 'adminModal') {
        checkAdminSetupState();
    }
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = 'block';
};

// Check if owner details are already registered
function checkAdminSetupState() {
    const ownerData = localStorage.getItem('asghar_owner_profile');
    const setupView = document.getElementById('adminSetupView');
    const loginView = document.getElementById('adminLoginForm');
    const dashView = document.getElementById('adminDashboardView');

    dashView.style.display = 'none';

    if (!ownerData) {
        // First time ever: show registration form
        setupView.style.display = 'block';
        loginView.style.display = 'none';
    } else {
        // Already registered: show password login prompt
        setupView.style.display = 'none';
        loginView.style.display = 'block';
        checkLockoutStatus();
    }
}

// Save First-Time Owner Details
function saveOwnerSetup(e) {
    e.preventDefault();
    const profile = {
        name: document.getElementById('ownerName').value,
        phone: document.getElementById('ownerPhone').value,
        cnic: document.getElementById('ownerCnic').value,
        city: document.getElementById('ownerCity').value,
        province: document.getElementById('ownerProvince').value,
        password: document.getElementById('ownerNewPass').value
    };

    localStorage.setItem('asghar_owner_profile', JSON.stringify(profile));
    alert('Owner profile successfully registered! Please log in with your new password.');
    checkAdminSetupState();
}

// Toggle Password Visibility (Eye Icon)
function togglePasswordVisibility() {
    const passInput = document.getElementById('adminPassInput');
    const icon = document.getElementById('togglePassIcon');
    if (passInput.type === 'password') {
        passInput.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        passInput.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}

// Check Lockout Timer (Blocks for 2 hours after 10 failed attempts)
function checkLockoutStatus() {
    const lockoutUntil = localStorage.getItem('asghar_lockout_until');
    const errorMsg = document.getElementById('adminLoginError');
    const loginBtn = document.getElementById('loginBtn');
    const passInput = document.getElementById('adminPassInput');

    if (lockoutUntil) {
        const remainingTime = new Date(lockoutUntil).getTime() - Date.now();
        if (remainingTime > 0) {
            const minutesLeft = Math.ceil(remainingTime / (1000 * 60));
            errorMsg.innerText = `Too many failed login attempts. Locked for ${minutesLeft} more minute(s).`;
            errorMsg.style.display = 'block';
            passInput.disabled = true;
            loginBtn.disabled = true;
            return true;
        } else {
            localStorage.removeItem('asghar_lockout_until');
            localStorage.setItem('asghar_failed_attempts', '0');
        }
    }
    passInput.disabled = false;
    loginBtn.disabled = false;
    return false;
}

// Verify Password with Progressive Security (3 warnings, 10-attempt 2-hour lockout)
function verifyAdminPassword() {
    if (checkLockoutStatus()) return;

    const inputPass = document.getElementById('adminPassInput').value;
    const errorMsg = document.getElementById('adminLoginError');
    const ownerProfile = JSON.parse(localStorage.getItem('asghar_owner_profile') || '{}');
    
    let failedAttempts = parseInt(localStorage.getItem('asghar_failed_attempts') || '0');

    if (inputPass === ownerProfile.password) {
        // Success
        localStorage.setItem('asghar_failed_attempts', '0');
        document.getElementById('adminLoginForm').style.display = 'none';
        document.getElementById('adminDashboardView').style.display = 'block';
        errorMsg.style.display = 'none';
        document.getElementById('adminPassInput').value = '';
        
        // Show owner badge info
        document.getElementById('ownerBadgeInfo').innerText = 
            `Owner: ${ownerProfile.name} | City: ${ownerProfile.city}, ${ownerProfile.province} | Ph: ${ownerProfile.phone}`;
        
        renderAdminOrders();
    } else {
        // Failed attempt
        failedAttempts++;
        localStorage.setItem('asghar_failed_attempts', failedAttempts.toString());

        if (failedAttempts >= 10) {
            // Lock out for 2 hours
            const lockoutTime = new Date(Date.now() + 2 * 60 * 60 * 1000);
            localStorage.setItem('asghar_lockout_until', lockoutTime.toISOString());
            errorMsg.innerText = "10 failed attempts reached! Locked out for 2 hours.";
            checkLockoutStatus();
        } else if (failedAttempts >= 3) {
            errorMsg.innerText = `Incorrect password! Warning: ${10 - failedAttempts} attempts remaining before 2-hour lockout.`;
            errorMsg.style.display = 'block';
        } else {
            errorMsg.innerText = "Incorrect secret password!";
            errorMsg.style.display = 'block';
        }
    }
}

function lockAdminPanel() {
    document.getElementById('adminLoginForm').style.display = 'block';
    document.getElementById('adminDashboardView').style.display = 'none';
    closeModal('adminModal');
}

// -------------------------------------------------------------
// F8 KEYBOARD TRIGGER
// -------------------------------------------------------------
document.addEventListener('keydown', function(e) {
    if (e.key === 'F8') {
        e.preventDefault();
        openModal('adminModal');
    }
});
// end the admin secrty 


// strat of admin datat11111 
// -------------------------------------------------------------
// SECURE ORDER CAPTURE & PRINTABLE RECEIPT LOGIC
// -------------------------------------------------------------

const checkoutForm = document.getElementById('formspreeOrderForm');
if (checkoutForm) {
    checkoutForm.addEventListener('submit', function(e) {
        if (typeof cart === 'undefined' || cart.length === 0) {
            e.preventDefault();
            alert('Please add at least one medicine item to your order before submitting.');
            return;
        }

        // Gather all required and optional customer details
        const customerOrder = {
            id: Date.now(),
            date: new Date().toLocaleString(),
            name: document.getElementById('custName')?.value || 'Walk-in Customer',
            phone: document.getElementById('custPhone')?.value || 'Not Provided',
            city: document.getElementById('custCity')?.value || 'Loralai',
            doctor: document.getElementById('custDoctor')?.value || 'None Specified',
            notes: document.getElementById('custNotes')?.value || 'None',
            items: cart.map(item => ({ name: item.name, price: item.price, quantity: item.quantity || 1 })),
            total: document.getElementById('cartTotal')?.innerText || 'PKR 0'
        };

        let orders = JSON.parse(localStorage.getItem('asghar_orders') || '[]');
        orders.unshift(customerOrder);
        localStorage.setItem('asghar_orders', JSON.stringify(orders));
    });
}

// Render Orders Table inside Admin Panel
function renderAdminOrders() {
    const ordersBody = document.getElementById('adminOrdersBody');
    if (!ordersBody) return;
    
    let orders = JSON.parse(localStorage.getItem('asghar_orders') || '[]');

    if (orders.length === 0) {
        ordersBody.innerHTML = '<tr><td colspan="4" style="padding: 15px; text-align: center;">No customer orders logged yet.</td></tr>';
        return;
    }

    ordersBody.innerHTML = '';
    orders.forEach((order, index) => {
        const tr = document.createElement('tr');
        tr.style.borderBottom = '1px solid #eee';
        tr.innerHTML = `
            <td style="padding: 10px; font-size: 0.9rem;">${order.date}</td>
            <td style="padding: 10px;">
                <strong>${order.name}</strong><br>
                <span style="font-size: 0.85rem; color: #555;">📍 ${order.city} | 📞 ${order.phone}</span><br>
                <span style="font-size: 0.8rem; color: #007bff;">Dr: ${order.doctor}</span>
            </td>
            <td style="padding: 10px; font-weight: bold; color: var(--emerald-dark);">${order.total}</td>
            <td style="padding: 10px; text-align: center;">
                <button type="button" class="btn btn-primary" style="padding: 6px 12px; font-size: 0.85rem;" onclick="viewOrderReceipt(${index})">
                    <i class="fa-solid fa-file-invoice"></i> View Printable Receipt
                </button>
            </td>
        `;
        ordersBody.appendChild(tr);
    });
}

// Open Printable Receipt Modal (Ensures button works reliably)
window.viewOrderReceipt = function(orderIndex) {
    let orders = JSON.parse(localStorage.getItem('asghar_orders') || '[]');
    const order = orders[orderIndex];
    if (!order) return;

    document.getElementById('receiptDate').innerText = order.date;
    document.getElementById('receiptCustName').innerText = order.name;
    document.getElementById('receiptPhone').innerText = order.phone;
    document.getElementById('receiptLocation').innerText = order.city;
    document.getElementById('receiptDoctor').innerText = order.doctor;
    document.getElementById('receiptNotes').innerText = order.notes;
    document.getElementById('receiptTotalAmount').innerText = order.total;

    const itemsBody = document.getElementById('receiptItemsBody');
    if (itemsBody) {
        itemsBody.innerHTML = '';
        order.items.forEach(item => {
            const tr = document.createElement('tr');
            tr.style.borderBottom = '1px solid #eee';
            tr.innerHTML = `
                <td style="padding: 8px;">${item.name}</td>
                <td style="padding: 8px; text-align: center;">${item.quantity}</td>
                <td style="padding: 8px; text-align: right;">${item.price}</td>
            `;
            itemsBody.appendChild(tr);
        });
    }

    if (typeof openModal === 'function') {
        openModal('orderReceiptModal');
    } else {
        document.getElementById('orderReceiptModal').style.display = 'block';
    }
};
// end of admin datat11111 


// deleting the odere part strat 


// -------------------------------------------------------------
// ADMIN DASHBOARD: DELETE, CLEAR & MAXIMIZE CONTROLS
// -------------------------------------------------------------

// Delete a single order by its array index
window.deleteSingleOrder = function(index) {
    if (confirm("Are you sure you want to delete this order?")) {
        let orders = JSON.parse(localStorage.getItem('asghar_orders') || '[]');
        orders.splice(index, 1);
        localStorage.setItem('asghar_orders', JSON.stringify(orders));
        renderAdminOrders();
    }
};

// Clear all customer orders
window.clearAllOrders = function() {
    if (confirm("WARNING: This will delete ALL customer orders permanently. Are you sure?")) {
        localStorage.removeItem('asghar_orders');
        renderAdminOrders();
    }
};

// Maximize / Minimize Admin Modal Screen Toggle
let isMaximized = false;
window.toggleMaximizeAdmin = function() {
    const modalContent = document.querySelector('#adminModal .modal-content');
    const maxMinBtn = document.getElementById('maxMinBtn');
    const maxMinIcon = document.getElementById('maxMinIcon');

    if (!modalContent) return;

    if (!isMaximized) {
        // Expand to Full Screen
        modalContent.style.maxWidth = '100vw';
        modalContent.style.width = '95vw';
        modalContent.style.height = '90vh';
        modalContent.style.maxHeight = '90vh';
        modalContent.style.margin = '2vh auto';
        maxMinIcon.className = 'fa-solid fa-compress';
        maxMinBtn.innerHTML = '<i class="fa-solid fa-compress"></i> Normal Screen';
        isMaximized = true;
    } else {
        // Shrink back to normal size
        modalContent.style.maxWidth = '750px';
        modalContent.style.width = '100%';
        modalContent.style.height = 'auto';
        modalContent.style.maxHeight = 'none';
        modalContent.style.margin = '10vh auto';
        maxMinIcon.className = 'fa-solid fa-expand';
        maxMinBtn.innerHTML = '<i class="fa-solid fa-expand"></i> Full Screen';
        isMaximized = false;
    }
};

// Updated renderAdminOrders with Delete button and Order Count update
const originalRenderAdminOrders = window.renderAdminOrders;
window.renderAdminOrders = function() {
    const ordersBody = document.getElementById('adminOrdersBody');
    const orderCountLabel = document.getElementById('orderCountLabel');
    if (!ordersBody) return;
    
    let orders = JSON.parse(localStorage.getItem('asghar_orders') || '[]');

    if (orderCountLabel) {
        orderCountLabel.innerText = `Total Orders: ${orders.length}`;
    }

    if (orders.length === 0) {
        ordersBody.innerHTML = '<tr><td colspan="4" style="padding: 15px; text-align: center;">No customer orders logged yet.</td></tr>';
        return;
    }

    ordersBody.innerHTML = '';
    orders.forEach((order, index) => {
        const tr = document.createElement('tr');
        tr.style.borderBottom = '1px solid #eee';
        tr.innerHTML = `
            <td style="padding: 10px; font-size: 0.9rem;">${order.date}</td>
            <td style="padding: 10px;">
                <strong>${order.name}</strong><br>
                <span style="font-size: 0.85rem; color: #555;">📍 ${order.city} | 📞 ${order.phone}</span><br>
                <span style="font-size: 0.8rem; color: #007bff;">Dr: ${order.doctor}</span>
            </td>
            <td style="padding: 10px; font-weight: bold; color: var(--emerald-dark);">${order.total}</td>
            <td style="padding: 10px; text-align: center; white-space: nowrap;">
                <button type="button" class="btn btn-primary" style="padding: 5px 8px; font-size: 0.8rem; margin-right: 4px;" onclick="viewOrderReceipt(${index})" title="View Receipt">
                    <i class="fa-solid fa-file-invoice"></i>
                </button>
                <button type="button" class="btn btn-secondary" style="padding: 5px 8px; font-size: 0.8rem; background: #dc3545; color: white; border: none;" onclick="deleteSingleOrder(${index})" title="Delete Order">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </td>
        `;
        ordersBody.appendChild(tr);
    });
};
// and to end deletin 


// togle last coding strt
// Secret F8 Keyboard Trigger for Admin Access Only
document.addEventListener('keydown', function(e) {
    if (e.key === 'F8') {
        e.preventDefault();
        const modal = document.getElementById('adminModal');
        if (modal) {
            modal.style.display = 'block';
            if (typeof checkAdminSetupState === 'function') {
                checkAdminSetupState();
            }
        }
    }
});
// togle last coding end
// -------------------------------------------------------------
// SECRET MOBILE & PC ACCESS SHORTCUTS
// -------------------------------------------------------------

// 1. Mobile Secret Shortcut: Tap Store Title 5 Times Quickly
let tapCount = 0;
let tapTimer = null;

function handleMobileAdminTap() {
    tapCount++;
    
    if (tapTimer) clearTimeout(tapTimer);
    
    // Reset tap count if you pause for more than 1 second
    tapTimer = setTimeout(() => {
        tapCount = 0;
    }, 1000);

    // After 5 fast taps, open the secret admin login box
    if (tapCount >= 5) {
        tapCount = 0;
        if (typeof openModal === 'function') {
            openModal('adminModal');
        } else {
            const modal = document.getElementById('adminModal');
            if (modal) modal.style.display = 'block';
        }
    }
}

// 2. Secret Keyboard Shortcut for Computers (Press F8 key)
document.addEventListener('keydown', function(e) {
    if (e.key === 'F8') {
        e.preventDefault();
        if (typeof openModal === 'function') {
            openModal('adminModal');
        } else {
            const modal = document.getElementById('adminModal');
            if (modal) modal.style.display = 'block';
        }
    }
});

// tap 5 times screen to come thew admin dash strt
// -------------------------------------------------------------
// GLOBAL NUMBER/KEY DETECTOR (Press '1' anywhere to open Admin)
// -------------------------------------------------------------
document.addEventListener('keydown', function(e) {
    // Ignore key presses if you are currently typing inside a form field or chat box
    const activeElement = document.activeElement;
    if (activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA')) {
        return;
    }

    // Check if the key pressed is "1" (or "F8")
    if (e.key === '1' || e.key === 'F8') {
        e.preventDefault();
        
        if (typeof openModal === 'function') {
            openModal('adminModal');
        } else {
            const modal = document.getElementById('adminModal');
            if (modal) {
                modal.style.display = 'block';
                if (typeof checkAdminSetupState === 'function') {
                    checkAdminSetupState();
                }
            }
        }
    }
});
// tap 5 times screen to come thew admin dash end
