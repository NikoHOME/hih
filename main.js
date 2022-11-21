

function manageModes()
{
    if(window.sessionStorage.isDark=="true")
    {
        swapCSS(true);
        window.sessionStorage.isDark="false";
    }
    else
    {
        swapCSS(false);
        window.sessionStorage.isDark="true";
    }

}






$(window).on('load',function() {

    
    if(window.sessionStorage.isDark=="true") 
    {
        if( !($( "#checkBox1" ).is(":checked")) || !($( "#checkBox2" ).is(":checked")))  
        {
            $("#checkBox1").prop('checked', 'checked');
            $("#checkBox2").prop('checked', 'checked');
            window.sessionStorage.isDark="true";
            swapCSS(false);

        }
        else
        {
            swapCSS(false);
        }
    }
    else
    {
        if( ($( "#checkBox1" ).is(":checked")) || ($( "#checkBox2" ).is(":checked"))) 
        {
            $("#checkBox1").removeAttr('checked');
            $("#checkBox2").removeAttr('checked');
            window.sessionStorage.isDark="false";
            swapCSS(true);
        }
    }
});


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
        $('#modeImg1').attr('src', 'img/sun.png');
        $('#modeImg2').attr('src', 'img/sun.png');
        $("#checkBox1").removeAttr('checked');
        $("#checkBox2").removeAttr('checked');
    }
    else 
    {
        jqrStyle.attr('href', "css/custom-dark.css");
        cssStyle.attr('href', "css/style-dark.css");
        jqrStyle.attr('id', "jqrLight");
        cssStyle.attr('id', "cssLight");
        $('#modeImg1').attr('src', 'img/moon.png');
        $('#modeImg2').attr('src', 'img/moon.png');
        $("#checkBox1").prop('checked', 'checked');
        $("#checkBox2").prop('checked', 'checked');
    }
}