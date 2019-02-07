 
    
//     let tr,td;
//     let tableRow;
//     let tableColu;
//     const chooseColor = $('#color-box').val();
//     function createGrid( ){
//         let currentRow;
//         const table = $('#add-boxes');
//         for(let i=0; i<tableRow; i++){
//             tr = $('<tr></tr>');
//          for(let j=0; j<tableColu; j++){
//              td= document.createElement('td');
//              td.setAttribute('class','color');
//              tr.append(td);
//          } 
//          table.append(tr);  
//         }
//     }
//     $('#btn').click(function(event){
//         event.preventDefault(); 
//         tableRow = $('#grid-height').val();
//          tableColu = $('#grid-width').val();
//          createGrid();
        
//     });
//    $('#add-boxes').on('click','color',function(){
//        console.log(this);
//        const chooseColor = $('#color-box').val();
//       this.css('backgroundColor',chooseColor);
//    }) ;
   let trows;
   let tcolum;
   function createPixels(trows,tcolum){
       $('tr').remove();
     const table =$('#add-boxes');
     for(let i=0; i<trows; i++){
        tr = $('<tr></tr>').appendTo(table);;
         for(let j=0; j<tcolum; j++){
         td = $('<td></td>');
            td.attr('class','color')
           tr.append(td);
        }
     }
    
   $('.color').on('click',function(){
    const color = $('#color-box').val();
    console.log(this)
    $(this).css({backgroundColor:color});
  });
   }
   $('#btn').on('click',function(){
      
    trows = $('#grid-height').val();
   tcolum = $('#grid-width').val(); 
    createPixels(trows,tcolum)
   });