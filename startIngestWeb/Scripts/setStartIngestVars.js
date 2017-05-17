function getIngestData() {
    var sourceName = document.getElementById("sName").value;
    var sourcePath = document.getElementById("sPath").value;
    localStorage.setItem("sName", sourceName);
    localStorage.setItem("sPath", sourcePath);
}