document.getElementById("btnGo").onclick=function(event){
    event.preventDefault();
    var diemChuan=parseFloat(document.getElementById("diemChuan").value);
    var diemMon1=parseFloat(document.getElementById("diemMon1").value);
    var diemMon2=parseFloat(document.getElementById("diemMon2").value);
    var diemMon3=parseFloat(document.getElementById("diemMon3").value);
    var khuVuc=document.getElementById("khuVuc").value;
    var doiTuong=document.getElementById("doiTuong").value;
    var footer=document.getElementById("footer");
    var res=document.createElement("div");
    var coDiem0=diem0(diemMon1,diemMon2,diemMon3);
    
    res.innerHTML=ketQua(tinhDiem(diemMon1,diemMon2,diemMon3,khuVuc,doiTuong),diemChuan,coDiem0);
    
    footer.appendChild(res);
}
function diem0(diemMon1,diemMon2,diemMon3){
    if(diemMon1===0||diemMon2===0||diemMon3===0) return true;
    else return false;
}
function tinhDiem(diemMon1,diemMon2,diemMon3,khuVuc,doiTuong){
    var total=diemMon1+diemMon2+diemMon3;
    switch(khuVuc){
        case "A":
            total+=2;
            break;
        case "a":
            total+=2;
            break;
        case "B":
            total+=1;
            break;
        case "b":
            total+=1;
            break;
        case "C":
            total+=0.5;
            break;
        case "c":
            total+=0.5;
            break;  
        default:
            break;  
    }
    switch(doiTuong){
        case "1":
            total+=2.5;
            break;
        case "2":
            total+=1.5;
            break;
        case "3":
            total+=1;
            break; 
        default:
            break;  
    }
    return total;
}

function ketQua(diemTong,diemChuan,coDiem0){
    if(coDiem0){
        return "Thí sinh rớt, điểm tổng kết của thí sinh là: "+ diemTong +" (do có môn bị 0 điểm)";
    }else{
        if(diemTong>=diemChuan){
            return "Thí sinh đậu, điểm tổng kết của thí sinh là: "+ diemTong;
        }
        else return "Thí sinh rớt, điểm tổng kết của thí sinh là: "+ diemTong;
    }
}