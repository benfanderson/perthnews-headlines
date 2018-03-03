function makeHeadline() {
    const array1 = [
        {name: 'Gina Rinehart', image: 'gina'},
        {name: 'Ben Cousins', image: 'ben'},
        {name: 'Quokka', image: 'quokka'},
        {name: 'FIFO worker', image: 'fifo'},
        {name: 'Sam Kerr', image: 'sam'},
        {name: 'Nic Nat', image: 'nicnat'}, 
        {name: 'Shark', image: 'shark'}
    ] ;
    const array2 = ["gets married", "crashes ute", "takes nude selfie", "filmed making bizzare rant", "sculls stubbie of Emu Export", "named as One Nation candidate"];
    const array3 = [
        {name: 'Elizabeth Quay', image: 'quay'},
        {name: 'Royal Show',image: 'show'},
        {name: 'Cottesloe Beach', image: 'cott'},
        {name: 'Adventure World', image: 'adventure'},
        {name: 'Rottnest', image: 'rotto'},
        {name: 'Bell Tower', image: 'bell'},
        {name: 'Perth Stadium', image: 'stadium'}
    ];
    const rand1 = Math.floor(Math.random()*array1.length);
    const rand2 = Math.floor(Math.random()*array2.length);
    const rand3 = Math.floor(Math.random()*array3.length);
    const part1 = array1[rand1];
    const part2 = array2[rand2];
    const part3 = array3[rand3];
    const headlinePics = document.getElementById('pictures');
    headlinePics.innerHTML = '<img id="picture1" src="images/'+part1.image+'.jpg">' + '<img id="picture2" src="images/'+part3.image+'.jpg">';
    const headlineWords = document.getElementById('words');
    headlineWords.innerHTML = part1.name + ' ' + part2 + ' ' + 'at' + ' ' + part3.name;
    }
window.onload = makeHeadline;
const headlineButton = document.getElementById("headlineButton");
headlineButton.onclick = makeHeadline;
       