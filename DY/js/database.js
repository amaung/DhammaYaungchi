var readerCount = 0;
//const { createPool } = require('mysql')
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ANm2ib0zQjXLမစ္ဈိမပဋိပတာဝုဍ္ဎိပက္ခေZ5qMfCigp',
    insecureAuth: false,
    database: 'testDB',
    connectionLimit: 10
});
connection.connect();
// connection.query(`select count(*) from dhammayaungchi.visitors`, (err, res) => {
//     if (err) console.log(err.message);
//     else
//         console.log(res);
// });
// connection.query(`select count from dhammayaungchi.visitors where authorCode = 'Mahasi'
//     and articleName = 'နိဗ္ဗာန်အာရုံသို့ကူးသွားပုံ';`, (err, res) => {
//     if (err) console.log(err.message);
//     else {
//         console.log(res);
//         var s = JSON.stringify(res);
//         console.log("JSON.stringfy = " + s)
//         var json = JSON.parse(s);
//         console.log("JSON = " + json[0].count);
//     }
// });
// connection.query(`
// update dhammayaungchi.visitors set count = count + 1 where authorCode = 'Mahasi'
// `, (err, res) => {
//     if (err) console.log(err.message);
//     else
//         console.log(res);
// });
// connection.query(`
// select * from dhammayaungchi.visitors where authorCode = 'Mahasi'
// `, (err, res) => {
//     if (err) console.log(err.message);
//     else
//         console.log(res);
// });

//UpdateCounter("Mahasi", "နိဗ္ဗာန်အာရုံသို့ကူးသွားပုံ");
//console.log("GetCount() = " + GetCount("Mahasi ", "နိ ဗ္ ဗာ န် အာ ရုံ သို့ ကူး သွား ပုံ "));
// var n = GetCount('Mahasi', 'နိဗ္ဗာန်အာရုံသို့ကူးသွားပုံ');
//console.log("GetCount = " + n);
UpdateCounter("HOME", "Home Page");
// var res = GetCount("HOME", "Home Page");
GetCount("HOME", "Home Page", function(data) {
    console.log("GeCount res = " + data);
});


function doQuery(query) {
    if (connection != null) {
        // console.log("Begin doQuery() = " + query);
        connection.query(query, (err, res) => {
            // console.log("doQuery process");
            if (err) {
                // console.log('doQuery err = ' + err.message);
                return err.message;
            } else {
                console.log(res);
                var result = Object.values(JSON.parse(JSON.stringify(res)));
                console.log("doQuery result = " + result[0]["count"]);
                // var json = JSON.parse(s);
                //console.log("JSON = " + json[0].count);
                return result[0]["count"];
            }
        });
        // console.log("doQuery completed");
    }
    // console.log("End of doQuery()");
}

function UpdateCounter(itemCode, itemName) {
    var query = 'update testDB.visitors set count = count + 1 where itemCode = ';
    query += "'" + itemCode + "' and itemName = '" + itemName + "';";
    doQuery(query);
}

function GetCount(itemCode, itemName, _callback) {
    var query = 'select count from testDB.visitors where itemCode = ';
    query += "'" + itemCode + "' and itemName = '" + itemName + "';";
    if (connection != null) {
        connection.query(query, (err, res) => {
            if (err) {
                return _callback(err.message);
            } else {
                console.log(res);
                var result = Object.values(JSON.parse(JSON.stringify(res)));
                console.log("doQuery result = " + result[0]["count"]);
                // return result[0]["count"];
                _callback(result[0]["count"]);
            }
        });
    }
}

function GetCount1(itemCode, itemName) {
    console.log("GetCount()");
    var query = 'select count from testDB.visitors where itemCode = ';
    query += "'" + itemCode + "' and itemName = '" + itemName + "';";
    doQuery(query, (err, res) => {
        if (err) {
            console.log(err.message);
            return err.message;
        } else {
            console.log("GeCount res = " + res);
            return res;
        }
    });
    // console.log("GetCount():Result of doQuery = " + result);
    // connection.query(query, (err, res) => {
    //     console.log("***doQuery process = " + query);
    //     if (err) {
    //         return err.message;
    //     } else {
    //         var s = JSON.stringify(res);
    //         console.log("After stringify = " + s);
    //         var json = JSON.parse(s);
    //         console.log("json count = " + json[0].count);
    //         result = json[0].count.toString();
    //         return json[0].count.toString();
    //     }
    // })
}