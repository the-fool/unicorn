'use strict';

function subscribe() {
    var inputs = $('#subscribe-form input');
    var name = inputs[0].value;
    var email = inputs[1].value;
    var data = {
        name: name,
        email: email
    };

    var button = $('#subscribe-form button');
    button.text('Computing.');
    var dots = 1;
    var interval = setInterval(function () {
        button.text('Computing' + '.'.repeat(dots));
        dots = (dots + 1) % 4;
    }, 250);
    button.prop('disabled', true);
    $.ajax({
        method: "POST",
        url: 'https://7zao5vcvl2.execute-api.us-west-2.amazonaws.com/prod/email',
        data: JSON.stringify({
            body: JSON.stringify(data),
            subject: 'subscriber',
            reply: 'admin@unicorncode.org'
        }),
        crossDomain: true,
        contentType: 'application/json',
        success: subscribeSuccess,
        error: subscribeError,
        complete: function complete() {
            button.prop('disabled', false);
        }
    });
}

function subscribeSuccess() {
    $('#contact').hide();
    $('#thanks').show();
}

function subscribeError() {}