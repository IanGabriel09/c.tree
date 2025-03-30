const selectedProduct = sessionStorage.getItem('activeProd');
const selectMat = document.getElementById('material');

const materialData = {
    // Industrial Packaging
    'Corrugated Colored Boxes': ['E flute', 'B flute', 'C flute', 'BC flute', 'Others'],
    'Colored Boxes': ['Clay Coat', 'Fold Coat', 'C2s Board', 'Others'],
    'Display Box': ['Clay Coat', 'Fold Coat', 'C2s Board', 'Others'],
    'Manuals': ['Book Paper', 'C2S', 'Others'],
    'Brochures': ['Book Paper', 'C2S', 'Others'],
    'Leaflets': ['Book Paper', 'C2S', 'Others'],
    'Flyers': ['Book Paper', 'C2S', 'Others'],
    'Posters': ['Book Paper', 'C2S', 'Others'],
    'Stickers': ['Satin Sticker', 'Vinyl Sticker', 'Transparent Sticker', 'Frozen Sticker', 'Others'],

    // Food Packaging
    // Paper Cups
    'Paper Cups 4oz': ['P1S', 'P2S', 'PCKB', 'Others'],
    'Paper Cups 6oz': ['P1S', 'P2S', 'PCKB', 'Others'],
    'Paper Cups 8oz': ['P1S', 'P2S', 'PCKB', 'Others'],
    'Paper Cups 16oz': ['P1S', 'P2S', 'PCKB', 'Others'],
    'Paper Cups 22oz': ['P1S', 'P2S', 'PCKB', 'Others'],
    'Paper Cups 12oz 80D': ['P1S', 'P2S', 'PCKB', 'Others'],
    'Paper Cups 12oz 90D': ['P1S', 'P2S', 'PCKB', 'Others'],

    // Paper Bowls
    'Paper Bowl 260cc': ['P1S', 'P2S', 'PCKB', 'Others'],
    'Paper Bowl 390cc': ['P1S', 'P2S', 'PCKB', 'Others'],
    'Paper Bowl 520cc': ['P1S', 'P2S', 'PCKB', 'Others'],
    'Paper Bowl 550cc': ['P1S', 'P2S', 'PCKB', 'Others'],

    // Meal Boxes
    'Meal Box BHS-1': ['P1S', 'P2S', 'PCKB', 'Others'],
    'Meal Box BHS-2': ['P1S', 'P2S', 'PCKB', 'Others'],
    'Meal Box BHS-3': ['P1S', 'P2S', 'PCKB', 'Others'],
    'Meal Box BHS-4': ['P1S', 'P2S', 'PCKB', 'Others'],
    'Meal Box BHS-5': ['P1S', 'P2S', 'PCKB', 'Others'],

    // Clam Shells
    'Hotdog Box': ['Carrier Board', 'Fold Coat', 'CKB', 'Others'],
    'Burger Box': ['Carrier Board', 'Fold Coat', 'CKB', 'Others'],
    'BGL-1': ['Carrier Board', 'Fold Coat', 'CKB', 'Others'],
    'BGL-2': ['Carrier Board', 'Fold Coat', 'CKB', 'Others'],

    // Pastry Boxes
    'Donut Box 6s': ['Carrier Board', 'Fold Coat', 'Others'],
    'Donut Box 12s': ['Carrier Board', 'Fold Coat', 'Others'],
    'Pie Box W/ PVC': ['Carrier Board', 'Fold Coat', 'Others'],
    'Small Pastry Box W/ PVC': ['Carrier Board', 'Fold Coat', 'Others'],
    'Cake Box': ['Carrier Board', 'Fold Coat', 'Others'],

    // Food Wrappers
    'Flat-Type Wrapper': ['P1S', 'P2S', 'Others'],
    'L-Type Wrapper': ['P1S', 'P2S', 'Others'],

    // Paper Bags
    '4 SOS Bag':['Brown Kraft', 'White Kraft', 'Grease Proof', 'Others'],
    '8 SOS Bag':['Brown Kraft', 'White Kraft', 'Grease Proof', 'Others'],
    '12 SOS Bag':['Brown Kraft', 'White Kraft', 'Grease Proof', 'Others'],
    '19 SOS Bag':['Brown Kraft', 'White Kraft', 'Grease Proof', 'Others'],
    'Satchel Bag':['Brown Kraft', 'White Kraft', 'Grease Proof', 'Others'],

    // Cup Sleeve
    'Coffee Sleeve':['Test Liner / Mottled White', 'P1S', 'Kraft Pack', 'Carrier Board', 'Others'],
    'Air Holder':['Test Liner / Mottled White', 'P1S', 'Kraft Pack', 'Carrier Board', 'Others'],
    'Take Away Cup Holder':['Test Liner / Mottled White', 'P1S', 'Kraft Pack', 'Carrier Board', 'Others'],
}


// Populate the select material input field\
if (selectedProduct && materialData[selectedProduct]) {
    materialData[selectedProduct].forEach(function(item) {
        const option = document.createElement('option');
        option.value = item;
        option.textContent = item;
        selectMat.appendChild(option);
    });
}

$(document).ready(function() {
    console.log(selectedProduct, ': from fetchMaterial.js');
});