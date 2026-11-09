/* Instant filtering: three fields combined with AND.
   - 搜尋酒款： wine name only
   - 搜尋地點與人物： wine name + note body + tags (any hit)
   - 產區： region text
*/
(function () {
  var nameInput = document.getElementById("searchName");
  var tagsInput = document.getElementById("searchTags");
  var regionInput = document.getElementById("searchRegion");
  var list = document.getElementById("wineList");
  var cards = Array.prototype.slice.call(list.getElementsByClassName("wine"));
  var count = document.getElementById("count");
  var empty = document.getElementById("empty");
  var total = cards.length;

  function norm(s) {
    return (s || "").trim().toLowerCase();
  }

  function filter() {
    var qName = norm(nameInput.value);
    var qTags = norm(tagsInput.value);
    var qRegion = norm(regionInput.value);
    var shown = 0;
    for (var i = 0; i < cards.length; i++) {
      var card = cards[i];
      var okName = !qName || card.dataset.name.indexOf(qName) !== -1;
      var okTags = !qTags || card.dataset.all.indexOf(qTags) !== -1;
      var okRegion =
        !qRegion || card.dataset.region.toLowerCase().indexOf(qRegion) !== -1;
      var show = okName && okTags && okRegion;
      card.style.display = show ? "" : "none";
      if (show) shown++;
    }
    count.textContent = "顯示 " + shown + " 款";
    empty.hidden = shown !== 0;
  }

  [nameInput, tagsInput, regionInput].forEach(function (input) {
    input.addEventListener("input", filter);
  });
  count.textContent = "顯示 " + total + " 款";
})();
