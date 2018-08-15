
// console.log(document.getElementById("app").getElementsByClassName("product-img")[0].getElementsByTagName("img")[0].src)
// http://seoul-p-studio.bunjang.net/product/84909339_1_1527401862_w194.jpg

// console.log(document.getElementById("app").getElementsByTagName("img")[0].src)
// http://seoul-p-studio.bunjang.net/product/84909339_1_1527401862_w194.jpg


// document.getElementById("app").getElementsByClassName("product")[0].innerHTML




var app = document.getElementById("app");
//console.log("app = " + app);
//console.log("app.innerHTML = " + app.innerHTML);
// [object HTMLDivElement] 可以用 innerHTML

var products = app.getElementsByClassName("product");
console.log("products: " + products);
console.log("products.length: " + products.length); // 0
// [object HTMLCollection]
console.log("product: " + product[0]);




//document.body.innerHTML = document.body.innerHTML.replace(new RegExp("000", "g"), "-111-");
//console.log("data = " + document.body);

/*
var elements = document.getElementsByTagName('*');

console.log(elements);

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    //console.log("element = " + element);exit;
    // element = [object HTMLHtmlElement]

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];
	//console.log("node= " + node);exit;
	// node= [object HTMLHeadElement]

        if (node.nodeType === 3) {
            var text = node.nodeValue;
	    console.log("text = " + text);
	    console.log("node.nodeValue = " + node.nodeValue); exit;

            var replacedText = text.replace(/[word or phrase to replace here]/gi, '[new word or phrase]');
	    console.log("replacedText = " + replacedText);

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
	
    }
}

*/
