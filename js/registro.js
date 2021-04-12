(function() {
    'use strict';
    let regalo = document.getElementById('regalo');

    document.addEventListener('DOMContentLoaded', function() {

        // Campos datos usuarios
        let nombre = document.getElementById('nombre'),
            apellido = document.getElementById('apellido'),
            email = document.getElementById('email');


        // Campos pases
        let pase_dia = document.getElementById('pase_dia'),
            pase_dosdias = document.getElementById('pase_dosdias'),
            pase_completo = document.getElementById('pase_completo');


        // Botones y Divs
        let calcular = document.getElementById('calcular'),
            errorDiv = document.getElementById('error'),
            botonRegistro = document.getElementById('btnRegistro'),
            lista_productos = document.getElementById('lista-productos'),
            suma = document.getElementById('suma-total');

        // Extras 
        let camisas = document.getElementById('camisa_evento'),
            etiquetas = document.getElementById('etiquetas'),
            bCampos = false,
            bArroba = false;
        

        calcular.addEventListener('click', calcularMontos);

        pase_dia.addEventListener('blur', mostrarDias);
        pase_dosdias.addEventListener('blur', mostrarDias);
        pase_completo.addEventListener('blur', mostrarDias);

        nombre.addEventListener('blur', validarCampos);
        apellido.addEventListener('blur', validarCampos);
        email.addEventListener('blur', validarCampos);
        email.addEventListener('blur', validarMail);


        function validarCampos() {
            if(this.value == '') {
                errorDiv.style.display = 'block';
                errorDiv.innerHTML = 'Este campo es obligatorio!';
                this.style.border = '1px solid red';
                errorDiv.style.border = '1px solid red';
            }else {
                errorDiv.style.display = 'none';
                this.style.border = '1px solid black';
                bCampos = true;
            }
        }

        function validarMail() {
            if(this.value.indexOf('@') > -1) {
                errorDiv.style.display = 'none';
                this.style.border = '1px solid black';
                bArroba = true;
           }else {
            errorDiv.style.display = 'block';
            errorDiv.innerHTML = 'Debe tener un @';
            this.style.border = '1px solid red';
            errorDiv.style.border = '1px solid red';
           }
        }

        function calcularMontos(event) {
            const listadoProductos = [];
            let boletosDia = parseInt(pase_dia.value, 10) || 0,
                boletos2Dias = parseInt(pase_dosdias.value, 10) || 0,
                boletoCompleto = parseInt(pase_completo.value, 10) || 0,
                cantCamisas = parseInt(camisas.value, 10) || 0,
                cantEtiquetas = parseInt(etiquetas.value, 10) || 0;

            event.preventDefault();
            if (regalo.value === '') {
                alert('Debes elegir un REGALO');
                regalo.focus();
            } else if (!bArroba || !bCampos){
                alert('Debes completar con tus DATOS')
            } else {
                let totalPagar = (boletosDia * 30) + (boletos2Dias * 45) + (boletoCompleto * 50) + ((cantCamisas * 10) * 0.93) + (cantEtiquetas * 2);            
                
                if (boletosDia >= 1) {
                    listadoProductos.push(boletosDia + ' Pases por día');
                } if (boletos2Dias >= 1){
                    listadoProductos.push(boletos2Dias + ' Pases por 2 días');
                } if (boletoCompleto) {
                    listadoProductos.push(boletoCompleto + ' Pases Completos');
                } if (camisas) {
                    listadoProductos.push(cantCamisas + ' Camisas');
                } if (etiquetas) {
                    listadoProductos.push(cantEtiquetas + ' Etiquetas');
                }
                  
                lista_productos.style.display = 'block';
                lista_productos.innerHTML = '';

                for (let producto of listadoProductos){
                    lista_productos.innerHTML += producto + '<br/>';
                }

                suma.innerHTML = '$ ' + totalPagar.toFixed(2);

            } 
        }
        function mostrarDias() {
            let boletosDia = parseInt(pase_dia.value, 10) || 0,
                boletos2Dias = parseInt(pase_dosdias.value, 10) || 0,
                boletoCompleto = parseInt(pase_completo.value, 10) || 0;

            let diasElegidos = [];

            if(boletosDia > 0) {
                diasElegidos.push('viernes');
            }
            if(boletos2Dias > 0) {
                diasElegidos.push('viernes', 'sabado');
            }
            if(boletoCompleto > 0) {
                diasElegidos.push('viernes', 'sabado', 'domingo');
            }

            for( let dia of diasElegidos) {
                document.getElementById(dia).style.display = 'block';
            }

        }

    }); // DOM CONTENT LOADED
})();

