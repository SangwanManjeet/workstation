///**
// * Created with IntelliJ IDEA.
// * User: Administrator
// * Date: 7/25/13
// * Time: 12:59 PM
// * To change this template use File | Settings | File Templates.
// */
//
//
//
//
//var NodejsAPI = require("ApplaneCore/nodejsapi");
//var Utils = require("ApplaneCore/apputil/util.js");
//NodejsAPI.asQuery({
//    table:"tables__baas",
//    columns:["id"],
//    filter:{id:"domains__frontend"}
//}, {ask:"baas"}).execute(function (err, data) {
//        if (err) {
//            console.log(err.message);
//            console.log(err.code);
//            console.log(err.stack);
//        } else {
//            var tables = data.data;
//            Utils.iterateArray(tables, function (err) {
//                if (err) {
//                    console.log("fail..........................");
//                    console.log(err);
//                } else {
//                    console.log("done..........................");
//                }
//            }, function (table, callback) {
//                NodejsAPI.asUpdate("tables__baas", {ask:"baas"}).update(table._id.toString(), {id:table.id}).save(function (err, data) {
//                    if (err) {
//                        console.log("fail..........................table " + table.id);
//                        console.log(err);
//                    }
//                    callback();
//                });
//            })
//        }
//    });
