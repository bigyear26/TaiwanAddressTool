/**
 * Created by HarryYang on 16/4/6.
 */

/**
 * Created by HarryYang on 16/4/1.
 */

var i;
var split;

function trans() {
    i = 0;
    $("#target").val("");
    var content = $("#source").val();
    split = content.split("\n");
    delayedLoop();
}

function delayedLoop() {
    addressToLatLng(split[i]);
    if (++i == split.length) {
        return;
    }
    window.setTimeout(delayedLoop, 1000);
}


function trans1() {
    i = 0;
    $("#target1").val("");
    var content = $("#source").val();
    split = content.split("\n");
    delayedLoop1();
}

function delayedLoop1() {
    addressToLatLng1(split[i]);
    if (++i == split.length) {
        return;
    }
    window.setTimeout(delayedLoop1, 1000);
}





function addressToLatLng(addr) {
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({
        "address": addr
    }, function (results, status) {
        if ($("#c").attr('checked'))
        {
            addr = addr + "=";
        }
        else {
            addr = "";
        }
        if (status == google.maps.GeocoderStatus.OK) {
            var content = $("#target").val();
            $("#target").val(content + addr + results[0].geometry.location.lng() + "\n");
        } else {
            var content = $("#target").val();
            $("#target").val(content + addr + "查無經度" + "\n");
        }
    });
}
function addressToLatLng1(addr) {
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({
        "address": addr
    }, function (results, status) {
        if ($("#c").attr('checked'))
        {
            addr = addr + "=";
        }
        else {
            addr = "";
        }
        if (status == google.maps.GeocoderStatus.OK) {
            var content = $("#target1").val();
            $("#target1").val(content + addr + results[0].geometry.location.lat() + "\n");
        } else {
            var content = $("#target1").val();
            $("#target1").val(content + addr + "查無緯度" + "\n");
        }
    });
}