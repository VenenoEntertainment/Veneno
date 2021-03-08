function consultaCep(){
    var cep = document.getElementById("zip").value;
    var urle = "https://viacep.com.br/ws/" + cep +"/json/";
    $.ajax({
        url: urle,
        type: "GET",
        success: function(response){
            console.log(response);    
            alert(response.bairro);
        }
    })
}