window.onload = function() {
    var form = document.getElementById("courseform");
    form.childNodes.forEach(function(element) {
        if(element.nodeName == "INPUT") {
            element.addEventListener("click", function() {
                document.getElementById("register__body2").style.visibility = "visible"
            });
        }
    });
}