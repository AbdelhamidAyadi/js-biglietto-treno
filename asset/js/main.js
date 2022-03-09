let distance = prompt("Inserisci il numero di chilometri che vuoi percorrere");
let age = prompt("Inserisci la tua età");
let price = 0.21 ;

if ( age < 18 ){
    document.getElementById("ticket_price").innerHTML = parseFloat(( distance * price ) *  0.8).toFixed(2) + "€" ;
} else if ( age > 65){
    document.getElementById("ticket_price").innerHTML = parseFloat(( distance * price ) *  0.6).toFixed(2) + "€" ;
}else {
    document.getElementById("ticket_price").innerHTML = parseFloat( distance * price ).toFixed(2) + "€" ;
}


