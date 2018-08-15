
// return



// get server timestamp
// http://columns.chicken-house.net/2017/01/05/webserverclock-release/

var xmlHttp;
function srvTime(host){
    try {
        //FF, Opera, Safari, Chrome
        xmlHttp = new XMLHttpRequest();
    }
    catch (err1) {
        //IE
        try {
            xmlHttp = new ActiveXObject('Msxml2.XMLHTTP');
        }
        catch (err2) {
            try {
                xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
            }
            catch (eerr3) {
                //AJAX not supported, use CPU time.
                alert("AJAX not supported");
            }
        }
    }
    xmlHttp.open('HEAD', host, false);
    xmlHttp.setRequestHeader("Content-Type", "text/html");
    xmlHttp.send('');
    return xmlHttp.getResponseHeader("Date");
}

//var st = srvTime("https://kham.com.tw");
//var date = new Date(st);



// kham ticket

var url = document.URL;
console.log("url = " + url);

var step0 = "https://kham.com.tw/application/UTK02/UTK0201_.aspx";
var step1 = "https://kham.com.tw/application/UTK02/UTK0201_00.aspx";
var step2 = "https://kham.com.tw/application/UTK02/UTK0201_000.aspx";
var step3 = "https://kham.com.tw/application/UTK02/UTK0201_001.aspx";
var step4 = "https://kham.com.tw/application/UTK02/UTK0206_.aspx";
var step5 = "https://kham.com.tw/application/UTK02/UTK0207_.aspx";

// step 0
if (url.match(step0) !== null) {
    console.log('in step0');
    var btn = document.getElementById("ctl00_ContentPlaceHolder1_BUY_BTN");
    btn.click();
}

// step 1
if (url.match(step1) !== null) {
    console.log('in step1');
    var btn = document.getElementById("ctl00_ContentPlaceHolder1_DataGrid_ctl02_ACTION");
    var link = btn.getElementsByClassName("showoder")[0];
    console.log(link.href);
    link.click();
}

// step 2
if (url.match(step2) !== null) {
    console.log('in step2');
    var map = document.getElementById("mapdata");
    var areas = map.getElementsByTagName("area");
    //console.log(areas);
    var max_id, max_price = 0;
    for (var i = 0; i < areas.length; i++) {
        var area = areas[i];
        var id = area.id;
        var title = area.title;
        var price = title.substring(title.indexOf("：") + 1, title.indexOf("尚"));
        var remain = title.substring(title.lastIndexOf("：") + 1);
        console.log("id: " + id + " title: " + title + " price: " + price + " remain: " + remain);
        price = parseInt(price);
        if (remain == "熱賣中") {
            remain = 100;
        } else if (remain == "已售完") {
            remain = -1;
        } else {
            remain = parseInt(remain);
        }
        //console.log("new:  price: " + price + " max: " + max_price + " remain: " + remain);
        if (price > max_price && remain > 0) {
            max_price = price;
            max_id = id;
        }
    }
    console.log("result: " + max_id + " " + max_price);
    var btn = document.getElementById(max_id);
    btn.click();
}

// step 3
if (url.match(step3) !== null) {
    console.log('in step3');
    var seat = document.getElementById("ctl00_ContentPlaceHolder1_ATYPE");
    seat.click();

    var amount = document.getElementById("ctl00_ContentPlaceHolder1_DataGrid_ctl02_AMOUNT");
    var obj = document.getElementById("ctl00_ContentPlaceHolder1_AMOUNT");
    if (obj == null) {
        obj = document.getElementById("ctl00_ContentPlaceHolder1_HOT");
    }
    var remain = 0;
    if (obj != null) {
        remain = obj.innerHTML
    }
    console.log("remain: " + remain);
    if (remain == "熱賣中") {
        remain = 100;
    } else if (remain == "已售完") {
        remain = -1;
    } else {
        remain = parseInt(remain);
    }

    var want = 6;
    if (remain > want) {
        amount.value = want;
    } else {
        amount.value = remain;
    }
    var checkcode = document.getElementById("ctl00_ContentPlaceHolder1_CHK");
    checkcode.focus();

    checkcode.onkeypress = function(e){
        if (!e) e = window.event;
        var keyCode = e.keyCode || e.which;
        if (keyCode == '13'){
            var addcart = document.getElementById("ctl00_ContentPlaceHolder1_AddShopingCart");
            var result = addcart.click();
            console.log(result);
        }
    }


}

// step 4
if (url.match(step4) !== null) {
    console.log('in step4');
    var clicked = false;
    var post = document.getElementsByName("ctl00$ContentPlaceHolder1$GET_METHOD_LIST$ctl00$GET_METHOD_RDO")[0];
    if (post != null) {
        post.click();
        //post.checked = true;
        clicked = true;
    }
    var cvs = document.getElementsByName("ctl00$ContentPlaceHolder1$GET_METHOD_LIST$ctl01$GET_METHOD_RDO")[0];
    if (cvs != null) {
        cvs.click();
        //cvs.checked = true;
        clicked = true;
    }
    var agree = document.getElementById("agreen");
    agree.click();

    var btn = document.getElementById("ctl00_ContentPlaceHolder1_NEXT_BTN");
    var clean = document.getElementById("ctl00_ContentPlaceHolder1_ibClearShoppingCart");
    if (clicked) {
        btn.click();
    }
}

// step 5
if (url.match(step5) !== null) {
    console.log('in step5');
    document.getElementById("ctl00_ContentPlaceHolder1_CARD_NUMBER1").value = "";
    document.getElementById("ctl00_ContentPlaceHolder1_CARD_NUMBER2").value = "";
    document.getElementById("ctl00_ContentPlaceHolder1_CARD_NUMBER3").value = "";
    document.getElementById("ctl00_ContentPlaceHolder1_CARD_NUMBER4").value = "";
    document.getElementById("ctl00_ContentPlaceHolder1_CVV").value = "";
    document.getElementById("ctl00_ContentPlaceHolder1_EXPIRE_MONTH").value = 0;
    document.getElementById("ctl00_ContentPlaceHolder1_EXPIRE_YEAR").value = 1234;


    if (document.getElementById("ctl00_ContentPlaceHolder1_RECEIVER_NAME")) document.getElementById("ctl00_ContentPlaceHolder1_RECEIVER_NAME").innerHTML = "萌萌噠";
    if (document.getElementById("ctl00_ContentPlaceHolder1_ADDRESS")) document.getElementById("ctl00_ContentPlaceHolder1_ADDRESS").innerHTML = "address";
    document.getElementById("ctl00_ContentPlaceHolder1_SHOPPER_NAME").innerHTML = "萌萌噠";
    document.getElementById("ctl00_ContentPlaceHolder1_SHOPPER_PHONE_MOBILE").innerHTML = "phone";
    document.getElementById("ctl00_ContentPlaceHolder1_SHOPPER_EMAIL_ADDRESS").innerHTML = "mail";
    document.getElementById("ctl00_ContentPlaceHolder1_CARD_OWNER").innerHTML = "萌萌噠";

}
