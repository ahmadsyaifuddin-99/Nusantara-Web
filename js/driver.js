const driver = window.driver.js.driver;

// const driverObj = driver();

// driverObj.highlight({
//     element: ".form1",
//     popover: {
//         title: "Form Identitas",
//         description: "Silahkan anda isi data di Form Identitas, Form ini sudah terintegrasi dengan API Formspree"
//     }
// });

const driverObj = driver({
    showProgress: true,
    steps: [{
            element: '.form1',
            popover: {
                title: 'Form Identitas',
                description: 'Silahkan anda isi data anda <b>dengan Benar !!!</b> di Form Identitas, Form ini sudah terintegrasi dengan Backend API Formspree',
                side: "left",
                align: 'start'
            }
        },
        {
            element: '.form2',
            popover: {
                title: 'Form Pesan',
                description: 'Silahkan anda berikan pesan kepada saya setelah anda meninjau dan mereview dari web ini di Form kontak ini, Form ini juga sudah terintegrasi dengan Backend API Formspree',
                side: "left",
                align: 'start'
            }
        },
        {
            element: '.stars-rating',
            popover: {
                title: 'Rating Stars 😉',
                description: 'Jangan Lupa untuk kasih Rate Stars !',
                side: "bottom",
                align: 'start'
            }
        },

        {
            element: '.content',
            popover: {
                title: 'Selamat Menjelajahi ✨',
                description: 'Indonesia is Wonderland!',
                side: "left",
                align: 'start'
            }
        }
    ]
});

driverObj.drive();