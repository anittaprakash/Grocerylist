function ajax()
{

    var xhttp= new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4&&this.status==200){
            var response=JSON.parse(this.responseText);
            var Grocery=response.Grocery;
            var output="";
            
                output +="<tr>"+ 
                    "<th>"+ "Sl No" +"</th>"+
                    "<th>"+ "Name "+"</th>"+
                    "<th>"+ "Quantity" +"</th>"+
                    "<th>"+ "Unit" +"</th>"+
                    "<th>"+ "Department" +"</th>"+
                    "<th>"+ "Notes" +"</th>"
                +"<tr>";
              

            for(var i=0;i<Grocery.length;i++){
            output +="<tr>"+ 
                "<td>"+ Grocery[i].SINo +"</td>"+
                "<td>"+ Grocery[i].Item +"</td>"+
                "<td>"+ Grocery[i].Quatity +"</td>"+
                "<td>"+ Grocery[i].Unit +"</td>"+
                "<td>"+ Grocery[i].category +"</td>"+
                "<td>"+ Grocery[i].Note +"</td>"
            +"<tr>";
               
           
            }
            // console.log(output);
            document.getElementById("tbl").innerHTML=output;
           
         }
    
    }
    xhttp.open("GET","products.json",true);
    xhttp.send();
}