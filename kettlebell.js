window.onload = function () {

fetch("/api/arak")
.then(r => r.json())
.then(data => {

let arak = document.getElementsByClassName("card-price");

arak[0].innerText = data.kiloar;
arak[1].innerText = data.edzoterv;
arak[2].innerText = data.tankonyv;

document.getElementById("kedvezmeny").innerText =
data.kedvezmeny + "%-os kedvezmény a terembelépő árából";

})
.catch(() => {

let data = {
kiloar: "980 Ft",
edzoterv: "15000 Ft",
tankonyv: "2970 Ft",
kedvezmeny: 35
};

let arak = document.getElementsByClassName("card-price");

arak[0].innerText = data.kiloar;
arak[1].innerText = data.edzoterv;
arak[2].innerText = data.tankonyv;

document.getElementById("kedvezmeny").innerText =
data.kedvezmeny + "%-os kedvezmény a terembelépő árából";

});

};



function gyakorlatGeneralas() {

let db = Math.floor(Math.random() * 30) + 1;

let gyakorlatok = [
"Swing",
"Magasra húzás",
"Serleg guggolás",
"Szélmalom",
"Török felállás"
];

let index = Math.floor(Math.random() * gyakorlatok.length);

document.getElementById("generaltGyakorlat").innerText =
db + " darab " + gyakorlatok[index];

}