<?php
// database connection code
// $con = mysqli_connect('localhost', 'database_user', 'database_password','database');

// database connection code

if(isset($_POST['txtName']))
//if($flag)
//if ($_SERVER["REQUEST_METHOD"] == "POST")
{
    $con = mysqli_connect('localhost', 'root', 'ANm2ib0zQjXLမစ္ဈိမပဋိပတာဝုဍ္ဎိပက္ခေZ5qMfCigp','testdb');

    // get the post records
    $txtName = $_POST['txtName'];
    $txtEmail = $_POST['txtEmail'];
    $txtPhone = $_POST['txtPhone'];
    $txtMessage = $_POST['txtMessage'];
    
    $txtName = 'Aung Zaw Maung';
    $txtEmail = 'auzm2002@yahoo.com';
    $txtPhone = "510-579-6444";
    $txtMessage = 'အောငိဇော်မောင်';

    // database insert SQL code
    $sql = "INSERT INTO `tbl_contact` (`Id`, `fldName`, `fldEmail`, `fldPhone`, `fldMessage`) VALUES ('0', '$txtName', '$txtEmail', '$txtPhone', '$txtMessage')";
    // insert in database 
    $rs = mysqli_query($con, $sql);
    if($rs)
    {
        echo "Contact Records Inserted";
    }
}
else
{
	echo "Are you a genuine visitor?";
}
?>