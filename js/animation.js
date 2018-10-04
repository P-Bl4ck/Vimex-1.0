$(window).scroll(function() {
if($('#nav-nosotros').hasClass("active")) {
    $('#animate-nos .animate').removeClass("hidden");
    $('#animate-nos .animate').addClass("text-f");

    $('#animate-nos .animate2').removeClass("hidden");
    $('#animate-nos .animate2').addClass("bounce-in-Righ");

    $('#animate-nos .animate3').removeClass("hidden");
    $('#animate-nos .animate3').addClass("bounce-in-left");
}
    if($('#nav-clientes').hasClass("active")) {

        $('#animate-cli .animate2').removeClass("hidden");
        $('#animate-cli .animate2').addClass("bounce-in-Righ");

        $('#animate-cli .animate3').removeClass("hidden");
        $('#animate-cli .animate3').addClass("bounce-in-left");
    }
});

