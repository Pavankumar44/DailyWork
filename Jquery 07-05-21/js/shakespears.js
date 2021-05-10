$(() => {
    $('#selected-plays > li')
      .addClass('horizontal');
    
    $('#selected-plays li:not(.horizontal)')
      .addClass('sub-level');
});
$('img[alt]')
$(() => {
    $('a[href^="mailto:"]')
      .addClass('mailto');
    $('a[href$=".pdf"]')
      .addClass('pdflink');
    $('a[href^="http"][href*="henry"]') 
      .addClass('henrylink');
});
$('div.horizontal:eq(1)')
$(() => {
  $('tr:nth-child(odd)')
    .addClass('alt');
  $('td:contains(Henry)')
    .parent()
    .find('td:eq(1)').end().find('td:eq(2)')
    .addClass('highlight'); 
});
$('tr')
 .filter(':even')
 .addClass('alt');
$('a')
 .filter((i, a) =>
   a.hostname && a.hostname !== location.hostname
 )
 .addClass('external');

   
   
   