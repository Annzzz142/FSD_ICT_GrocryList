var req = new XMLHttpRequest();
console.log(req);
req.onreadystatechange = function(){
    console.log("req",req);
    if(this.readyState==4&&this.status==200){
        var resp = JSON.parse(this.responseText);
        console.log(resp);
        var gro = resp.grocery;
        var output = "<table class='table table-bordered'><tr><th>Serial No</th><th>Name</th><th>Quantity</th><th>Unit</th><th>Department</th><th>Notes</th></tr>";
        
        for(i=0;i<gro.length;i++){
            output +="<tr><td>"+gro[i].SlNo+"</td><td>"+gro[i].Name+"</td><td>"+gro[i].Quantity+"</td><td>"+gro[i].Unit+"</td><td>"+gro[i].Department+"</td><td>"+gro[i].Notes+"</td></tr>";
        }
        output += "</table>";
        document.getElementById("grocery").innerHTML = output;
        console.log(output);
    }
}
req.open("GET","grocery.json",true);
req.send();