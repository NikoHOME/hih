

function manageModes()
{
    if(window.localStorage.isDark=="true")
    {
        swapCSS(true);
        window.localStorage.isDark="false";
    }
    else
    {
        swapCSS(false);
        window.localStorage.isDark="true";
    }

}




function onLoad()
{
    if(window.localStorage.isDark=="true") 
    {
        if( !($( "#checkBox" ).is(":checked")))  
        {
            document.getElementById('checkBox').click();
            window.localStorage.isDark="true";
            swapCSS(false);

        }
    }
    else
    {
        if( ($( "#checkBox" ).is(":checked"))) 
        {
            document.getElementById('checkBox').click();
            window.localStorage.isDark="false";
            swapCSS(true);
        }
    }

}


function swapCSS(cond)
{
    var jqrStyle = $("[id^=jqr]");
    var cssStyle = $("[id^=css]");
    if(cond==true) 
    {
        jqrStyle.attr('href', "css/custom-light.css");
        cssStyle.attr('href', "css/style-light.css");
        jqrStyle.attr('id', "jqrDark");
        cssStyle.attr('id', "cssDark");
        $('#modeImg').attr('src', 'img/sun.png');
    }
    else 
    {
        jqrStyle.attr('href', "css/custom-dark.css");
        cssStyle.attr('href', "css/style-dark.css");
        jqrStyle.attr('id', "jqrLight");
        cssStyle.attr('id', "cssLight");
        $('#modeImg').attr('src', 'img/moon.png');
    }
}