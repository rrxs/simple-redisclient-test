var redis = require("redis"),
    client = redis.createClient({
        host: "127.0.0.1",
        port: 6379
    });

client.on("error", function (err) {
    console.log("Error " + err);
});

client.set("Quie", 'Relou World', 'EX', 10);
client.get("Quie", function(err, reply){
    console.log(reply);
});