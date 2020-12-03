$(document).ready(function(){

    var localinfo = localStorage.getItem('infosaved');

    if (localinfo!=null){

        var jsonparse = JSON.parse(localinfo);
        if(jsonparse[1]=="found"){
            $.mobile.changePage("home.html", { transition: "slideup",  changeHash: false});
        } else {
            $.mobile.changePage("login.html", { transition: "slideup", reverse:true ,  changeHash: false})
        }
    } else {
        $.mobile.changePage("login.html", { transition: "slideup", reverse:true ,  changeHash: false});
    }
     
    $(document).on("click","#loginBTN",function(){
        if($("#loginUSER").val() == "" || $("#loginPASS").val() == ""){
            alert("Por favor, ingrese todos los campos.");
    } else {
        $.ajax({
            url: "https://mercadoprovii.000webhostapp.com/check-login.php", async: true,
            type: "POST",
            data: {
                user: $("#loginUSER").val(),
                pass: $("#loginPASS").val()
            },
            success:function(response){
                if(response=="noFOUND"){
                    alert("No se encuentra el usuario en la base de datos. Verifique su información.");
                } else {
                    localStorage.setItem('infosaved', response);
                    $.mobile.changePage("/home.html", { transition: "slideup", changeHash: false});
                }
                }
            });
        }
    });
    
    $(document).on("click", "#newProduct", function(){
        $.mobile.changePage("registrar-producto.html", { transition: "slideup", reverse:true ,  changeHash: false});
    });
    
    $(document).on("click", "#lector", function(){
        alert("Página en mantenimiento.");
    });
    
    $(document).on("click", "#registrarManual", function(){
    $.mobile.changePage("registro-manual.html", { transition: "slideup", reverse:true ,  changeHash: false});
    });
    
    
    $(document).on("click","#registrarProducto",function(){
        if($("#productID").val() == "" || $("#productName").val() == ""){
            alert("Por favor, ingrese todos los campos.");
    } else {
        $.ajax({
            url: "https://mercadoprovii.000webhostapp.com/registro-manual.php", async: true,
            type: "POST",
            data: {
                id: $("#productID").val(),
                name: $("#productName").val(),
                type: $("#select-native-1").val()
            },
            success:function(response){
                if(response=="repetido"){
                    alert("Ya existe un producto con ese numero de barra.");
                } else {
                    alert("Producto registrado satisfactoriamente.");
                    location.reload();
                }
                }
            });
        }
    });
    
    $(document).on("click", "#irProductos", function(){
    $.mobile.changePage("productos.html", { transition: "slideup", reverse:true ,  changeHash: false});
    });
    

    $(document).on('#search_text').keyup(function(){
        var txt = $('#search_text').val();
        if (txt == ''){
               $.ajax({
               url: "https://mercadoprovii.000webhostapp.com/buscar.php", async: true,
               type: "POST",
               data:{search:'all'},
               success:function(data)
               {
                   $('#result').html(data);
               }
            });
        } else{
            $('#result').html('');
            $.ajax({
               url: "https://mercadoprovii.000webhostapp.com/buscar.php", async: true,
               type: "POST",
               data:{search:txt},
               success:function(data)
               {
                   $('#result').html(data);
               }
            });
        }
    });
    
    
    
});



$(document).on("click", "#sessionKiller", function(){
    localStorage.removeItem("infosaved");
    $.mobile.changePage("login.html", { transition: "slideup", reverse:true ,  changeHash: false});
});

$(document).on("click","#create",function(){
    if($("#user").val() == "" || $("#pass").val() == "" || $("#mail").val() == ""){
        alert("Por favor, ingrese todos los campos.");
} else {
    $.ajax({
        url: "https://mercadoprovii.000webhostapp.com/create-account.php", async: true,
        type: "POST",
        data: {
            user: $("#user").val(),
            pass: $("#pass").val(),
            mail: $("#mail").val()
        },
        success:function(response){
            if(response=="EXISTS"){
                alert("Ya existe un usuario creado con ese nombre, por favor introduzca otro nombre.");
            } else {
                alert("Usuario creado exitosamente.");
                //Ir a la pagina del login
                window.location = 'https://mercadoprovii.000webhostapp.com/login.html';
            }
            }
        });
    }
});

