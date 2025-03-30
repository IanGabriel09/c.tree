const createFoot =()=> {
    const foot = document.createElement('div');
    foot.innerHTML = `
        <div class="container">
            <!-- Foot heading -->
            <div class="text-center">
                <h1 class="text-custom fw-bold lead-foot">Colortree Label Corporation</h1>
                <i class="text-custom">Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</i>
                <ul class="nav d-flex justify-content-center list-unstyled social-links-md mt-3">
                    <!-- Lazada -->
                     <li class="me-3 p-3">
                        <a href="https://www.lazada.com.ph/shop/colortree-label-corporation-ph/">
                            <svg width="20px" height="28px" viewBox="0 0 50.8 50.8" xmlns="http://www.w3.org/2000/svg" class="icon">
                                <path d="M28.048 14.434c1.041-.555 7.536-4.625 7.772-4.76.02-.012.509-.348 1.156.022.902.486 7.055 4.252 7.31 4.437.439.254.693.717.693 1.225v13.496a1.371 1.371 0 0 1-.786 1.11c-.578.323-15.89 9.936-17.995 11.092-.486.3-1.087.3-1.596.023-2.059-1.202-17.417-10.815-17.995-11.093a1.407 1.407 0 0 1-.786-1.132v-13.52c0-.484.254-.947.647-1.2l7.356-4.46c.37-.209.786-.232 1.156-.024.185.092 6.962 4.53 8.026 4.945 1.573.717 3.539.67 5.042-.161z" style="fill:none;stroke:#000000;stroke-width:3.17491;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/>
                            </svg>
                        </a>
                     </li>
                    <li class="me-3 p-3 d-flex justify-content-center align-items-center"><a href="https://www.facebook.com/ColortreeLabel"><i class="bi bi-facebook icon"></i></a></li>
                    <li class="me-3 p-3 d-flex justify-content-center align-items-center"><a href="https://www.instagram.com/colortreelabel/#"><i class="bi bi-instagram icon"></i></a></li>
                    <li class="me-3 p-3 d-flex justify-content-center align-items-center"><a href="https://www.tiktok.com/@colortreelabel?_t=8m3zpT3owit&_r=1"><i class="bi bi-tiktok icon"></i></a></li>
                </ul>
            </div>

            <hr class="text-light">

            <div class="text-center">
                <p class="text-custom">© Copyright Colortree Label Corporation.All Rights Reserved</p>
            </div>
        </div>
    `;

    return foot;
}

$(document).ready(function() {
    const footer = document.getElementById('footer');
    const footerContent = createFoot();

    footer.appendChild(footerContent);
});