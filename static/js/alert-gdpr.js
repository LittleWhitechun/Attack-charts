document.addEventListener("DOMContentLoaded", function(event) {

    function getCookie(name) {
        var matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    var gdprAgreed = getCookie('cookie_accepted')

    function setCookie(name, value, options) {
        options = options || {};

        var expires = options.expires;

        if (typeof expires == "number" && expires) {
            var d = new Date();
            d.setDate(d.getDate() + expires);
            expires = options.expires = d;
        }

        if (expires && expires.toUTCString) {
            options.expires = expires.toUTCString();
        }

        value = encodeURIComponent(value);

        var updatedCookie = name + "=" + value;

        for (var propName in options) {
            updatedCookie += "; " + propName;
            var propValue = options[propName];
            if (propValue !== true) {
                updatedCookie += "=" + propValue;
            }
        }

        document.cookie = updatedCookie;
    }
    if (navigator.cookieEnabled) {
        if (!gdprAgreed) {


            var gdprPopup = '<div class="gdprPopup"><div class="gdprPopupContainer"><div class="gdprMessage">'+window.lang.getText("GDPR_TEXT")+'</div><p class="gdprButton">'+window.lang.getText("GDPR_OK_BUTTON")+'</div></div></div>'

            document.querySelector('body').insertAdjacentHTML('beforeEnd', gdprPopup)



            document.querySelector('.gdprButton').onclick = function(){
                event.preventDefault();
                setCookie('cookie_accepted', true, {'expires':30});
                document.querySelector('.gdprPopup').remove();
            }

            document.querySelector('*').setAttribute('style', 'box-sizing : border-box;');

            document.querySelector('.gdprPopup').setAttribute('style', 'border : 1px solid black; background : rgba(0,0,0,.8); color : white; font-family : MuseoSans,Arial,Helvetica,sans-serif; font-size : 16px; position : fixed; left : 0; bottom : 0; width : 100%; z-index : 500; font-size : .8em; padding-bottom : .5em; padding-top : 1em;');

            document.querySelector('.gdprPopupContainer').setAttribute('style', 'width : 90%; max-width : 1030px; margin-left : auto; margin-right : auto;');

            document.querySelector('.gdprPopupContainer a').setAttribute('style', 'color : white;');

            document.querySelector('.gdprMessage').setAttribute('style', 'width : 80%; float : left; margin-bottom : .5em; padding-bottom : .5em;');

            document.querySelector('.gdprButton').setAttribute('style', 'cursor:pointer;position : relative; float : right; margin-right : -15px; width : auto; text-decoration : none; background-color : #006D5C; text-decoration : none; padding : 1.083em 1.5em; min-width : 12em; color : #FFF; font-size : .75em; border-radius : 1px; text-transform : uppercase; right : 0; top : 4px; margin-bottom : 10px;   text-align:center;transition : all .15s ease-in;box-sizing: border-box;');

            document.querySelector('.gdprButton').onmouseover = function(){
                this.style.background = '#005446'
            };

            document.querySelector('.gdprButton').onmouseout = function(){
                this.style.background = '#006D5C'
            };

            window.onresize = function() {
                var w = window.innerWidth;
                if(w < 655) {

                    document.querySelector('.gdprMessage').style.width = '100%';
                    document.querySelector('.gdprButton').style.marginRight = '0';
                    document.querySelector('.gdprButton').style.width = '100%';

                }

                else {

                    document.querySelector('.gdprMessage').style.width = '80%';
                    document.querySelector('.gdprMessage').style.cssFloat = 'left';
                    document.querySelector('.gdprButton').style.marginRight ='-15px';
                    document.querySelector('.gdprButton').style.width = 'auto';

                }
            }
        };
    }
})