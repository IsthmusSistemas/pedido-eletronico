$(document).ready(function () {
    // Sample product data
    const products = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=150&h=150&fit=crop",
            code: "1052847",
            name: "ABC Clotrimazol Creme 10mg/g 20g - Tratamento Antifúngico",
            badges: [
                { type: "discount", text: "49.48% OFF" }
            ],
            brand: "Kley Hertz",
            price: 7.66,
            st: 0.37,
            originalPrice: 15.98,
            finalPrice: 7.66,
            hasPromo: true,
            boxQuantity: 15
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=150&h=150&fit=crop",
            code: "2847193",
            name: "ABCalcium Kids (Cálcio + Vit B12 + C + D2) 240ml - Suplemento Infantil",
            badges: [
                { type: "discount", text: "67.18% OFF" },
                { type: "promo", text: "Promoção" }
            ],
            brand: "Airela",
            price: 10.39,
            st: 0.50,
            originalPrice: 31.70,
            finalPrice: 10.39,
            hasPromo: true,
            boxQuantity: 50
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=150&h=150&fit=crop",
            code: "3914628",
            name: "Abcler Display Softac - Embalagem Promocional",
            badges: [
                { type: "discount", text: "56.66% OFF" },
                { type: "exclusive", text: "Exclusivo" }
            ],
            brand: "Airela",
            price: 48.55,
            st: 2.36,
            originalPrice: 111.99,
            finalPrice: 48.55,
            hasPromo: true,
            boxQuantity: 12
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=150&h=150&fit=crop",
            code: "4728361",
            name: "Aberalgina (Dipirona) 500mg/ml Gotas 20ml - Analgésico e Antitérmico",
            badges: [
                { type: "discount", text: "72.2% OFF" },
                { type: "new", text: "Novo" }
            ],
            brand: "Airela",
            price: 2.73,
            st: 0.13,
            originalPrice: 9.80,
            finalPrice: 2.73,
            hasPromo: true,
            boxQuantity: 200
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=150&h=150&fit=crop",
            code: "5693147",
            name: "Vitamina C 1000mg Efervescente - Tubo com 10 Comprimidos",
            badges: [
                { type: "promo", text: "Promoção" }
            ],
            brand: "Bayer",
            price: 18.90,
            st: 0.95,
            originalPrice: null,
            finalPrice: 18.90,
            hasPromo: false,
            boxQuantity: 24
        },
        {
            id: 6,
            image: "https://images.unsplash.com/photo-1576602976047-174e57a47881?w=150&h=150&fit=crop",
            code: "6481572",
            name: "Hidratante Corporal Intenso 400ml - Pele Seca e Extra Seca",
            badges: [
                { type: "new", text: "Novo" },
                { type: "exclusive", text: "Exclusivo" }
            ],
            brand: "Nivea",
            price: 32.50,
            st: 1.62,
            originalPrice: null,
            finalPrice: 32.50,
            hasPromo: false,
            boxQuantity: 6
        },
        {
            id: 7,
            image: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=150&h=150&fit=crop",
            code: "7259483",
            name: "Protetor Solar FPS 50 200ml - Proteção UVA/UVB",
            badges: [
                { type: "discount", text: "35% OFF" },
                { type: "promo", text: "Verão" }
            ],
            brand: "La Roche",
            price: 89.90,
            st: 4.50,
            originalPrice: 138.50,
            finalPrice: 89.90,
            hasPromo: true,
            boxQuantity: 8
        },
        {
            id: 8,
            image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=150&h=150&fit=crop",
            code: "8372916",
            name: "Ômega 3 1000mg - Cápsulas de Óleo de Peixe",
            badges: [
                { type: "discount", text: "25% OFF" }
            ],
            brand: "Centrum",
            price: 45.00,
            st: 2.25,
            originalPrice: 60.00,
            finalPrice: 45.00,
            hasPromo: true,
            boxQuantity: 30
        },
        {
            id: 9,
            image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=150&h=150&fit=crop",
            code: "8902021",
            name: "M Esponja Limpeza Delicada Sbrite Refil C/2",
            badges: [],
            brand: "3M do Brasil",
            prices: [
                { branch: "SC", price: 9.58, st: 0.00, finalPrice: 9.58 },
                { branch: "PR/SC", price: 9.58, st: 0.00, finalPrice: 9.58 }
            ],
            hasPromo: false,
            boxQuantity: 24
        },
        {
            id: 11,
            image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=150&h=150&fit=crop",
            code: "9903031",
            name: "Lustra Móveis Lavanda Premium 200ml - Edição Limitada",
            badges: [{ type: "promo", text: "Oferta Regional" }],
            brand: "Limpeza Total",
            prices: [
                { branch: "SC", price: 12.90, st: 0.65, originalPrice: 18.50, finalPrice: 12.90 },
                { branch: "PR/SC", price: 13.50, st: 0.68, originalPrice: 19.90, finalPrice: 13.50 }
            ],
            hasPromo: true,
            boxQuantity: 12
        }
    ];

    // Function to format currency
    function formatCurrency(value) {
        return 'R$ ' + value.toFixed(2).replace('.', ',');
    }

    // Function to generate badge HTML
    function generateBadges(badges) {
        return badges.map(badge => {
            return `<span class="badge badge-${badge.type}">${badge.text}</span>`;
        }).join('');
    }

    // Function to generate final price HTML
    function generateFinalPrice(product) {
        // Check if product has multiple prices (branches)
        if (product.prices && product.prices.length > 0) {
            return product.prices.map(p => {
                const branchHtml = `<span class="branch-label">${p.branch}</span>`;
                if (p.originalPrice) {
                    return `
                        <div class="final-price-row promo">
                            ${branchHtml}
                            <div class="final-price-container">
                                <span class="original-price">${formatCurrency(p.originalPrice)}</span>
                                <span class="final-price">${formatCurrency(p.finalPrice)}</span>
                            </div>
                        </div>
                    `;
                }
                return `
                    <div class="final-price-row">
                        ${branchHtml}
                        <span class="final-price no-promo">${formatCurrency(p.finalPrice)} UN</span>
                    </div>
                `;
            }).join('');
        }

        // Single price product
        const branchLabel = product.branch ? `<span class="branch-label">${product.branch}</span>` : '';

        if (product.hasPromo && product.originalPrice) {
            return `
                <div class="final-price-container">
                    ${branchLabel}
                    <span class="original-price">${formatCurrency(product.originalPrice)}</span>
                    <span class="final-price">${formatCurrency(product.finalPrice)}</span>
                </div>
            `;
        } else {
            return `
                <div class="final-price-container">
                    ${branchLabel}
                    <span class="final-price no-promo">${formatCurrency(product.finalPrice)}</span>
                </div>
            `;
        }
    }

    // Function to generate price cell (for products with multiple prices)
    function generatePriceCell(product) {
        if (product.prices && product.prices.length > 0) {
            return product.prices.map(p => `
                <div class="price-row">
                    <span class="price-value">${formatCurrency(p.price)}</span>
                </div>
            `).join('');
        }
        return `<span class="price-value">${formatCurrency(product.price)}</span>`;
    }

    // Function to generate ST cell (for products with multiple prices)
    function generateSTCell(product) {
        if (product.prices && product.prices.length > 0) {
            return product.prices.map(p => `
                <div class="price-row">
                    <span class="st-value">${formatCurrency(p.st)}</span>
                </div>
            `).join('');
        }
        return `<span class="st-value">${formatCurrency(product.st)}</span>`;
    }

    // Function to generate table row
    function generateTableRow(product) {
        return `
            <tr data-product-id="${product.id}">
                <td>
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                </td>
                <td>
                    <span class="product-code">${product.code}</span>
                </td>
                <td>
                    <div class="product-name-cell">
                        <div class="badges-container">
                            ${generateBadges(product.badges)}
                        </div>
                        <span class="product-name">${product.name}</span>
                    </div>
                </td>
                <td>
                    <span class="brand-name">${product.brand}</span>
                </td>
                <td>
                    ${generatePriceCell(product)}
                </td>
                <td>
                    ${generateSTCell(product)}
                </td>
                <td>
                    ${generateFinalPrice(product)}
                </td>
                <td>
                    <div class="box-purchase">
                        <div class="checkbox-wrapper">
                            <input type="checkbox" id="box-${product.id}" data-product-id="${product.id}">
                        </div>
                        <span class="quantity-box">Em Caixa (${product.boxQuantity}un)</span>
                    </div>
                </td>
                <td>
                    <div class="quantity-input-wrapper">
                        <input type="number" class="quantity-input" id="qty-${product.id}" data-product-id="${product.id}" value="1" min="0" max="999">
                    </div>
                </td>
                <td>
                    <button class="btn-add" data-product-id="${product.id}" title="Adicionar ao carrinho">
                        <i class="fas fa-shopping-basket"></i>
                    </button>
                </td>
            </tr>
        `;
    }

    // Render all products
    function renderProducts() {
        const tableBody = $('#product-table-body');
        tableBody.empty();

        products.forEach(product => {
            tableBody.append(generateTableRow(product));
        });
    }

    // Initialize table
    renderProducts();

    // Event handler for Add button
    $(document).on('click', '.btn-add', function () {
        const $button = $(this);
        const productId = $button.data('product-id');
        const product = products.find(p => p.id === productId);
        const isBoxPurchase = $(`#box-${productId}`).is(':checked');
        const inputQty = parseInt($(`#qty-${productId}`).val()) || 0;

        // Toggle button state
        if ($button.hasClass('added')) {
            $button.removeClass('added');
            $button.html(`<i class="fas fa-shopping-basket"></i>`);
            $button.attr('title', 'Adicionar ao carrinho');
            $(`#qty-${productId}`).val(0);
            console.log(`Produto removido: ${product.name}`);
        } else {
            if (inputQty > 0) {
                $button.addClass('added');
                $button.html(`<i class="fas fa-check"></i>`);
                $button.attr('title', 'Adicionado ao carrinho');

                const quantity = isBoxPurchase ? product.boxQuantity * inputQty : inputQty;
                console.log(`Produto adicionado: ${product.name} (Qtd: ${quantity})`);
            }
        }
    });

    // Event handler for quantity input Enter key
    $(document).on('keypress', '.quantity-input', function (e) {
        if (e.which === 13) { // Enter key
            e.preventDefault();
            const $input = $(this);
            const productId = $input.data('product-id');
            const product = products.find(p => p.id === productId);
            const $button = $(`.btn-add[data-product-id="${productId}"]`);
            const isBoxPurchase = $(`#box-${productId}`).is(':checked');
            const inputQty = parseInt($input.val()) || 0;

            if (inputQty === 0) {
                // Remove from cart
                if ($button.hasClass('added')) {
                    $button.removeClass('added');
                    $button.html(`<i class="fas fa-shopping-basket"></i>`);
                    $button.attr('title', 'Adicionar ao carrinho');
                    console.log(`Produto removido: ${product.name}`);
                }
            } else {
                // Add to cart
                if (!$button.hasClass('added')) {
                    $button.addClass('added');
                    $button.html(`<i class="fas fa-check"></i>`);
                    $button.attr('title', 'Adicionado ao carrinho');
                }
                const quantity = isBoxPurchase ? product.boxQuantity * inputQty : inputQty;
                console.log(`Produto atualizado: ${product.name} (Qtd: ${quantity})`);
            }
        }
    });

    // Event handler for checkbox change
    $(document).on('change', '.box-purchase input[type="checkbox"]', function () {
        const productId = $(this).data('product-id');
        const product = products.find(p => p.id === productId);
        const isChecked = $(this).is(':checked');

        console.log(`Compra em caixa ${isChecked ? 'ativada' : 'desativada'} para: ${product.name}`);
    });

    // Hover effect enhancement
    $(document).on('mouseenter', '.product-table tbody tr', function () {
        $(this).find('.btn-add').css('transform', 'translateY(-2px)');
    });

    $(document).on('mouseleave', '.product-table tbody tr', function () {
        $(this).find('.btn-add').css('transform', 'translateY(0)');
    });
    // Photo visibility toggle logic
    $('#toggle-photos').on('change', function () {
        const isChecked = $(this).is(':checked');
        const $table = $('.product-table');

        if (isChecked) {
            $table.removeClass('hide-photos');
        } else {
            $table.addClass('hide-photos');
        }
        console.log(`Visibilidade das fotos: ${isChecked ? 'Ligada' : 'Desligada'}`);
    });
    // Badge visibility toggle logic
    $('#toggle-badges').on('change', function () {
        const isChecked = $(this).is(':checked');
        const $table = $('.product-table');

        if (isChecked) {
            $table.removeClass('hide-badges');
        } else {
            $table.addClass('hide-badges');
        }
        console.log(`Visibilidade dos selos: ${isChecked ? 'Ligada' : 'Desligada'}`);
    });
});
