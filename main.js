//  3:04 PM 8/27/2019
//  Build main page

//  Build main map
    //  works as of 4:09 PM 8/27/2019
//  Build mini map

//  Build HP MAG bars

//  Build movement logic >> move to logic.js

var xy = [0,0];
var i = 0;
var j = 0;
var n = 0;


function buildMain() {
    for (i = 0; i < 12; i++) {
        mapCell = $("<div>");
        xy = [i,j];
        mapCell.addClass("mapcell col-md-1")
        mapCell.attr("coordinates",xy[i,j]);
        mapCell.attr("float","left");
        mapCell.css("background-image",'url(https://tinyurl.com/y5q7gcap)');
        mapCell.css("background-size",'contain');
        mapCell.text(xy);
        $("#mainMap"+n).append(mapCell);
        
    }
    console.log(mapCell)
    if (j < 11 && i == 12) {
        j++;
        n++;
        mapRow = $("<div>");
        mapRow.addClass("row");
        mapRow.attr("Id","mainMap"+n);
        $("#cont").append(mapRow);
        i = 0;
        buildMain();
    }
}

