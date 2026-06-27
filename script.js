// ==========================================
// VARIABLES GLOBALES
// ==========================================

// Carga el carrito guardado aunque cambies de página
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Carga la matrícula guardada aunque cambies de página
let alumnoMatricula = localStorage.getItem("alumnoMatricula") || "";

// ==========================================
// GUARDAR DATOS
// ==========================================
function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function guardarMatricula() {
    localStorage.setItem("alumnoMatricula", alumnoMatricula);
}

// ==========================================
// AGREGAR PRODUCTOS AL CARRITO
// ==========================================
function agregarComboCarrito(id, nombre, precio) {
    carrito.push({
        id: id,
        nombre: nombre,
        precio: Number(precio) || 0
    });

    guardarCarrito();
    updateCartUI();
    showNotification(`${nombre} agregado al carrito 🛒`);
}

function addToCart(id) {
    if (typeof menuProductos === "undefined") {
        showNotification("Producto agregado al carrito 🛒");
        return;
    }

    const producto = menuProductos.find(p => Number(p.id) === Number(id));

    if (producto) {
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: Number(producto.precio) || 0
        });

        guardarCarrito();
        updateCartUI();
        showNotification(`${producto.nombre} agregado al carrito 🛒`);
    }
}

// ==========================================
// CARRITO
// ==========================================
function toggleCart() {
    const sidebar = document.getElementById("cart-sidebar");
    if (sidebar) sidebar.classList.toggle("open");
}

function removeFromCart(index) {
    carrito.splice(index, 1);

    guardarCarrito();
    updateCartUI();
}

function updateCartUI() {
    const countEl = document.getElementById("cart-count");
    const container = document.getElementById("cart-items-container");
    const totalEl = document.getElementById("cart-total-price");

    if (countEl) countEl.innerText = carrito.length;
    if (!container) return;

    container.innerHTML = "";

    let total = 0;

    if (carrito.length === 0) {
        container.innerHTML = `
            <p style="text-align:center; color:#c9b19f; font-style:italic; margin-top:20px;">
                Tu carrito está vacío.
            </p>
        `;
    }

    carrito.forEach((producto, index) => {
        total += Number(producto.precio) || 0;

        const item = document.createElement("div");
        item.classList.add("cart-item");

        item.innerHTML = `
            <div class="cart-item-info">
                <h4>${producto.nombre}</h4>
                <p>$${Number(producto.precio).toFixed(2)}</p>
            </div>
            <button class="btn-remove" onclick="removeFromCart(${index})">Quitar</button>
        `;

        container.appendChild(item);
    });

    if (totalEl) totalEl.innerText = `$${total.toFixed(2)}`;

    const paypalBtn = document.getElementById("btn-pay-paypal");
    const nuBtn = document.getElementById("btn-pay-nu");

    if (paypalBtn) paypalBtn.disabled = carrito.length === 0;
    if (nuBtn) nuBtn.disabled = carrito.length === 0;
}

// ==========================================
// NOTIFICACIÓN
// ==========================================
function showNotification(message) {
    const old = document.querySelector(".cart-notification");
    if (old) old.remove();

    const notification = document.createElement("div");
    notification.className = "cart-notification";
    notification.innerText = message;

    Object.assign(notification.style, {
        position: "fixed",
        bottom: "100px",
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "var(--bg-card)",
        color: "var(--accent-color)",
        border: "2px solid var(--accent-color)",
        padding: "12px 24px",
        borderRadius: "30px",
        boxShadow: "0 0 15px rgba(214,163,115,.4)",
        zIndex: "2000",
        fontWeight: "bold",
        opacity: "0",
        transition: "all .3s ease",
        pointerEvents: "none",
        textAlign: "center"
    });

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.opacity = "1";
        notification.style.bottom = "120px";
    }, 50);

    setTimeout(() => {
        notification.style.opacity = "0";
        notification.style.bottom = "140px";
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// ==========================================
// CREDENCIAL ESCOLAR
// ==========================================
function toggleLoginModal() {
    const modal = document.getElementById("login-modal");
    if (modal) modal.classList.toggle("show");
}

function loginStudent() {
    const input = document.getElementById("student-matricula");
    const loginToggle = document.getElementById("login-toggle");

    if (!input || input.value.trim() === "") {
        alert("Por favor, ingresa una matrícula válida.");
        return;
    }

    alumnoMatricula = input.value.trim();
    guardarMatricula();

    if (loginToggle) {
        loginToggle.innerHTML = "✅";
        loginToggle.style.borderColor = "var(--stock-color)";
    }

    toggleLoginModal();
    showNotification(`Credencial registrada: ${alumnoMatricula} ✅`);
}

// ==========================================
// REGLAMENTO Y SEGURIDAD
// ==========================================
function togglePoliciesModal() {
    const modal = document.getElementById("policies-modal");
    if (modal) modal.classList.toggle("show");
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove("show");
}

// ==========================================
// PESTAÑAS DE PAGO
// ==========================================
function switchPaymentTab(tabName) {
    document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
    document.querySelectorAll(".tab-content").forEach(tab => tab.classList.remove("active"));

    if (window.event && window.event.target) {
        window.event.target.classList.add("active");
    }

    const tab = document.getElementById(`tab-content-${tabName}`);
    if (tab) tab.classList.add("active");
}

// ==========================================
// PAGOS
// ==========================================
function checkStudentAuth() {
    if (alumnoMatricula === "") {
        toggleLoginModal();
        return false;
    }

    return true;
}

function processPayPalPayment() {
    if (!checkStudentAuth()) return;

    if (carrito.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }

    const email = document.getElementById("paypal-email").value.trim();
    const pass = document.getElementById("paypal-password").value.trim();

    if (email === "" || pass === "") {
        alert("Ingresa tu correo y contraseña de PayPal.");
        return;
    }

    executeFinalPurchase();
}

function processNuPayment() {
    if (!checkStudentAuth()) return;

    if (carrito.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }

    const cardNumber = document.getElementById("nu-card-number").value.trim();
    const cardName = document.getElementById("nu-card-name").value.trim();
    const cardExpiry = document.getElementById("nu-card-expiry").value.trim();
    const cardNip = document.getElementById("nu-card-nip").value.trim();

    if (cardNumber.length < 16 || cardName === "") {
        alert("Ingresa los datos completos de tu tarjeta Nu.");
        return;
    }

    if (cardExpiry === "" || cardNip.length < 4) {
        alert("Ingresa fecha de vigencia y NIP.");
        return;
    }

    executeFinalPurchase();
}

function executeFinalPurchase() {
    const sidebar = document.getElementById("cart-sidebar");
    if (sidebar) sidebar.classList.remove("open");

    const modal = document.getElementById("purchase-modal");
    const modalSub = modal ? modal.querySelector(".modal-sub") : null;

    if (modalSub) {
        modalSub.innerText = `Recoge tu pedido en caja con tu matrícula: ${alumnoMatricula}.`;
    }

    if (modal) modal.classList.add("show");

    // Vaciar carrito después de pagar
    carrito = [];
    localStorage.removeItem("carrito");

    updateCartUI();
}

// ==========================================
// INICIO
// ==========================================
window.addEventListener("DOMContentLoaded", () => {
    carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    alumnoMatricula = localStorage.getItem("alumnoMatricula") || "";

    updateCartUI();

    const loginToggle = document.getElementById("login-toggle");
    const policiesToggle = document.getElementById("policies-toggle");

    if (loginToggle) {
        if (alumnoMatricula !== "") {
            loginToggle.innerHTML = "✅";
            loginToggle.style.borderColor = "var(--stock-color)";
        } else if (loginToggle.innerHTML.trim() === "") {
            loginToggle.innerHTML = "👤";
        }
    }

    if (policiesToggle && policiesToggle.innerHTML.trim() === "") {
        policiesToggle.innerHTML = "📜";
    }
});