function lanzar() {
    const max_bet =  1000;
    var num = 1;
    var ramdon = Math.random()*2;
    var ramdon = Math.ceil(ramdon);
    var cont = document.getElementById("span");
    


    if (ramdon == 1) {
        var hola = cont.childNodes[0];
        var str = document.createTextNode(" Ganaste" );
        cont.removeChild(hola);

        var str = document.createTextNode(" Ganaste" );
        cont.appendChild(str);
        let bet = document.getElementById('bet');
        // max_bet += parseInt(bet.value);
        document.getElementById('betMax').innerHTML = parseInt(max_bet) + parseInt(bet.value);
    }else{
        var hola = cont.childNodes[0];
        cont.removeChild(hola);
        var str = document.createTextNode(" Perdiste")
        cont.appendChild(str);
        let bet = document.getElementById('bet');
        document.getElementById('betMax').innerHTML = max_bet - parseInt(bet.value);
    }

    switch (ramdon) {
        case 1:
        var con = document.getElementById("span2");
        var holas = con.childNodes[0];
        con.removeChild(holas);
        var img = new Image;
         img.src = "img/cara.png";
         con.appendChild(img);
            
            break;

            case 2:
            var con = document.getElementById("span2");
            var holas = con.childNodes[0];
            con.removeChild(holas);
            var img = new Image;
            img.src = "img/sello.png";
            con.appendChild(img);
            break;
    
        default:
            break;
    }
       
   }

   
   function lanzar1() {
    const max_bet =  1000
       var num = 2;
    var ramdon = Math.random()*2;
    var ramdon = Math.ceil(ramdon);
    var cont = document.getElementById("span");
    if (ramdon == 2) {
        var hola = cont.childNodes[0];
        cont.removeChild(hola);
        var str = document.createTextNode(" Ganaste" );
        cont.appendChild(str);
        let bet = document.getElementById('bet');
        // max_bet += parseInt(bet.value);
        document.getElementById('betMax').innerHTML =  max_bet + parseInt(bet.value);
    }else{
        var hola = cont.childNodes[0];
        cont.removeChild(hola);
        var str = document.createTextNode(" Perdiste")
        cont.appendChild(str);
        let bet = document.getElementById('bet');
        // max_bet += parseInt(bet.value); 
        document.getElementById('betMax').innerHTML =  max_bet - parseInt(bet.value);
    }


    switch (ramdon) {
        case 1:
        var con = document.getElementById("span2");
        var holas = con.childNodes[0];
        con.removeChild(holas);
        var img = new Image;
         img.src = "img/cara.png";
         con.appendChild(img);
            
            break;

            case 2:
            var con = document.getElementById("span2");
            var holas = con.childNodes[0];
            con.removeChild(holas);
            var img = new Image;
            img.src = "img/sello.png";
            con.appendChild(img);
            break;
    
        default:
            break;
    }  
   }

   window.addEventListener('load', () => {
    let num = 1000;
    document.getElementById('betMax').innerHTML = num;
   })