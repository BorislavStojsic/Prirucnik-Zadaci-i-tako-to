const currentUrl = window.location.href;

const navLinks = document.querySelectorAll('nav ul li a');


navLinks.forEach(link => {
    if (link.href === currentUrl) {
        link.classList.add('active');
    }
});

function showCityInfo() {
    const citySelect = document.getElementById('city');
    const selectedCity = citySelect.value;

    let weatherUrl;
    let cityInfo;

    switch (selectedCity) {
        case 'Beograd':
            weatherUrl = 'https://www.naslovi.net/vremenska-prognoza/beograd';
            cityInfo = 'Beograd je glavni grad Srbije. Najznačajnije turističke lokacije uključuju Kalemegdan, Knez Mihailovu ulicu i Skadarliju.';
            break;
        case 'Novi Sad':
            weatherUrl = 'https://www.naslovi.net/vremenska-prognoza/novi-sad';
            cityInfo = 'Novi Sad je glavni grad Vojvodine. Najznačajnije turističke lokacije uključuju Petrovaradinsku tvrđavu, Dunavski park i Trg slobode.';
            break;
        case 'Niš':
            weatherUrl = 'https://www.naslovi.net/vremenska-prognoza/nis';
            cityInfo = 'Niš je jedan od najstarijih gradova na Balkanu. Poznat je po Niškoj tvrđavi, Ćele kuli i Medijani.';
            break;
        case 'Kragujevac':
            weatherUrl = 'https://www.naslovi.net/vremenska-prognoza/kragujevac';
            cityInfo = 'Kragujevac je bio prva prestonica moderne Srbije. Najznačajnije lokacije uključuju Šumarice, Muzej 21. oktobar i Amidzinu konak.';
            break;
        case 'Subotica':
            weatherUrl = 'https://www.naslovi.net/vremenska-prognoza/subotica';
            cityInfo = 'Subotica je poznata po svojoj secesijskoj arhitekturi. Najznačajnije lokacije uključuju Gradska kuća, Sinagoga i Palićko jezero.';
            break;
        case 'Zrenjanin':
            weatherUrl = 'https://www.naslovi.net/vremenska-prognoza/zrenjanin';
            cityInfo = 'Zrenjanin je poznat po svojoj industrijskoj baštini. Najznačajnije lokacije uključuju Gradska kuća, Carska bara i Muzej Zrenjanina.';
            break;
        case 'Pančevo':
            weatherUrl = 'https://www.naslovi.net/vremenska-prognoza/pancevo';
            cityInfo = 'Pančevo je industrijski grad poznat po svojoj petrohemijskoj industriji. Posetite Narodni muzej i Park prirode Ponjavica.';
            break;
        case 'Čačak':
            weatherUrl = 'https://www.naslovi.net/vremenska-prognoza/cacak';
            cityInfo = 'Čačak je poznat po manastirima i prirodnim lepotama. Najznačajnije lokacije uključuju Ovčar-Kablarsku klisuru i manastir Blagoveštenje.';
            break;
        case 'Leskovac':
            weatherUrl = 'https://www.naslovi.net/vremenska-prognoza/leskovac';
            cityInfo = 'Leskovac je poznat po svom roštilju. Najznačajnije lokacije uključuju Leskovački kulturni centar i Hisar.';
            break;
        case 'Kraljevo':
            weatherUrl = 'https://www.naslovi.net/vremenska-prognoza/kraljevo';
            cityInfo = 'Kraljevo je poznato po svojoj istoriji. Posetite manastir Žiča, Trg srpskih ratnika i obližnje planine Goč i Kopaonik.';
            break;
        default:
            weatherUrl = 'https://www.naslovi.net/vremenska-prognoza/beograd';
            cityInfo = '';
    }

    document.getElementById('weatherFrame').src = weatherUrl;

    const infoWindow = window.open('', 'City Info', 'width=300,height=200');
    infoWindow.document.write(`
        <html>
            <head>
                <title>${selectedCity}</title>
                <style>
                    body {
                        background-color: orange;
                        color: black;
                        font-family: Arial, sans-serif;
                    }
                    h2 {
                        color: white;
                    }
                    p {
                        font-size: 16px;
                    }
                </style>
            </head>
            <body>
                <h2>${selectedCity}</h2>
                <p>${cityInfo}</p>
            </body>
        </html>
    `);
    infoWindow.document.close();
}

function closeModal() {
    const modal = document.getElementById('cityModal');
    modal.style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById('cityModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
