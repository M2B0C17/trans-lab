$(document).ready(function() {
	// Validación HTML 1 - No funciona la redirección con href
	$("#botonIniciarSesion").click(function() {
		var correo = $("#icon_prefix").val();
		var contra = $("#lock").val(); // variable donde conectadmos con la funcion en el html

		localStorage.correo = correo; // guardando datos
		localStorage.cont = contra; // guardando datos

		var validacionCorreo = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		var validacionContra = /^([0-9])*$/;

		if (validacionCorreo.test(correo) && validacionContra.test(contra) && contra.lenght <= 8) { // condiciones a cumplir
			window.location.href = 'index-2.html'; // redireccionar pagina
		}else{
			alert("Debes escribir en los campos obligatorios"); // mensaje de error
		}
	});


	// Iniciando select
    $('select').material_select();

});
