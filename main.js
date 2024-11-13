let Welcome = 'HELLO GUYS WELCOME TO MY WEBSITE'
alert(`${Welcome}`,)

function redirGithub() {
    window.location.href = "https://github.com/Winnss"
};

function redirInstagram() {
    window.location.href = "https://instagram.com/xyyypn"
};

function redirTiktok() {
    window.location.href = "https://tiktok.com/@x_winns"
};

function redirSpotify() {
    window.location.href = "https://open.spotify.com/search/xyyypn/users"
};

function redirSaluran() {
    window.location.href = "https://whatsapp.com/channel/0029Vamo1tF4o7qN44yTvh1J"
};

document.oncontextmenu = function () {
            alert("mau ngapain lu jing");
            return false;
}


var aText = new Array(
    "HELLO I'AM IRFAN MUBAROK AULIA",
    );
    var iSpeed = 100;
    var iIndex = 0; 
    var iArrLength = aText[0].length; 
    var iScrollAt = 20; 
     
    var iTextPos = 0; 
    var sContents = ''; 
    var iRow; 
     
    function typewriter()
    {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination = document.getElementById("typedtext");
     
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + " ﷼";
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 500);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }
    }
    
    
    typewriter();
