
function() {
    let exemple1 = {
        init: function() {
            window.addEventListener('load, function(event') {
                event.preventDefault ? event.preventDefault() : event.returnValue = false;
                let xmlhttp = new XMLHttpRequest();
                xmlhttp.addEventListener('readystatechange' , function(event)) {
                    if (htmlhttp.readystate == 4) {
                        if (xmlhttp.status == '200') {
                           let div = document.getElementById('result');
                           div.innerHTML = xmlhttp.responseText;
                        }
                    }
                };
                xmlhttp.open('get, element.href, true');
                xmlhttp.send();
            }
        }
    }
}
exemple.init();