document.getElementById("btnGo").onclick=function(event){
    event.preventDefault();
    var name=document.getElementById("name").value;
    var soKw=parseInt(document.getElementById("txtKw").value);
    var footer=document.getElementById("footer");
    var res=document.createElement("div");
    
    res.innerHTML=tinhTienDien(soKw);
    
    footer.appendChild(res);
}
function tinhTienDien(soKw){
    if(soKw<=50){
        return soKw*500;
    }
    else if(soKw<=100){
        return 50*500+(soKw-50)*650;
    }
    else if(soKw<=200){
        return 50*500+50*650+(soKw-100)*850;
    }
    else if(soKw<=350){
        return 50*500+50*650+100*850+(soKw-200)*1100;
    }
    else 
        return 50*500+50*650+100*850+150*1100+(soKw-350)*1300;
}