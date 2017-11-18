function subscribe() {
    const inputs = $('#subscribe-form input');
    const name = inputs[0].value;
    const email = inputs[1].value;
    const data = {
        name,
        email
    };
    $.ajax({
        method: "POST",
        url: 'https://7zao5vcvl2.execute-api.us-west-2.amazonaws.com/prod/email',
        data: JSON.stringify({
            body: JSON.stringify(data),
            subject: 'subscriber',
            reply: 'admin@unicorncode.org'
        }),
        crossDomain: true,
        contentType: 'application/json'
    });
}
