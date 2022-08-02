var http=require('http');
http.createServer(function(req,res){
    var au=req.headers.authorization;
    if(au == undefined){
        res.writeHead(401,{
                        'content-Type':'text/plain',
                        'WWW-Authenticate':'Basic realm="family"'
                     });
                     res.end('');
    }else{
        var str=req.headers.authorization;
        str = str.slice(6,str.length);
        console.log(str);
        var str1 =new Buffer(str,'base64').toString();
        if(str1 != "cd:123"){
            res.writeHead(401,{
                'content-Type':'text/plain',
                'WWW-Authenticate':'Basic realm="family"'
             });
             res.end('');
        }else {
            res.end("aaaaaaaaaaaaa")
        }

    }

}).listen(8888,'127.0.0.1');
console.log('server running at localhost:8888 ');