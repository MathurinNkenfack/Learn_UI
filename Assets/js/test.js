$("#menu a").click(function(e) {
    e.preventDefault()
    var selText = $(this).text();
    $(this).parents('#nav-1').find('#lan-select').html(selText + ' <span class="fa fa-chevron-down" style="padding-left: 5px;"></span>');
});