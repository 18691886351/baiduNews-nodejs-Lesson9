/**
 * Created by jun on 2016/4/23.
 * 用户模型
 */
var mysql = require('mysql');
var dbconfig = require("../config/database");
//公用lib
var tools = require('../lib/tools');
//使用连接池
var pool = mysql.createPool(dbconfig.mysql);

module.exports = {
    addNews: function(req, res, callback) {
        pool.getConnection(function(err, connection) {
            console.log(req.body);
            var _newtype = req.body.newtype;
            var _newImge = tools.escapeHtml(tools.escapeHtml_encode(req.body.newImge));
            var _newTitle = tools.escapeHtml(tools.escapeHtml_encode(req.body.newTitle));
            var _newPubDate = tools.escapeHtml(tools.escapeHtml_encode(req.body.newPubDate));
            var _newMark = tools.escapeHtml(tools.escapeHtml_encode(req.body.newMark));
            var _newurl = tools.escapeHtml(tools.escapeHtml_encode(req.body.newurl));
            var _params = [_newtype, _newImge, _newTitle, _newPubDate, _newMark, _newurl];
            connection.query('INSERT INTO news(newtype,newImge,newTitle,newPubDate,newMark,newurl) VALUES(?,?,?,?,?,?)', _params, function(err, result) {
                console.log('insert ' + result.insertId);
                callback(err, result.insertId+"");
                connection.release();
            })
        });
    },
    updateNewsById: function(req, res, callback) {
        pool.getConnection(function(err, connection) {
            console.log(req.body);
            var _newtype = req.body.newtype;
            var _newImge = tools.escapeHtml(tools.escapeHtml_encode(req.body.newImge));
            var _newTitle = tools.escapeHtml(tools.escapeHtml_encode(req.body.newTitle));
            var _newPubDate = tools.escapeHtml(tools.escapeHtml_encode(req.body.newPubDate));
            var _newMark = tools.escapeHtml(tools.escapeHtml_encode(req.body.newMark));
            var _newurl = tools.escapeHtml(tools.escapeHtml_encode(req.body.newurl));
            var _params = [_newtype, _newImge, _newTitle, _newPubDate, _newMark, _newurl, req.params.id];
            connection.query('UPDATE `news` SET newtype=?,newImge=?,newTitle=?,newPubDate=?,newMark=?,newurl=?  WHERE id=?', _params, function(err, result) {
                console.log('update ' + req.params.id + ' rows');
                callback(err, req.params.id + "");
                connection.release();
            })
        });
    },
    deleteNewsById: function(req, res, callback) {
        pool.getConnection(function(err, connection) {
            //定义查询语句
            var sql = "DELETE FROM `news` WHERE id = ?";
            connection.query(sql, req.params.id, function(error, results, fields) {
                console.log('deleted ' + results.affectedRows + ' rows');
                console.log('deleted ' + results.changedRows + ' rows');
                //console.log(news);
                callback(err, req.params.id + "");
                //释放连接
                connection.release();
            });
        });
    },
    getNewsList: function(req, res, callback) {
        pool.getConnection(function(err, connection) {
            //定义查询语句
            var sql = "SELECT * FROM `news` Order by id desc";
            connection.query(sql, function(error, results, fields) {
                var news = [];
                results.forEach(function(element, index, array) {
                    /*console.log(element.id);
                    console.log(element.newType);
                    console.log(element.newImge);
                    console.log(element.newTitle);
                    console.log(element.newPubDate);
                    console.log(element.newMark);
                    console.log(element.newurl);*/
                    var item = {};
                    item.id = element.id;
                    item.newType = element.newType;
                    item.newImge = element.newImge;
                    item.newTitle = element.newTitle;
                    item.newPubDate = element.newPubDate;
                    item.newMark = element.newMark;
                    item.newurl = element.newurl;
                    news.push(item);
                });
                //console.log(news);
                callback(err, JSON.stringify(news));
                // 释放连接
                connection.release();
            })
        });
    },
    getNewsById: function(req, res, callback) {
        pool.getConnection(function(err, connection) {
            //定义查询语句
            var sql = "SELECT * FROM `news` WHERE `id` = ?";
            connection.query(sql, [req.params.id], function(error, results, fields) {
                var news = [];
                results.forEach(function(element, index, array) {
                    /*console.log(element.id);
                    console.log(element.newType);
                    console.log(element.newImge);
                    console.log(element.newTitle);
                    console.log(element.newPubDate);
                    console.log(element.newMark);
                    console.log(element.newurl);*/
                    var item = {};
                    item.id = element.id;
                    item.newType = element.newType;
                    item.newImge = element.newImge;
                    item.newTitle = element.newTitle;
                    item.newPubDate = element.newPubDate;
                    item.newMark = element.newMark;
                    item.newurl = element.newurl;
                    news.push(item);
                });
                //console.log(news);
                callback(err, JSON.stringify(news));
                // 释放连接
                connection.release();
            })
        });
    }
}
