(function () {
    function d(b) {
        var a = document.createElement("script");
        a.type = "text/javascript";
        a.async = !0;
        a.src = ("https:" == location.protocol ? "https://" : "http://") + "cjs.ptengine.com/" + b + ".js";
        b = document.getElementsByTagName("script")[0];
        b.parentNode.insertBefore(a, b);
        a.onerror = function () {
            var a = document.createElement("script");
            a.type = "text/javascript";
            a.async = !0;
            a.src = ("https:" == location.protocol ? "https://" : "http://") + "cjs.ptengine.com/ptb.js";
            var b = document.getElementsByTagName("script")[0];
            b.parentNode.insertBefore(a,
                b)
        }
    }

    if (!window.limit_js_flag) {
        if (!window._pt_lt || window._pt_lt > (new Date).getTime())window._pt_lt = (new Date).getTime();
        var a = window._pt_sp_2 ? window._pt_sp_2 : window._pt_pe ? window._pt_pe : "";
        if (a) {
            var b = a.join("");
            if (!(b.indexOf("setAccount") < 0 && b.indexOf("setSID") < 0)) {
                for (var c = b = 0; c < a.length; c++)if (b = a[c].indexOf(","), b > 0 && (a[c].slice(0, b) == "setAccount" || a[c].slice(0, b) == "setSID")) {
                    d(a[c].slice(b + 1));
                    break
                }
                window.limit_js_flag = !0
            }
        }
    }
})();