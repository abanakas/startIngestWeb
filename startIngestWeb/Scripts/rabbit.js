
define(function (AMQPStats) {
    var AMQPStats = require('amqp-stats');
    stats = new AMQPStats({
        username: "AMQP_USERNAME", // default: guest
        password: "AMQP_PASSWORD", // default: guest
        hostname: "AMQP_HOSTNAME",  // default: localhost:55672
        protocol: "HTTP_OR_HTTPS"  // default: http
    });
});