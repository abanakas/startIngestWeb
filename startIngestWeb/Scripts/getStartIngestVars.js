window.onload = function () {
    var sourceName = localStorage.getItem("sName");
    var sourcePath = localStorage.getItem("sPath");
    document.getElementById("sName").innerHTML = sourceName;
    document.getElementById("sPath").innerHTML = sourcePath;
    console.log("start");
}