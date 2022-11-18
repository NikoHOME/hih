
function changeToDark()
{
    $('.edit').each(function(i, el) {
        var classList = $(el).attr("class")
        var classArr = classList.split(/\s+/);
        classArr[0]=classArr[0]+"-dark";
        $(el).removeClass();
        for(const i in classArr)
        {
            $(el).addClass(classArr[i]);
        }
        $('#modeImg').attr('src', 'img/moon.png');
    });
}

function changeToLight()
{
    $('.edit').each(function(i, el) {
        var classList = $(el).attr("class")
        var classArr = classList.split(/\s+/);
        classArr[0]=classArr[0].slice(0,-5);
        $(el).removeClass();
        for(const i in classArr)
        {
            $(el).addClass(classArr[i]);
        }
        $('#modeImg').attr('src', 'img/sun.png');
    });
}

function manageModes()
{
    if(window.localStorage)
    {
        if(window.localStorage.isDark=="true")
        {
            if(checkMode($('body'))) changeToLight();
            window.localStorage.isDark="false";
        }
        else
        {
            if(!checkMode($('body'))) changeToDark();
            window.localStorage.isDark="true";
        }
    }

}

function checkMode(el)
{
    var classList = $(el).attr("class")
    var classArr = classList.split(/\s+/);  
    if(classArr[0]=="body") return false;
    else return true;
}


function onLoad()
{
    if(window.localStorage)
    {

        if(window.localStorage.isDark=="true") 
        {
            changeToDark();
            if( !($( "#checkBox" ).is(":checked")))  
            {
                document.getElementById('checkBox').click();
                window.localStorage.isDark="true";
                changeToDark();
            }
        }
        else
        {
            if( ($( "#checkBox" ).is(":checked"))) 
            {
                document.getElementById('checkBox').click();
                window.localStorage.isDark="false";
                changeToLight();
            }
        }
    }
}
