const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

var ping = require('ping');
var node1 = [config.node1];
var node1name = [config.node1name];
var node2 = [config.node2];
var node2name = [config.node2name];
var node3 = [config.node3];
var node3name = [config.node3name];
var node4 = [config.node4];
var node4name = [config.node4name];

client.on('ready', () => {
    let solo = client.guilds.fetch(config.serverid);
    let memberCount = solo.memberCount;
    let channel4 = client.channels.cache.get(config.chanelid);
    channel4.messages.fetch(config.messageid) .then(msg => {
        msg.edit("")
    });
    console.log('----------------------------------------------\nBot de Bagou450\nDeveveloper pour Zelkoa\nConnected to ' + client.user.id + '!\nEmbed = ' + config.embed + `\n----------------------------------------------`);
});

client.on('ready', () => {
    setInterval(() => {
        node1.forEach(function(host1){
            node2.forEach(function(host2){
                node3.forEach(function(host3){
                    node4.forEach(function(host4){
                            ping.sys.probe(host1, function(isAlive1){
                                ping.sys.probe(host2, function(isAlive2){
                                    ping.sys.probe(host3, function(isAlive3){
                                        ping.sys.probe(host4, function(isAlive4){
                                                var msgnode1 = isAlive1 ? ':green_circle:' : ':red_circle:';
                                                var msgnode2 = isAlive2 ? ':green_circle:' : ':red_circle:';
                                                var msgnode3 = isAlive3 ? ':green_circle:' : ':red_circle:';
                                                var msgnode4 = isAlive4 ? ':green_circle:' : ':red_circle:';
                                                ping.promise.probe(node1)
                                                    .then(function (res) {
                                                        ping.promise.probe(node2)
                                                            .then(function (res1) {
                                                                ping.promise.probe(node3)
                                                                    .then(function (res2) {
                                                                        ping.promise.probe(node4)
                                                                            .then(function (res3) {


                                                                                        let channel2 = client.channels.cache.get(config.chanelid);
                                                                                        channel2.messages.fetch(config.messageid)
                                                                                            .then(msg => {
                                                                                                var ladate = new Date()
                                                                                                if (ladate.getMonth() < 10) {
                                                                                                    var today = ladate.getDate() + "/" + (ladate.getMonth() + 1) + "/" + ladate.getFullYear();
                                                                                                } else {
                                                                                                    var today = ladate.getDate() + "/" + (ladate.getMonth() + 1) + "/" + ladate.getFullYear();
                                                                                                }
                                                                                                var hours = (new Date()).getHours();
                                                                                                todayy = new Date();
                                                                                                if (todayy.getHours() < 10) {
                                                                                                    heure = "0" + todayy.getHours();
                                                                                                } else {
                                                                                                    heure = todayy.getHours();
                                                                                                }
                                                                                                var minutes = (new Date()).getMinutes();
                                                                                                var seconds = (new Date()).getSeconds();
                                                                                                const testembed = new Discord.MessageEmbed()
                                                                                                    .setColor('#0099ff')
                                                                                                    .setTitle('Statut des serveurs')
                                                                                                    .setURL(config.statuslink)
                                                                                                    .addFields(
                                                                                                        {
                                                                                                            name: ':cloud: — ' + config.cat1name,
                                                                                                            value: msgnode1 + ' • ' + config.node1name + ' : ' + res.min + "ms\n" + msgnode2 + ' • ' + config.node2name + ' : ' + res1.min + 'ms'
                                                                                                        },
                                                                                                        {
                                                                                                            name: ':rocket: — ' + config.cat2name,
                                                                                                            value: msgnode3 + ' • ' + config.node3name + ' : ' + res2.min + "ms\n" + msgnode4 + ' • ' + config.node4name + ' : ' + res3.min + 'ms'
                                                                                                        },
                                                                                                        {
                                                                                                            name: '\u200B',
                                                                                                            value: '\u200B'
                                                                                                        },
                                                                                                        {
                                                                                                            name: 'Dernière actualisation le ',
                                                                                                            value: +today + " à " + heure + ":" + minutes + ":" + seconds + '\n :green_circle: = Service en ligne \n :red_circle: = Service hors ligne',
                                                                                                            inline: true
                                                                                                        },
                                                                                                    );
                                                                                                if (config.embed) {
                                                                                                    msg.edit(testembed)
                                                                                                } else {
                                                                                                    msg.edit(":cloud:— " + config.cat1name + "\n    :cloud: • " + config.node1name + " :  "+msgnode1+" ("+res.min+" ms)\n   :cloud: • " + config.node2name + " : "+msgnode2+" ("+res1.min+" ms)\n:rocket:— " + config.cat2name + "\n    :rocket: • " + config.node3name + " : "+msgnode3+" ("+res2.min+" ms)\n :rocket: • " + config.node4name + " : "+msgnode4+" ("+res3.min+" ms)\n\nDernière actualisation le "+today+" à "+heure+":"+minutes+":"+seconds+"\n\n:green_circle: = Service en ligne\n:red_circle: = Service hors ligne");
                                                                                                }

                                                                                                if (isAlive1 === false) {

                                                                                                    client.users.cache.get(config.ownerid).send(":warning: Il y a un probleme avec le " + node1name + ". " + msgnode1 + " " + res.min + "ms" + "\n Ip du serveur : " + node1);
                                                                                                    if (config.embed) {
                                                                                                        client.users.cache.get(config.ownerid).send(testembed)
                                                                                                    } else {
                                                                                                        client.users.cache.get(config.ownerid).send(":cloud:— " + config.cat1name + "\n    :cloud: • " + config.node1name + " :  "+msgnode1+" ("+res.min+" ms)\n   :cloud: • " + config.node2name + " : "+msgnode2+" ("+res1.min+" ms)\n:rocket:— " + config.cat2name + "\n    :rocket: • " + config.node3name + " : "+msgnode3+" ("+res2.min+" ms)\n :rocket: • " + config.node4name + " : "+msgnode4+" ("+res3.min+" ms)\n\nDernière actualisation le "+today+" à "+heure+":"+minutes+":"+seconds+"\n\n:green_circle: = Service en ligne\n:red_circle: = Service hors ligne");
                                                                                                    }

                                                                                                } else if (isAlive2 === false)  {
                                                                                                client.users.cache.get(config.ownerid).send(":warning: Il y a un probleme avec le " + node2name + ". " + msgnode2 + " " + res1.min + "ms" + "\n Ip du serveur : " + node2);
                                                                                                    if (config.embed) {
                                                                                                        client.users.cache.get(config.ownerid).send(testembed)
                                                                                                    } else {
                                                                                                        client.users.cache.get(config.ownerid).send(":cloud:— " + config.cat1name + "\n    :cloud: • " + config.node1name + " :  "+msgnode1+" ("+res.min+" ms)\n   :cloud: • " + config.node2name + " : "+msgnode2+" ("+res1.min+" ms)\n:rocket:— " + config.cat2name + "\n    :rocket: • " + config.node3name + " : "+msgnode3+" ("+res2.min+" ms)\n :rocket: • " + config.node4name + " : "+msgnode4+" ("+res3.min+" ms)\n\nDernière actualisation le "+today+" à "+heure+":"+minutes+":"+seconds+"\n\n:green_circle: = Service en ligne\n:red_circle: = Service hors ligne");
                                                                                                    }
                                                                                                } else if (isAlive3 === false)  {
                                                                                        client.users.cache.get(config.ownerid).send(":warning: Il y a un probleme avec le " + node3name + ". " + msgnode3 + " " + res2.min + "ms" + "\n Ip du serveur : " + node3);
                                                                                                    if (config.embed) {
                                                                                                        client.users.cache.get(config.ownerid).send(testembed)
                                                                                                    } else {
                                                                                                        client.users.cache.get(config.ownerid).send(":cloud:— " + config.cat1name + "\n    :cloud: • " + config.node1name + " :  "+msgnode1+" ("+res.min+" ms)\n   :cloud: • " + config.node2name + " : "+msgnode2+" ("+res1.min+" ms)\n:rocket:— " + config.cat2name + "\n    :rocket: • " + config.node3name + " : "+msgnode3+" ("+res2.min+" ms)\n :rocket: • " + config.node4name + " : "+msgnode4+" ("+res3.min+" ms)\n\nDernière actualisation le "+today+" à "+heure+":"+minutes+":"+seconds+"\n\n:green_circle: = Service en ligne\n:red_circle: = Service hors ligne");
                                                                                                    }
                                                                                    } else if (isAlive4 === false) {
                                                                                client.users.cache.get(config.ownerid).send(":warning: Il y a un probleme avec le " + node4name + ". " + msgnode4 + " " + res3.min + "ms" + "\n Ip du serveur : " + node4);
                                                                                                    if (config.embed) {
                                                                                                        client.users.cache.get(config.ownerid).send(testembed)
                                                                                                    } else {
                                                                                                        client.users.cache.get(config.ownerid).send(":cloud:— " + config.cat1name + "\n    :cloud: • " + config.node1name + " :  "+msgnode1+" ("+res.min+" ms)\n   :cloud: • " + config.node2name + " : "+msgnode2+" ("+res1.min+" ms)\n:rocket:— " + config.cat2name + "\n    :rocket: • " + config.node3name + " : "+msgnode3+" ("+res2.min+" ms)\n :rocket: • " + config.node4name + " : "+msgnode4+" ("+res3.min+" ms)\n\nDernière actualisation le "+today+" à "+heure+":"+minutes+":"+seconds+"\n\n:green_circle: = Service en ligne\n:red_circle: = Service hors ligne");
                                                                                                    }
                                                                            } else {
                                                                        return null;
                                                                }


                                                                                            });
                                                                                    });
                                                                            });



                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    }, 5000);
});


client.on('ready', () => {
    client.user.setStatus('idle')
    client.user.setStatus('online')
    client.user.setPresence({
        watching: {
            name: 'vos serveurs',
            type: 0
        }
    });
});

const talkedRecently = new Set();



var mysql      = require('mysql');
var con   = mysql.createPool({
    host     : 'localhost',
    user     : 'test',
    password : 'test',
    database : 'test'
});

function QueryDb(sql, cb){
    con.getConnection(function(err, connection) {
        if (err) {
            console.log(err)
            return
        }
        connection.query(sql, function (err, result) {
            connection.release();
            if (err) {
                console.log(err)
                return
            }
            cb(result).catch(function(error) {
                console.error(error);
            });
        });
    });
}




client.on("message", async message => {
    let args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    let command = args.shift().toLowerCase();
    const argss = message.content.slice(config.prefix.length + command.length).trim().split(/ +/g);
    const argsfeed = message.content.slice(config.prefix.length + command.length + argss).trim().split(/ +/g);
    let userid = message.author.id;
    if(message.author.bot) return;
    if (message.content.indexOf(config.prefix) !== 0) return;

    if(command === "bot") {
        const aa = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Statut des serveurs')
            .setURL('https://erusya.com')
            .setAuthor('Bagou450')
            .addFields(
                { name: 'Chargement en cours', value: ':snail: '},
            );
        if (!message.member.hasPermission('ADMINISTRATOR')) {
            message.reply("Vous n\'avez pas les permissions d\'utiliser cette commande !")
        } else {
            if (config.embed) {

                message.reply(aa);
            } else {
                message.reply('Salut');
            }
        }

    } else{
        return null;
    }
});



client.login(config.token);
