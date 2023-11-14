function AfficherMasquer()
{
 let divInfo = document.getElementById('a_masquer');
if (divInfo.style.display == 'none'){
    divInfo.style.display = 'block';
}
else {divInfo.style.display = 'none';
} 
}