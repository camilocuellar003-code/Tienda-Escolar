const menuProductos = [
    { id: 1, nombre: "Chilaquiles verdes con Pollo", precio: 45.00, categoria: "comida", enExistencia: true },
    { id: 2, nombre: "Chilaquiles rojos con Pollo", precio: 45.00, categoria: "comida", enExistencia: true },
    { id: 3, nombre: "Papás con nugget's", precio: 45.00, categoria: "comida", enExistencia: true },
    { id: 4, nombre: "Gorditas de chicharron", precio: 45.00, categoria: "comida", enExistencia: true },
    { id: 5, nombre: "Hot Dogs", precio: 45.00, categoria: "comida", enExistencia: true },
    { id: 6, nombre: "Pambazos", precio: 45.00, categoria: "comida", enExistencia: true },
    { id: 7, nombre: "Tacos dorados de pollo", precio: 45.00, categoria: "comida", enExistencia: true },
    { id: 8, nombre: "Sincronizadas", precio: 25.00, categoria: "comida", enExistencia: true },
    { id: 9, nombre: "Huarache al pastor", precio: 45.00, categoria: "comida", enExistencia: true },
    { id: 10, nombre: "Torta de Milanesa", precio: 40.00, categoria: "comida", enExistencia: true },
    { id: 11, nombre: "Molletes Especiales", precio: 35.00, categoria: "comida", enExistencia: true },
    { id: 12, nombre: "Takis Fuego", precio: 25.00, categoria: "snacks", enExistencia: true },
    { id: 13, nombre: "Takis salsa brava", precio: 20.00, categoria: "snacks", enExistencia: true },
    { id: 14, nombre: "Takis chile limon", precio: 12.00, categoria: "snacks", enExistencia: true },
    { id: 15, nombre: "Coca-Cola 600ml", precio: 18.00, categoria: "refresco y agua", enExistencia: true },
    { id: 16, nombre: "Sidral Mundet 600ml", precio: 17.00, categoria: "refresco y agua", enExistencia: true },
    { id: 17, nombre: "Agua de Horchata 1L", precio: 22.00, categoria: "refresco y agua", enExistencia: true },
    { id: 18, nombre: "Agua de Jamaica 1L", precio: 22.00, categoria: "refresco y agua", enExistencia: true },
    { id: 19, nombre: "Agua de Limon 1L", precio: 22.00, categoria: "refresco y agua", enExistencia: true },
    { id: 20, nombre: "Agua de Tamarindo 1L", precio: 22.00, categoria: "refresco y agua", enExistencia: true},
    { id: 21, nombre: "Boing de Mango 500ml", precio: 25.00, categoria: "refresco y agua", enExistencia: true},
    { id: 22, nombre: "Boing de Manzana 500ml", precio: 25.00, categoria: "refresco y agua", enExistencia: true},
    { id: 23, nombre: "Boing de Uva 500ml", precio: 25.00, categoria: "refresco y agua", enExistencia: true},
    { id: 24, nombre: "Boing de Guayaba 500ml", precio: 25.00, categoria: "refresco y agua", enExistencia: true},
    { id: 25, nombre: "Boing de Fresa 500ml", precio: 25.00, categoria: "refresco y agua", enExistencia: true}, 
    { id: 26, nombre: "Papás sol Extremas", precio: 25.00, categoria: "snacks", enExistencia: true},
    { id: 27, nombre: "Papás sol Rifaditas", precio: 25.00, categoria: "snacks", enExistencia: true},
    { id: 28, nombre: "Papás sol Habaneras", precio: 25.00, categoria: "snacks", enExistencia: true},
    { id: 29, nombre: "Papás sol Adobadas", precio: 25.00, categoria: "snacks", enExistencia: true},
    { id: 30, nombre: "Papás sol Limon y Sal", precio: 25.00, categoria: "snacks", enExistencia: true},
    { id: 31, nombre: "Sabritas Originales", precio: 20.00, categoria: "snacks", enExistencia: true},
    { id: 32, nombre: "Sabritas de Limon", precio: 20.00, categoria: "snacks", enExistencia: true},
    { id: 33, nombre: "Sabritas Flamin-hot", precio: 20.00, categoria: "snacks", enExistencia: true},
    { id: 34, nombre: "Chetos Flamin-hot", precio: 25.00, categoria: "snacks", enExistencia: true},
    { id: 35, nombre: "Doritos nacho", precio: 20.00, categoria: "snacks", enExistencia: true},
    { id: 36, nombre: "Doritos incognita", precio: 20.00, categoria: "snacks", enExistencia: true},
    { id: 37, nombre: "Doritos Dinamita Morados", precio: 25.00, categoria: "snacks", enExistencia: true},
    { id: 38, nombre: "Doritos Dinamita Verdes", precio: 25.00, categoria: "snacks", enExistencia: true},
    { id: 39, nombre: "Runners", precio: 25.00, categoria: "snacks", enExistencia: true},
    { id: 40, nombre: "Cafe con leche", precio: 20.00, categoria: "refresco y agua", enExistencia: true},
    { id: 41, nombre: "Hamburguesas", precio: 45.00, categoria: "comida", enExistencia: true},
    { id: 42, nombre: "Chocolate Carlos V", precio: 15.00, categoria: "Dulces", enExistencia: true},
    { id: 43, nombre: "Chocolate Kinder Delice", precio: 20.00, categoria: "Dulces", enExistencia: true},
    { id: 44, nombre: "Aciditos", precio: 1.50, categoria: "Dulces", enExistencia: true},
    { id: 45, nombre: "Paleta de Mano", precio: 5.00, categoria: "Dulces", enExistencia: true},
    { id: 46, nombre: "Paleta Pintazul", precio: 5.00, categoria: "Dulces", enExistencia: true},
    { id: 47, nombre: "Paleta Sandi Brochas", precio: 5.00, categoria: "Dulces", enExistencia: true},
    { id: 48, nombre: "Chicle Trident Fresa 4 pastillas", precio: 3.00, categoria: "Dulces", enExistencia: true}
];


let carrito = [];
let alumnoMatricula = ""; 

function displayProducts(productsList) {
    const container = document.getElementById('menu-container');
    container.innerHTML = ''; 

    productsList.forEach(producto => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        
        if (!producto.enExistencia) {
            card.classList.add('disabled');
        }

        const statusText = producto.enExistencia ? "En Stock" : "Agotado";
        const statusClass = producto.enExistencia ? "in-stock" : "out-of-stock";

        const actionButton = producto.enExistencia 
            ? `<button class="btn-add-cart" onclick="addToCart(${producto.id})">Agregar ＋</button>`
            : `<span class="status-badge ${statusClass}">${statusText}</span>`;

        card.innerHTML = `
            <div class="product-info">
                <h3>${producto.nombre}</h3>
                <p class="price">$${producto.precio.toFixed(2)}</p>
            </div>
            <div class="card-actions">
                ${producto.enExistencia ? `<span class="status-badge ${statusClass}">${statusText}</span>` : ''}
                ${actionButton}
            </div>
        `;

        container.appendChild(card);
    });
}

function filterCategory(category) {
    const buttons = document.querySelectorAll('.btn-category');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    if (window.event && window.event.target) {
        window.event.target.classList.add('active');
    }

    if (category === 'todos') {
        displayProducts(menuProductos);
    } else {
        const filtered = menuProductos.filter(p => p.categoria.toLowerCase() === category.toLowerCase());
        displayProducts(filtered);
    }
}


function toggleCart() {
    const sidebar = document.getElementById('cart-sidebar');
    sidebar.classList.toggle('open');
}


function toggleLoginModal() {
    const modal = document.getElementById('login-modal');
    modal.classList.toggle('show');
    if (modal.classList.contains('show')) {
        document.getElementById('student-matricula').focus();
    }
}

function loginStudent() {
    const inputMatricula = document.getElementById('student-matricula').value.trim();
    const loginToggle = document.getElementById('login-toggle');

    if (inputMatricula !== "") {
        alumnoMatricula = inputMatricula;
        
        loginToggle.innerHTML = "✅";
        loginToggle.style.borderColor = "var(--stock-color)";
        
        toggleLoginModal();
    } else {
        alert("Por favor, ingresa una matrícula válida.");
    }
}

function togglePoliciesModal() {
    const modal = document.getElementById('policies-modal');
    modal.classList.toggle('show');
}


function addToCart(id) {
    const producto = menuProductos.find(p => p.id === id);
    if (producto) {
        carrito.push(producto);
        updateCartUI();
        showNotification(`${producto.nombre} agregado al carrito 🛒`);
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.innerText = message;
    
    Object.assign(notification.style, {
        position: 'fixed',
        bottom: '100px',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: 'var(--bg-card)',
        color: 'var(--accent-color)',
        border: '2px solid var(--accent-color)',
        padding: '12px 24px',
        borderRadius: '30px',
        boxShadow: '0 0 15px rgba(0, 210, 255, 0.4)',
        zIndex: '1000',
        fontWeight: 'bold',
        fontSize: '0.95rem',
        pointerEvents: 'none',
        opacity: '0',
        transition: 'all 0.3s ease'
    });

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.bottom = '120px';
        notification.style.opacity = '1';
    }, 50);

    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.bottom = '140px';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}


function removeFromCart(index) {
    carrito.splice(index, 1);
    updateCartUI();
}

function switchPaymentTab(tabName) {
    // Quitar clase activa a botones y contenidos
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));


    const targetEvent = window.event;
    if (targetEvent && targetEvent.target) {
        targetEvent.target.classList.add('active');
    }

    document.getElementById(`tab-content-${tabName}`).classList.add('active');
}


function processPayPalPayment() {
    if (!checkStudentAuth()) return;

    const email = document.getElementById('paypal-email').value.trim();
    const pass = document.getElementById('paypal-password').value.trim();

    if (email === "" || pass === "") {
        alert("Por favor, introduce tu correo y contraseña de PayPal.");
        return;
    }


    document.getElementById('paypal-email').value = "";
    document.getElementById('paypal-password').value = "";
    executeFinalPurchase();
}


function processNuPayment() {
    if (!checkStudentAuth()) return;

    const cardNumber = document.getElementById('nu-card-number').value.trim();
    const cardName = document.getElementById('nu-card-name').value.trim();
    const cardExpiry = document.getElementById('nu-card-expiry').value.trim();
    const cardNip = document.getElementById('nu-card-nip').value.trim();

    if (cardNumber.length < 16 || cardName === "") {
        alert("Por favor, introduce los 16 dígitos de tu tarjeta Nu y el nombre completo del titular.");
        return;
    }

    if (cardExpiry === "" || cardNip.length < 4) {
        alert("Por favor, introduce una fecha de vigencia válida y tu NIP de 4 dígitos.");
        return;
    }


    document.getElementById('nu-card-number').value = "";
    document.getElementById('nu-card-name').value = "";
    document.getElementById('nu-card-expiry').value = "";
    document.getElementById('nu-card-nip').value = "";
    executeFinalPurchase();
}


function checkStudentAuth() {
    if (alumnoMatricula === "") {
        toggleCart(); 
        toggleLoginModal(); 
        return false; 
    }
    return true;
}


function executeFinalPurchase() {
    toggleCart();
    const modal = document.getElementById('purchase-modal');
    const modalSub = modal.querySelector('.modal-sub');
    
    modalSub.innerText = `Recoge tu pedido en caja con tu matrícula: ${alumnoMatricula}.`;
    modal.classList.add('show');

    carrito = [];
    updateCartUI();
}


function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('show');
    }
}


function updateCartUI() {
    document.getElementById('cart-count').innerText = carrito.length;

    const container = document.getElementById('cart-items-container');
    container.innerHTML = '';

    let total = 0;

    carrito.forEach((producto, index) => {
        total += producto.precio;
        
        const itemRow = document.createElement('div');
        itemRow.classList.add('cart-item');
        itemRow.innerHTML = `
            <div class="cart-item-info">
                <h4>${producto.nombre}</h4>
                <p>$${producto.precio.toFixed(2)}</p>
            </div>
            <button class="btn-remove" onclick="removeFromCart(${index})">Quitar</button>
        `;
        container.appendChild(itemRow);
    });

    document.getElementById('cart-total-price').innerText = `$${total.toFixed(2)}`;


    const paypalBtn = document.getElementById('btn-pay-paypal');
    const nuBtn = document.getElementById('btn-pay-nu');
    
    if (paypalBtn && nuBtn) {
        const isCartEmpty = carrito.length === 0;
        paypalBtn.disabled = isCartEmpty;
        nuBtn.disabled = isCartEmpty;
    }
}


window.addEventListener('DOMContentLoaded', () => {
    displayProducts(menuProductos);
    
    document.getElementById('login-toggle').innerHTML = "👤";
    document.getElementById('policies-toggle').innerHTML = "📜";
});
