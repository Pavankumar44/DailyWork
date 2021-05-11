$(() => {
    $('#selected-plays > li ').addClass('special');
    $('td:nth-child(3)').addClass("year");
    $('td:contains(Tragedy)').addClass('special');
});