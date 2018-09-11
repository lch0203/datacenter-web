// $(document).ready(function () {
//     $("#menu-toggle").click(function (e) {
//         e.preventDefault();
//         $("#wrapper").toggleClass("toggled");
//         $('#wrapper.toggled').find("#sidebar-wrapper").find(".collapse").collapse('hide');
//     });
// });
$(document).ready(function () {
    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
        $('#wrapper.toggled').find("#sidebar-wrapper").find(".collapse").collapse('hide');
    });
});
// $(document).ready(function() {
//     // 检测localstorage中配置项
//     // 如果有设置，并且为true
//     if(window.localStorage['expand']) {
//         $("#wrapper").removeClass("toggled");
//     }
//     // 如果没有设置或者设置为false（默认class是有toggled，表示收缩起来）
//     else {
//         $("#wrapper").addClass("toggled");
//         // $('#wrapper.toggled').find("#sidebar-wrapper").find(".collapse").collapse('hide');
//     }
//     $("#menu-toggle").click(function(e) {
//         e.preventDefault();
//         $("#wrapper").toggleClass("toggled");
//         // $('#wrapper.toggled').find("#sidebar-wrapper").find(".collapse").collapse('hide');
//         // 设置配置项
//         window.localStorage['expand']= !$("#wrapper").hasClass("toggled")
//     });
// });