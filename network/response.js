const statusMessages = {
    '200': 'Done',
    '201': 'Created',
    '400': 'Invalid format',
    '500': 'Internal error'
}

const succes = (req, res, message, status) => {
    let statusCode = status;
    let statusMessage = message;

    if(!status) {
        status = 200;
    }
    
    if(!message) {
        statusMessage = statusMessages[status];
    }

    res.status(statusCode).send({
        "error": "",
        "body": statusMessage
    });
}

const error = (req, res, message, status, details) => {
    console.error('[response error]' + details);

    res.status(status || 500).send({
        "error": message,
        "body": ""
    });
}

module.exports = {
    succes,
    error
}