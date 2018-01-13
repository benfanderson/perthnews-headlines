function makeHeadline() {
            var gina = {name: 'Gina Rinehart', image:'gina'};
            var ben = {name:'Ben Cousins', image: 'ben'};
            var quokka = {name:'Quokka', image: 'quokka'};
            var part1 =[];
            part1.push(gina,ben,quokka);
            var part2 =["gets married", "crashes ute", "caught dealing ice", "takes nude selfie", "filmed making racist rant", "sculls stubbie of Emu Export", "named as One Nation candiate"];
            var quay = {name: 'Elizabeth Quay',image: 'quay'}
            var show = {name: 'Royal Show',image: 'show'}
            var cottesloe = {name: 'Cottesloe Beach', image: 'cott'}
            var part3 =[];
            part3.push(quay,show, cottesloe);
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

        /*function makeHeadline() {
            var phrase1 =["Ben Cousins", "FIFO worker", " Millenial", "Gina Rinehart", "Lisa Scaffidi", "Tony Galati", "Quokka", "Shark", "Basil Zempilas", "Julie Bishop"];
            var phrase2 =["gets married", "crashes ute", "caught dealing ice", "takes nude selfie", "filmed making racist rant", "sculls eight stubbies of Emu Export", "named as One Nation candiate"];
            var phrase3 =["Leavers Week", "Royal Show", "Rottnest", "Elizabeth Quay", "Adventure World", "Cottesloe Beach", "Rottnest", "Fringe Festival", "out of control 21st birthday party in Ellenbrook", "Western Derby", "Telethon", "HBF Run For A Reason"];

            var rand1 = Math.floor(Math.random()*phrase1.length);
            var rand2 = Math.floor(Math.random()*phrase2.length);
            var rand3 = Math.floor(Math.random()*phrase3.length);

            var headline = phrase1[rand1] + " " + phrase2[rand2] + " at " + phrase3[rand3];
            document.write (headline);*/