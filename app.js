function hour(){
 let date = new Date();
 let saat = date.getHours();
 let dk = date.getMinutes();
 let sy = date.getSeconds();
 
 saat=time(saat);
 dk=time(dk);
 sy=time(sy);


 document.getElementById("hours").innerHTML = saat;
 document.getElementById("minutes").innerHTML = dk;
 document.getElementById("seconds").innerHTML = sy;
//document.getElementById("zam").innerHTML = date;
}
setInterval(hour, 1000); 

function time(i)
{
if (i<10)
 {
  i="0" + i;
 }
return i;
}

function tarih(){
    const date1 = new Date();
    let gün = date1.getDate();
    let ay = date1.getMonth();
    let yil = date1.getFullYear();
    
    gün = time1(gün);
    ay = time1(ay);

    document.getElementById("g").innerHTML = gün;
    document.getElementById("a").innerHTML = ay;
    document.getElementById("y").innerHTML = yil;
}
setInterval(tarih, 1000); 
function time1(i){
    if (i<10)
    {
     i="0" + i;
    }
   return i;
}

