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
    var rand1 = Math.floor(Math.random()*array1.length);
    var rand2 = Math.floor(Math.random()*array2.length);
    var rand3 = Math.floor(Math.random()*array3.length);
    var part1 = array1[rand1];
    var part2 = array2[rand2];
    var part3 = array3[rand3];
    var pic1 = part1.image; 
    var pic2 = part3.image;
    var headlinePics = document.getElementById('pictures');
    headlinePics.innerHTML = '<img id="picture1" src="images/'+pic1+'.jpg">' + '<img id="picture2" src="images/'+pic2+'.jpg">';
    var headlineWords = document.getElementById('words');
    headlineWords.innerHTML = part1.name + ' ' + part2 + ' ' + 'at' + ' ' + part3.name;
    }
makeHeadline();

       