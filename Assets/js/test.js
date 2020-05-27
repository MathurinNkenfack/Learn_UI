$("#menu a").click(function(e) {
    e.preventDefault()
    var selText = $(this).text();
    $(this).parents('#nav-1').find('#lan-select').html(selText + ' <span class="fa fa-chevron-down" style="padding-left: 5px;"></span>');
});

$("#form-1 select:first").change(function(e) {
    var links = ["register-1.html", "register-2.html"];
    var index = $("#form-1 select:first option:selected").val();
    $("#form-1").attr("action", links[index]);
})