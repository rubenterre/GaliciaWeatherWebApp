function load_moon_phases(obj,callback){
    var gets=[]
    for (var i in obj){
        gets.push(i + "=" +encodeURIComponent(obj[i]))
    }
    gets.push("LDZ=" + new Date(obj.year,obj.month-1,1) / 1000)
    var xmlhttp = new XMLHttpRequest()
    var url = "https://www.icalendar37.net/lunar/api/?" + gets.join("&")
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            callback(JSON.parse(xmlhttp.responseText))
        }
    }
    xmlhttp.open("GET", url, true)
    xmlhttp.send()
}


function example_2(moon){     
    var phMax = []
    for (var nDay in moon.phase){
        if (moon.phase[nDay].isPhaseLimit){
            phMax.push(
                '<div>' +
                '<span>' + nDay + '</span>' +
                moon.phase[nDay].svg  +
                '<div>' + moon.phase[nDay].phaseName  + '</div>' +
                '</div>' 
            ) 
        }
    }
    var width = 100 / phMax.length
    var html = "<b>" + "Fases lunares deste mes" + "</b>"
    phMax.forEach(function(element){
        html += '<div style="width:'+width+'%">' + element + '</div>' 
    })
    document.getElementById("ex2").innerHTML = html
}   
var configMoon = {
    lang  		:'es', 
    month 		:new Date().getMonth() + 1,
    year  		:new Date().getFullYear(),
    size		:"100%", 
    lightColor	:"rgb(255,255,230)", 
    shadeColor	:"transparent", 
    texturize	:true, 
}
load_moon_phases(configMoon,example_2)