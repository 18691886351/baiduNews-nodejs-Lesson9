var newsModel = require('../models/news');
module.exports = {
    get_list_id: function(req, res,id) {
        res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
        newsModel.getNewsById(req, res, function(err, result) {
            res.end(result);
        });
    },
    get_list: function(req, res) {
        res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
        newsModel.getNewsList(req, res, function(err, result) {
            res.end(result);
        });
    },
    get_delete_id: function(req, res,id) {
        console.log("delete_"+id);
        res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
        newsModel.deleteNewsById(req, res, function(err, result) {
            res.end(result);
        });
    },
    post_update_id: function(req, res,id) {
        res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
        newsModel.updateNewsById(req, res, function(err, result) {
            console.log(result);
            res.end(result);
        });
    },
    post_add:function(req,res){
        res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
        newsModel.addNews(req,res,function(err,result){
            res.end(result);
        });
    }
}
