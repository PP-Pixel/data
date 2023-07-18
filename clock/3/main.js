function clock()
{
    var weeks = new Array("Sun","Mon","Tue","Wed","Thu","Fri","Sat");
    var now = new Date();
    var y = now.getFullYear();
    var mo = now.getMonth() + 1;
    var d = now.getDate();
    var w = weeks[now.getDay()];
    var h = now.getHours();
    var mi = now.getMinutes();
    var s = now.getSeconds();

    if (mo < 10) mo = "0" + mo;
    if (d < 10) d = "0" + d;
    if (mi < 10) mi = "0" + mi;
    if (s < 10) s = "0" + s;

    document.getElementById("clock_date").innerHTML =  y + "/" + mo + "/" + d + " (" + w + ")";
    document.getElementById("clock_time").innerHTML = h + ":" + mi + ":" + s;
    document.getElementById("clock_frame").style.fontSize =  window.innerWidth / 10 + "px";
}

setInterval(clock, 1000);

var STRAGE_KEY = "bg_color";

/*ローカルストレージから抽出*/

function getStrage(){
    let ret =localStorage.getItem(STRAGE_KEY);

    if(ret !== null){
        return ret;
    }
        else{
            return "white";
        }
}

/*ローカルストレージに保存*/
function setStorage(bg_color){
    localStorage.setItem(STRAGE_KEY, bg_color);
}


/*背景色を変更する*/
function setColor(bg_color){
    document.querySelector("body").style.backgroundColor = bg_color;
    setStorage(bg_color);

    /*文字色処理*/
    var r = parseInt( bg_color.substr( 1, 2 ), 16 ) ;
	var g = parseInt( bg_color.substr( 3, 2 ), 16 ) ;
	var b = parseInt( bg_color.substr( 5, 2 ), 16 ) ;

	let txt_color = 'black';
    if ((r * 0.299 + g * 0.587 + b * 0.114) < 186) {
        txt_color = 'white';
    }
    document.querySelector("div#clock_frame").style.color = txt_color;
    console.log(txt_color);
}


/*ローカルストレージのデータチェック*/
window.onload = function(){
    let bg_color = getStrage();
    setColor(bg_color);
}

/*window.addEventListener('DOMContentLoaded', function(){
    // input要素を取得
        document.getElementById("input_color").addEventListener("click",function(){
            let bg_color =document.getElementById("input_color").value;
            setColor(bg_color);
            console.log(bg_color);
    });
});*/

function setActiveStyleSheet(bg_color){
    setColor(bg_color);
    console.log(bg_color);
}
