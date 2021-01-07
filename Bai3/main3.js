document.getElementById("btnGo").onclick=function(event){
    event.preventDefault();

    //input
    var khachHang=document.getElementById("khachHang").value;
    var soLuongKetNoi=document.getElementById("soLuongKetNoi").value;
    var soKenhCaoCap=parseInt(document.getElementById("soKenhCaoCap").value);
    var footer=document.getElementById("footer");
    var res=document.createElement("div");
    
    //Xử lý
    if(khachHang==2 && !soLuongKetNoi){
        alert("Yêu cầu nhập số lượng kết nối đối với doanh nghiệp");
    }
    else if(khachHang==1 && soLuongKetNoi){
        alert("Không nhập số lượng kết nối đối với nhà dân");
    }
    else{
        //output
        res.innerHTML+="Số tiền phải trả là: "+tinhTienCap(khachHang,soLuongKetNoi,soKenhCaoCap)+"$";
    }
    
    footer.appendChild(res);
}

function tinhTienCap(khachHang,soLuongKetNoi,soKenhCaoCap){
    if(khachHang==1){
        return 4.5+20.5+7.5*soKenhCaoCap;
    }
    else{
        if(soLuongKetNoi<=10){
            return 15+75*soLuongKetNoi+50*soKenhCaoCap;
        }
        else{
            return 15*75*10+(soLuongKetNoi-10)*5+50*soKenhCaoCap;
        }
    }
}