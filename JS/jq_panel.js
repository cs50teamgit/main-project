
$(document).ready(function(){
    $('.container-block').draggable()
    $('.container-table__details').droppable({
        drop: function( event, ui ) {
            $( this )

              let new_cell = document.createElement('div')
              new_cell.classList.add('container-table__detail__1')
              document.getElementsByClassName('container-table__details')[0].append(new_cell)
              let element = document.querySelector('.container-block__1');
            element.remove();
              

              

          }
    })
})

    


// function make__pos_fix(el){
//     el.style.position= 'absolute'
//    el.style.left= container__2 + 'px'
//     el.style.top= container__1 +'px'
// }
// console.log(container__1);