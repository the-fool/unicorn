function subscribe() {
    const inputs = $('#subscribe-form input');
    const name = inputs[0].value;
    const email = inputs[1].value;
    const data = {
        name,
        email
    };

    const button = $('#subscribe-form button');
    button.text('Computing.');
    let dots = 1;
    const interval = setInterval(() => {
        button.text(`Computing${'.'.repeat(dots)}`);
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
        complete: function() {
            button.prop('disabled', false);
        }
    });
}

function subscribeSuccess() {
    $('#contact').hide();
    $('#thanks').show();
}

function subscribeError() {

}
