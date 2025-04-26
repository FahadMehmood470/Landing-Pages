document.getElementById("openSearchStrip").addEventListener("click", function () {
    document.getElementById("searchStrip").classList.remove("d-none");
});

document.getElementById("closeSearchStrip").addEventListener("click", function () {
    document.getElementById("searchStrip").classList.add("d-none");
});
