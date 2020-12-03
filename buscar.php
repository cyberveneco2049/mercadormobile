<?php

include("conn.php");

$output = '';

$search = $_POST['search'];

if($search == 'all'){
    
    $sql = "SELECT * FROM products JOIN Types ON products.type = Types.pk ORDER BY products.id";
    
    $result = mysqli_query($db, $sql);
    
    if(mysqli_num_rows($result) > 0)
    {
    	$output .= '<h4 align="center>Resultado de la Busqueda </h4>';
    	$output .= '<div class="table-responsive">
    	                <table style="width:100%">
    	                    <tr>
    	                        <th style="padding: 15px, text-align: center">Código</th>
    	                        <th style="padding: 15px, text-align: center">Producto</th>
    	                        <th style="padding: 15px, text-align: center">Tipo de Producto</th>
    	                    </tr>';
    	while($row = mysqli_fetch_array($result)){
            $output .= '
                <tr>
                    <td style="padding: 15px">'.$row["id"].'</td>
                    <td style="padding: 15px">'.$row["name"].'</td>
                    <td style="padding: 15px">'.$row["product_type"].'</td>
                </tr>
            ';
    	}
    	echo $output;
    } else
    {
        echo 'No se encuentran registros.';
    }
    
} else {
    
    $sql = "SELECT * FROM products JOIN Types ON products.type = Types.pk WHERE products.id LIKE '%$search%' ORDER BY products.id";
    
    $result = mysqli_query($db, $sql);
    
    if(mysqli_num_rows($result) > 0)
    {
    	$output .= '<h4 align="center>Resultado de la Busqueda </h4>';
    	$output .= '<div class="table-responsive">
    	                <table class="table table-bordered" style="width:100%">
    	                    <tr>
    	                        <th style="padding: 15px, text-align: center">Código</th>
    	                        <th style="padding: 15px, text-align: center">Producto</th>
    	                        <th style="padding: 15px, text-align: center">Tipo de Producto</th>
    	                    </tr>';
    	while($row = mysqli_fetch_array($result)){
            $output .= '
                <tr>
                    <td style="padding: 15px">'.$row["id"].'</td>
                    <td style="padding: 15px">'.$row["name"].'</td>
                    <td style="padding: 15px">'.$row["product_type"].'</td>
                </tr>
            ';
    	}
    	echo $output;
    } else
    {
        echo '<center><strong><h3>No se encuentran registros.</h3></strong></center>';
    }
}






?>