        /*
            THIS IS NOT NECESSARY ON REGULAR WEBSITES
 
            If you're using a library like React, you'll need the mobile menu to close once a link has been clicked.
            That's all the below code does.
        */

            const hamburgerButton = document.getElementById('hamburger-button');
            const headerLinks = document.querySelectorAll('header .container .menu a');
    
            headerLinks.forEach((link) => {
                link.addEventListener('click', (e) => hamburgerButton.checked = false);
            })