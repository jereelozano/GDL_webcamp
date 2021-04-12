(function() {
    'use strict';
    let regalo = document.getElementById('regalo');

    document.addEventListener('DOMContentLoaded', function() {

        var map = L.map('mapa').setView([-31.442399, -64.193196], 17);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([-31.442399, -64.193196]).addTo(map)
        .bindPopup('GDLWebCamp <br> UTN - frc')
        .openPopup();

        // Menu Responsive
        $('.menu-movil').on('click', function(){
            $('.navegacion-principal').slideToggle();
        })


        // Programa de Conferencias
        $('.programa-evento .info-curso:first').show();
        $('.menu-programa a:first').addClass('activo');

        $('.menu-programa a').on('click', function(){
            $('.menu-programa a').removeClass('activo');
            $(this).addClass('activo');

            $('.ocultar').hide();
            let enlace = $(this).attr('href');
            $(enlace).fadeIn(1000);
            return false;
        });

        // Lettering
        $('.nombre-sitio').lettering();

        // Menu fijo
        let windowHeight = $(window).height();
        let barraAltura = $('.barra').innerHeight();

        $(window).scroll(function() {
            let scroll = $(window).scrollTop();
            if(scroll > windowHeight){
                $('.barra').addClass('fixed');
                $('body').css(({'margin-top': barraAltura+'px'}))
            }else {
                $('.barra').removeClass('fixed');
                $('body').css(({'margin-top': '0px'}))
            }

        });



        // Animacion para los Números
        $('.resumen-evento li:nth-child(1) p').animateNumber({number: 6}, 1200);
        $('.resumen-evento li:nth-child(2) p').animateNumber({number: 15}, 1200);
        $('.resumen-evento li:nth-child(3) p').animateNumber({number: 3}, 1500);
        $('.resumen-evento li:nth-child(4) p').animateNumber({number: 9}, 1500);


        // Animacion Cuenta Regresiva
        $('.cuenta-regresiva').countdown('2021/12/22 09:00:00', function(event){
            $('#dias').html(event.strftime('%D'))
            $('#horas').html(event.strftime('%H'))
            $('#minutos').html(event.strftime('%M'))
            $('#segundos').html(event.strftime('%S'))
        })


    }); // DOM CONTENT LOADED
})();


