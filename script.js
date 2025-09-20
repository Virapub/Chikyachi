document.addEventListener('DOMContentLoaded', () => {

    // --- Sample Product Data ---
    // Replace with your actual Teespring product data
    const products = [
        {
            id: 1,
            name: 'Cosmic Explorer T-Shirt',
            price: '$25.99',
            image: 'https://via.placeholder.com/400x400.png?text=Cosmic+T-Shirt',
            category: 't-shirt',
            url: 'https://your-teespring-store.com/product-1'
        },
        {
            id: 2,
            name: 'Mountain Peak Hoodie',
            price: '$45.00',
            image: 'https://via.placeholder.com/400x400.png?text=Mountain+Hoodie',
            category: 'hoodie',
            url: 'https://your-teespring-store.com/product-2'
        },
        {
            id: 3,
            name: 'Minimalist Wave Mug',
            price: '$15.50',
            image: 'https://via.placeholder.com/400x400.png?text=Wave+Mug',
            category: 'mug',
            url: 'https://your-teespring-store.com/product-3'
        },
        {
            id: 4,
            name: 'Abstract Lines T-Shirt',
            price: '$24.99',
            image: 'https://via.placeholder.com/400x400.png?text=Abstract+T-Shirt',
            category: 't-shirt',
            url: 'https://your-teespring-store.com/product-4'
        },
        {
            id: 5,
            name: 'Urban Legend Hoodie',
            price: '$48.00',
            image: 'https://via.placeholder.com/400x400.png?text=Urban+Hoodie',
            category: 'hoodie',
            url: 'https://your-teespring-store.com/product-5'
        },
        {
            id: 6,
            name: '"Good Morning" Mug',
            price: '$16.00',
            image: 'https://via.placeholder.com/400x400.png?text=Morning+Mug',
            category: 'mug',
            url: 'https://your-teespring-store.com/product-6'
        },
         {
            id: 7,
            name: 'Geometric Bear T-Shirt',
            price: '$26.50',
            image: 'https://via.placeholder.com/400x400.png?text=Bear+T-Shirt',
            category: 't-shirt',
            url: 'https://your-teespring-store.com/product-7'
        },
        {
            id: 8,
            name: 'Galaxy Print Hoodie',
            price: '$50.00',
            image: 'https://via.placeholder.com/400x400.png?text=Galaxy+Hoodie',
            category: 'hoodie',
            url: 'https://your-teespring-store.com/product-8'
        }
    ];

    const productGrid = document.getElementById('product-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const navLinks = document.querySelectorAll('.nav-link');
    const pageSections = document.querySelectorAll('.page-section');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-links');

    // --- Product Display Function ---
    const displayProducts = (filteredProducts) => {
        productGrid.innerHTML = ''; // Clear existing products
        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p class="product-price">${product.price}</p>
                    <a href="${product.url}" target="_blank" class="cta-button">Buy Now</a>
                </div>
            `;
            productGrid.appendChild(productCard);
        });
    };

    // --- Product Filtering ---
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Manage active button state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const category = button.dataset.category;
            if (category === 'all') {
                displayProducts(products);
            } else {
                const filteredProducts = products.filter(product => product.category === category);
                displayProducts(filteredProducts);
            }
        });
    });

    // --- Page Navigation (Single Page App behavior) ---
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);

            // Hide all sections
            pageSections.forEach(section => section.classList.remove('active'));
            
            // Show target section
            document.getElementById(targetId).classList.add('active');

            // Update active link
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            link.classList.add('active');

            // Close mobile menu on link click
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }

            // Scroll to top of page
            window.scrollTo(0, 0);
        });
    });

    // --- Mobile Navigation Toggle ---
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // --- Contact Form Submission ---
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically send form data to a server
        // For this demo, we'll just show an alert.
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });

    // --- Initial Load ---
    displayProducts(products); // Display all products on page load
});
