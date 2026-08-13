(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    // ===== Search functionality =====
    var searchInput = document.getElementById('kb-search');
    var articleList = document.getElementById('kb-article-list');

    if (searchInput && articleList) {
      var articles = articleList.querySelectorAll('.kb-article-item');

      searchInput.addEventListener('input', function () {
        var query = this.value.toLowerCase().trim();

        for (var i = 0; i < articles.length; i++) {
          var article = articles[i];
          var title = article.querySelector('.kb-article-title').textContent.toLowerCase();
          var tags = (article.getAttribute('data-tags') || '').toLowerCase();
          var tagLabel = article.querySelector('.kb-tag').textContent.toLowerCase();

          var match = !query ||
            title.indexOf(query) !== -1 ||
            tags.indexOf(query) !== -1 ||
            tagLabel.indexOf(query) !== -1;

          article.style.display = match ? '' : 'none';
        }
      });
    }
  });
})();
