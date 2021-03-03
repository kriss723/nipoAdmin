$(document).ready(function(){

    var txtnombre = $('#txtNombre'); 
    var txtcolor = $('#txtColor');
    var btnguardar = $('#btnGuardar');
    var contenedorEventos = $('#calendar-events')

    btnguardar.click(function(){
        console.log('prueba');
        console.log(txtnombre.val());
        console.log(txtcolor.val());
        //contenedorEventos.after('<div class="calendar-events m-b-20" data-class="bg-'+txtcolor.val()+'info"><i class="fa fa-circle text-info m-r-10"></i>'+txtnombre.val() +'</div>');
        contenedorEventos.after('<div class="calendar-events m-b-20 ui-draggable ui-draggable-handle" data-class="bg-'+txtcolor.val()+'" style="position: relative; z-index: auto; left: 0px; top: 0px;"><i class="fa fa-circle text-warning m-r-10" aria-hidden="true"></i>'+txtnombre.val()+'</div>')
    
           
    });
    

});