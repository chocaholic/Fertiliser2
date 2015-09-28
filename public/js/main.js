$(function() {
    
    $('#expected').hide();

    $('#settings').click(function() {
        window.location.href = ("/settings");
    });
    
        $('#complete').click(function() {
        window.location.href = ("/");
    });
    
    $('#reset').click(function() {
        $('#nitrogen').val("");
        $('#phosphorus').val("");
        $('#potash').val("");
        $('#pricea').val("");
    });


    $('#calculate').submit(function(event) {
        event.preventDefault();
        $(this).ajaxSubmit({
            beforeSend: function(xhr) {
               
            },
            error: function(xhr) {
               
            },
            success: function(response) {
               $('#expected').show();
               $('#finalprice').html(response);
            }
        });
    });
    
    $('#fsettings').submit(function(event) {
        event.preventDefault();
        $(this).ajaxSubmit({
            beforeSend: function(xhr) {
               
            },
            error: function(xhr) {
               
            },
            success: function(response) {
               window.location.href = ("/");
            }
        });
    });

    $.validator.setDefaults({
        highlight: function(element) {
            $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
        },
        unhighlight: function(element) {
            $(element).closest('.form-group').removeClass('has-error').addClass('has-success');
        },
        errorElement: 'span',
        errorClass: 'help-block',
        errorPlacement: function(error, element) {
            if (element.parent('.input-group').length) {
                error.insertAfter(element.parent());
            }
            else {
                error.insertAfter(element);
            }
        }
    });

    $("#calculate").validate({
        rules: {
            nitrogen: "required",
            phosphorus: "required",
            potash: "required",
            pricea: "required"
        },
        messages: {
            nitrogen: "Value Required",
            phosphorus: "Value Required",
            potash: "Value Required",
            pricea: "Price Required"
        }
    });
    
    $("#fsettings").validate({
        rules: {
            nitrogen: "required",
            phosphorus: "required",
            potash: "required",
            pricea: "required",
            elementa: "required",
            elementb: "required"
        },
        messages: {
            nitrogen: "Value Required",
            phosphorus: "Value Required",
            potash: "Value Required",
            pricea: "Price Required",
            elementa: "Price Required",
            elementb: "Price Required"
        }
    });

});