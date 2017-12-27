var song_el = document.getElementById('song')

function update_song() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var repsonse = JSON.parse(xhttp.responseText);
            console.log(repsonse.recenttracks.track[0]);
            var last = repsonse.recenttracks.track[0];
            console.log(last.name + ' - ' + last.artist["#text"]);
            song_el.innerHTML = last.name + ' - ' + last.artist["#text"];
            setTimeout(scroll, 2000)
        }
    };
    xhttp.open("GET", "http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=PimMeul&api_key=fdc8d508091ce85d3d4867a4178b3105&format=json", true);
    xhttp.send();
}

function scroll() { 
    if (checkOverflow(song_el)) {
         song_el.innerHTML = song_el.innerHTML.substring(1);
        setTimeout(scroll, 200)
    } else {
        setTimeout(update_song, 2000);
    }
    return true

}


function checkOverflow(el) {
    //https://stackoverflow.com/questions/143815/determine-if-an-html-elements-content-overflows
    var curOverflow = el.style.overflow;
    if (!curOverflow || curOverflow === "visible")
        el.style.overflow = "hidden";
    var isOverflowing = el.clientWidth < el.scrollWidth ||
        el.clientHeight < el.scrollHeight;
    el.style.overflow = curOverflow;
    return isOverflowing;
}

update_song()