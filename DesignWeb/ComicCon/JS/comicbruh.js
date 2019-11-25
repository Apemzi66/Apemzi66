$('#small').hide(function () {

    var text = $(this).text();

    if ($(text === "SLAY" || buttontext === "TEST")) {
        ($(this).text("Nom invalide"));
    } else {
        ($(this).text("T'es vraiment original en tout cas"));
    }
});

$("#mcu").hide();
$("#btnmarvel").click(function () {
    $("#sw").hide();
    $("#mcu").toggle();
    $("#dc").hide();
});

$("#dc").hide();
$("#btndc").click(function () {
    $("#sw").hide();
    $("#mcu").hide();
    $("#dc").toggle();
});

$("#sw").hide();
$("#btnstarwars").click(function () {
    $("#sw").toggle();
    $("#mcu").hide();
    $("#dc").hide();
});
