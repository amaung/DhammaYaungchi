var readerCount = 0;
mport require from './require.js';
var mysql = require('mysql');
alert("mySQL = " + mySQL);
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ANm2ib0zQjXLမစ္ဈိမပဋိပတာဝုဍ္ဎိပက္ခေZ5qMfCigp',
    insecureAuth: false,
    database: 'dhammayaungchi',
    connectionLimit: 10
});
connection.connect();
// connection.query(`select * from dhammayaungchi.visitors`, (err, res) => {
//     return console.log(res);
// });

//DisplayReaderCount(readerCount);
//HideThankYouLabel(true);
UpdateCounter("HOME", "Home Page");

//************************************************************************* */
function doQuery(query) {
    if (connection == null) alert("doQuery() connection is null");
    if (connection != null) {
        alert("doQuery() processing");
        // console.log("Begin doQuery() = " + query);
        connection.query(query, (err, res) => {
            // console.log("doQuery process");
            if (err) {
                console.log('doQuery err = ' + err.message);
                alert('doQuery err = ' + err.message);
                return err.message;
            } else {
                // console.log(res);
                var s = JSON.stringify(res);
                alert("JSON.stringify = " + s);
                // console.log("JSON.stringfy = " + s)
                return s;
            }
        });
        // console.log("doQuery completed");
    }
    // console.log("End of doQuery()");
}

function UpdateCounter(itemCode, itemName) {
    alert("UpdateCounter = " + itemCode + " " + itemName);
    var query = 'update dhammayaungchi.visitors set count = count + 1 where itemCode = ';
    query += "'" + itemCode + "' and itemName = '" + itemName + "';";
    var res = doQuery(query);
    alert("after doQuery() = " + res);
}

function DisplayReaderCount(n) {
    var labelReaderCount = document.getElementById("ReaderCount");
    labelReaderCount.innerText = "ဤစာမျက်နှာကို ဖတ်သူအရေအတွက် - ( " +
        n + ") ";
}

function UpdateReaderCount() {
    DisplayReaderCount(++readerCount);
    ReaderCountButtonDisabled(true);
}

function ReaderCountButtonDisabled(flag) {
    var btn = document.getElementById("UpdateCountButton");
    btn.disabled = flag;
    HideThankYouLabel(false);
}

function HideThankYouLabel(flag) {
    document.getElementById("ThankYou").hidden = flag;

}