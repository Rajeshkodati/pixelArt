let btn = document.getElementById('btn');
btn.addEventListener('click',makegrid);
function makegrid(){
    let row = document.getElementById('grid-height').value;
    let col = document.getElementById('grid-width').value;
    let table = document.getElementById('add-boxes');
    table.innerHTML ='';
    for(let i=0; i<row; i++){
        var tr =document.createElement('tr');
     for(let j=0; j<col; j++){
         var td =document.createElement('td');
         tr.appendChild(td);
     }   
     table.appendChild(tr);
    }
}
$('body').on('click','td',function(){
var col = document.getElementById('color-box').value;
$(this).css('background',col);
     
});