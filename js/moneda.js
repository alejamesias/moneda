function cara() {
    const apuestaMaxima =  1000;
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
        let apuesta = document.getElementById('apuesta');
        // apuestaMaxima += parseInt(apuesta.value);
        document.getElementById('apuestaMaxima').innerHTML = parseInt(apuestaMaxima) + parseInt(apuesta.value);
    }else{
        var hola = cont.childNodes[0];
        cont.removeChild(hola);
        var str = document.createTextNode(" Perdiste")
        cont.appendChild(str);
        let apuesta = document.getElementById('apuesta');
        document.getElementById('apuestaMaxima').innerHTML = apuestaMaxima - parseInt(apuesta.value);
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

   
   function sello() {
    const apuestaMaxima =  1000
       var num = 2;
    var ramdon = Math.random()*2;
    var ramdon = Math.ceil(ramdon);
    var cont = document.getElementById("span");
    if (ramdon == 2) {
        var hola = cont.childNodes[0];
        cont.removeChild(hola);
        var str = document.createTextNode(" Ganaste" );
        cont.appendChild(str);
        let apuesta = document.getElementById('apuesta');
        // apuestaMaxima += parseInt(apuesta.value);
        document.getElementById('apuestaMaxima').innerHTML =  apuestaMaxima + parseInt(apuesta.value);
    }else{
        var hola = cont.childNodes[0];
        cont.removeChild(hola);
        var str = document.createTextNode(" Perdiste")
        cont.appendChild(str);
        let apuesta = document.getElementById('apuesta');
        // apuestaMaxima += parseInt(apuesta.value); 
        document.getElementById('apuestaMaxima').innerHTML =  apuestaMaxima - parseInt(apuesta.value);
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
    document.getElementById('apuestaMaxima').innerHTML = num;
   })