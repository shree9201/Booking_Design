/*
 * Title:   ConnectBooker-Google Direct Booking Link - Booking Javascript file
 * Author:  https://connectbooker.com
 */

tjq(document).ready(function($) {
    $("form.booking-form").submit(function(e) {
        e.preventDefault();
        var obj = $(this);
        if (obj.hasClass("disabled")) {
            return false;
        }
        obj.addClass("disabled");
        $.ajax({
            url: obj.attr("action"),
            type: 'post',
            dataType: 'html',
            data: obj.serialize(),
            success: function(r) {
                var msgobj = obj.find(".alert");
                if (r.indexOf("Success") >= 0) {
                    msgobj.removeClass("alert-error");
                    msgobj.addClass("alert-success");
                } else {
                    msgobj.removeClass("alert-success");
                    msgobj.addClass("alert-error");
                }
                msgobj.text(r);
                msgobj.fadeIn();
                obj.removeClass("disabled");
            }
        });
    });
});