$(function() {
    $('table').prev('h3').addClass('table_title');
    $('table').wrap('<div class="responsive-table"></div>');

    $('.markdown h2,h3,h4,h5,h6').filter('[id]').each(function () {
        $(this).html('<a href="#'+$(this).attr('id')+'">' + $(this).text() + '</a>');
    });
});