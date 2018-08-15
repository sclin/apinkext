// this is the code which will be injected into a given page...

String.prototype.replaceArray = function(find, replace) {
  var replaceString = this;
  var regex; 
  for (var i = 0; i < find.length; i++) {
    regex = new RegExp(find[i], "g");
    replaceString = replaceString.replace(regex, replace[i]);
  }
  return replaceString;
};


(function() {

    // just place a div at top right
    var div = document.createElement('div');
    div.style.position = 'fixed';
    div.style.top = 0;
    div.style.right = 0;
    div.textContent = 'bungang!';
    document.body.appendChild(div);
    //alert('inserted self... giggity');

    var app = document.getElementById("app");
    //console.log("app = " + app);
    //console.log("app.innerHTML = " + app.innerHTML);
    // [object HTMLDivElement] 可以用 innerHTML

    var url = document.URL;
    //console.log("url = " + url);



    if (url.match("http://m.bunjang.co.kr") !== null) {

        var app = document.getElementById("app");
        //console.log("app = " + app);
        //console.log("app.innerHTML = " + app.innerHTML);
        // [object HTMLDivElement] 可以用 innerHTML

        // [ listing page ]
    
        if (url.match("http://m.bunjang.co.kr/search/products") !== null) {
    
            var products = app.getElementsByClassName("product");
            //console.log("products: " + products);
            //console.log("products.length: " + products.length); // 83
            // [object HTMLCollection]
        
            var i = 0;
            for (var i = 0; i < products.length; i++) {
                var product = products[i];
        
                var productimg = product.getElementsByClassName("product-img")[0];
                var img = product.getElementsByTagName("img")[0];
        	//console.log("img.src = " + img.src);
                var pid = img.src.substring(img.src.lastIndexOf("/") + 1, img.src.indexOf("_"));
        	//console.log("pid = " + pid);
        	// link: http://m.bunjang.co.kr/products/83523089
        	var link = "http://m.bunjang.co.kr/products/" + pid;
        
        
        	var time = product.getElementsByClassName("time")[0];
        	//time.setAttribute("style", "");
        	//console.log("before time = " + time.innerHTML);
        	time.innerHTML = time.innerHTML.replace(/전/g, "前");
        	time.innerHTML = time.innerHTML.replace(/분/g, "分");
        	time.innerHTML = time.innerHTML.replace(/시간/g, "小時");
        	time.innerHTML = time.innerHTML.replace(/일/g, "天");
        	time.innerHTML = time.innerHTML.replace(/달/g, "個月");
        	//console.log("after time = " + time.innerHTML);
        
        	var ad = product.getElementsByClassName("product-ad")[0];
        	ad.innerHTML = time.innerHTML;
        
        	productimg.innerHTML = "<img src='" + img.src + "'>";
        	product.innerHTML = "<a href='" + link + "' target='_blank'>" + product.innerHTML + "</a>";
                //console.log("product: " + product.innerHTML);
        	
            }
        }
    
    
    
        // [ item page ]
    
        if (url.match("http://m.bunjang.co.kr/products") !== null) {
    
            var seller_products = app.getElementsByClassName("seller-products")[0];
            //console.log("seller_products.innerHTML = " + seller_products.innerHTML);
            var small_products = seller_products.getElementsByClassName("small-product");
            //console.log("small_products.innerHTML = " + small_products.innerHTML);
            var i = 0;
            for (var i = 0; i < small_products.length; i++) {
                var small_product = small_products[i];
                //console.log("small_product.innerHTML = " + small_product.innerHTML);
                var img = small_product.getElementsByTagName("img")[0];
                //console.log("img.src = " + img.src);
                var pid = img.src.substring(img.src.lastIndexOf("/") + 1, img.src.indexOf("_"));
                //console.log("pid = " + pid);
                var link = "http://m.bunjang.co.kr/products/" + pid;
                //console.log("link = " + link);
                small_product.innerHTML = "<a href='" + link + "'>" + small_product.innerHTML + "</a>";
            }

	    var product_relation = app.getElementsByClassName("product-relation")[0];
            //console.log("product_relation.innerHTML = " + product_relation.innerHTML);
            var simple_products = product_relation.getElementsByClassName("simple-product");
            //console.log("simple_products.innerHTML = " + simple_products.innerHTML);
            //console.log("simple_products.length = " + simple_products.length);
            var i = 0;
            for (var i = 0; i < simple_products.length; i++) {
                var simple_product = simple_products[i];
                //console.log("simple_product.innerHTML = " + simple_product.innerHTML);
                var img = simple_product.getElementsByTagName("img")[0];
                //console.log("img.src = " + img.src);
                var pid = img.src.substring(img.src.lastIndexOf("/") + 1, img.src.indexOf("_"));
                //console.log("pid = " + pid);
                var link = "http://m.bunjang.co.kr/products/" + pid;
                //console.log("link = " + link);
                simple_product.innerHTML = "<a href='" + link + "'>" + simple_product.innerHTML + "</a>";
            }

            var texttime = app.getElementsByClassName("text-time")[0];
            texttime.innerHTML = texttime.innerHTML.replace(/전/g, "前");
            texttime.innerHTML = texttime.innerHTML.replace(/분/g, "分");
            texttime.innerHTML = texttime.innerHTML.replace(/시간/g, "小時");
            texttime.innerHTML = texttime.innerHTML.replace(/일/g, "天");
            texttime.innerHTML = texttime.innerHTML.replace(/달/g, "個月");
        
        /*
            var status = app.getElementsByClassName("status")[0];
            status.innerHTML = status.innerHTML.replace(/상품상태/g, "商品狀態");
            status.innerHTML = status.innerHTML.replace(/새상품/g, "全新");
            status.innerHTML = status.innerHTML.replace(/중고/g, "使用");
            var exchange = app.getElementsByClassName("exchange")[0];
            exchange.innerHTML = exchange.innerHTML.replace(/교환여부/g, "是否交換");
            exchange.innerHTML = exchange.innerHTML.replace(/교환불가능/g, "不可交換");
            var shipping = app.getElementsByClassName("shipping")[0];
            shipping.innerHTML = shipping.innerHTML.replace(/무료배송/g, "免運費");
            shipping.innerHTML = shipping.innerHTML.replace(/배송비/g, "運費");
            shipping.innerHTML = shipping.innerHTML.replace(/별도/g, "不包含");
            var location = app.getElementsByClassName("location")[0];
            location.innerHTML = location.innerHTML.replace(/거래지역/g, "交易區");
            location.innerHTML = location.innerHTML.replace(/전국/g, "全國");
        */
        }
    }



    //console.log(document.body.innerHTML);


    // global
    var shipping_kr = ["상품상태", "새상품", "중고", "교환여부", "교환불가능", "무료배송", "배송비", "별도", "미포함", "거래지역", "전국", "무료입니다"];
    var shipping_tw = ["商品狀態", "全新", "使用", "是否交換", "不可交換", "免運費", "運費", "不包含", "沒有", "交易區", "全國", "免費的"];
    document.body.innerHTML = document.body.innerHTML.replaceArray(shipping_kr, shipping_tw);
    var name_kr = ["에이핑크", "초롱", "보미", "은지", "나은", "남주", "하영", "판다", "멤버", "개인"];
    var name_tw = ["Apink", "初瓏", "普美", "恩地", "娜恩", "南珠", "夏榮", "PANDA", "成員", "個人"];
    document.body.innerHTML = document.body.innerHTML.replaceArray(name_kr, name_tw);
    var album_kr = ["버젼", "일본", "특전화일", "미니", "정규", "집 ", "앨범", "하늘바라기", "시크릿가든", "핑크메모리", "노노노", "기적같은이야기", "핑크스토리즈", "오리온", "섬머타임", "もっと", "고고", "핑크업", "핑크시즌", "러브", "브뉴데", "미스터츄", "선데이", "먼데이", "마이마이"];
    var album_tw = ["版本", "日本", "特典", "迷你", "正規", "輯 ", "專輯", "Hopefully Sky", "Secret Garden", "Pink Memory", "NoNoNo", "奇蹟般的故事", "Pink Stories", "獵戶座Orion", "Summer Time", "Motto", "GoGo!", "Pink UP", "Pink Season", "LUV", "BND", "Mr.Chu", "Sunday", "Monday", "MyMy"];
    document.body.innerHTML = document.body.innerHTML.replaceArray(album_kr, album_tw);
    var concert_kr = ["소문난", "공주", "팬미팅", "콘서트", "핑크파티", "핑크스페이스", "스페이스", "핑크시네마"];
    var concert_tw = ["知名的", "公主", "見面會", "演唱會", "Pink Party", "Pink Space", "Space", "Pink Cinema"];
    document.body.innerHTML = document.body.innerHTML.replaceArray(concert_kr, concert_tw);
    var item_kr = ["친필싸인", "증명사진", "책갈피", "포카", "포스터", "빅타올", "시즌그린팅입니다", "포토북", "아이디카드", "특전카드", "포토세트", "마그넷", "노트", "지폐", "시즌그리팅", "아크릴", "등신대", "사진", "텀블러", "바인더", "포토카드", "스티커", "전신", "상반신", "네임택", "브로마이드"];
    var item_tw = ["親筆簽名", "証件照", "書籤", "小卡", "海報", "大毛巾", "年曆", "寫真書", "身份証", "特典小卡", "照片組", "磁鐵", "筆記本", "紙鈔", "季節問候", "壓克力", "立牌", "照片", "水杯", "活頁夾", "照片卡", "貼紙", "全身", "半身", "姓名條", "海報"];
    document.body.innerHTML = document.body.innerHTML.replaceArray(item_kr, item_tw);
    var post_kr = ["우체국", "우편물", "소포", "등기", "택배", "우편료", "우편", "직거래", "번톡주세요"];
    var post_tw = ["郵局", "信件", "包裹", "掛號", "宅配", "郵資", "平信", "直接交易", "請beontok"];
    document.body.innerHTML = document.body.innerHTML.replaceArray(post_kr, post_tw);
    var sell_kr = ["삽니다", "판매완료", "0원 ", "기 ", "건대", "팝업스토어", "개당", "굿즈", "일괄", "구매시", "제외", "팝니다", "한정판"];
    var sell_tw = ["買入", "銷售完成", "0韓元", "期 ", "建國大學", "POP-UP Store", "每個", "商品", "批量", "購買", "除了", "出售", "限量版"];
    document.body.innerHTML = document.body.innerHTML.replaceArray(sell_kr, sell_tw);


    //return;


})();
