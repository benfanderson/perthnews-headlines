function makeHeadline() {
    var gina = {name: 'Gina Rinehart', image: 'gina'};
    var ben = {name: 'Ben Cousins', image: 'ben'};
    var quokka = {name: 'Quokka', image: 'quokka'};
    var fifo = {name: 'FIFO worker', image: 'fifo'};
    var sam = {name: 'Sam Kerr', image: 'sam'};
    var nicnat = {name: 'Nic Nat', image: 'nicnat'};
    var shark = {name: 'Shark', image: 'shark'};
    var part1 = [];
    part1.push(gina, ben, quokka, fifo, sam, nicnat, shark);
    var part2 = ["gets married", "crashes ute", "takes nude selfie", "filmed making bizzare rant", "sculls stubbie of Emu Export", "named as One Nation candidate"];
    var quay = {name: 'Elizabeth Quay', image: 'quay'};
    var show = {name: 'Royal Show',image: 'show'};
    var cottesloe = {name: 'Cottesloe Beach', image: 'cott'};
    var adventure = {name: 'Adventure World', image: 'adventure'};
    var rotto = {name: 'Rottnest', image: 'rotto'};
    var bell = {name: 'Bell Tower', image: 'bell'};
    var stadium = {name: 'Perth Stadium', image: 'stadium'};
    var part3 = [];
    part3.push(quay, show, cottesloe, adventure, rotto, bell, stadium);
    var rand1 = Math.floor(Math.random()*part1.length);
    var rand2 = Math.floor(Math.random()*part2.length);
    var rand3 = Math.floor(Math.random()*part3.length);
    var pic1 = part1[rand1].image; 
    var pic2 = part3[rand3].image;
    var headlinePics = document.getElementById('pictures');
    headlinePics.innerHTML = '<img id="picture1" src="images/'+pic1+'.jpg">' + '<img id="picture2" src="images/'+pic2+'.jpg">';
    var headlineWords = document.getElementById('words');
    headlineWords.innerHTML = part1[rand1].name + ' ' + part2[rand2] + ' ' + 'at' + ' ' + part3[rand3].name;
    }
makeHeadline();

       