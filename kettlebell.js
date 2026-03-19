document.addEventListener("DOMContentLoaded", function() {
    // REST kérés a szerver felé
    fetch('/api/arak')
        .then(response => response.json())
        .then(data => {
            // Ha a szerver nem elérhető, fallback értékek
            if(!data.kiloar) {
                data = {
                    kiloar: '980 Ft',
                    edzoterv: '15 000 Ft',
                    tankonyv: '2 970 Ft',
                    kedvezmeny: 35
                };
            }

            // Kártyák feltöltése
            const cardPrices = document.querySelectorAll('.card-price');
            cardPrices[0].textContent = data.kiloar;
            cardPrices[1].textContent = data.edzoterv;
            cardPrices[2].textContent = data.tankonyv;

            // Kedvezmény feltöltése
            const kedvezmenyElem = document.querySelector('.kedvezmeny');
            kedvezmenyElem.textContent = data.kedvezmeny + "%-os kedvezmény a terembelépő árából";
        })
        .catch(err => console.error('Hiba az árak lekérésekor:', err));
});