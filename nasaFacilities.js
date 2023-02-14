var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        listentoButton(xhttp.responseXML);
    }
};
xhttp.open("GET", "nasaFacilities.xml", true);
xhttp.send(); 

function showResult(xml, value) {
    var txt = "";
    var array= [ "/rows/row/center",
    "/rows/row/center",
    "/rows/row/center",
    "/rows/row/center"
    ];
    path = array[value];
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt += result.childNodes[0].nodeValue + "<br>";
            result = nodes.iterateNext();
        } 
    // Code For Internet Explorer
    } else if (window.ActiveXObject || xhttp.responseType == "msxml-document") {
        xml.setProperty("SelectionLanguage", "XPath");
        nodes = xml.selectNodes(path);
        for (i = 0; i < nodes.length; i++) {
            txt += nodes[i].childNodes[0].nodeValue + "<br>";
        }
    }
    document.getElementById("demo").innerHTML = txt;
}

function listentoButton(v){
    showResult(xhttp.responseXML,v);
}