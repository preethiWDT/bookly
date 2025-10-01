document.addEventListener("DOMContentLoaded", function () {
  const iconMap = {
    "camcorder": "fa-video",
    "terminal": "fa-terminal",
    "rocket": "fa-rocket",
    "settings": "fa-cog",
    "book": "fa-book",
    "api": "fa-code",
    "code": "fa-file-code",
    "image": "fa-image",
    "video": "fa-video",
    "cart": "fa-shopping-cart",
    "search": "fa-magnifying-glass",
    "wishlist": "fa-heart",
    "filter": "fa-sliders",
    "bars": "fa-bars",
    "header": "fa-heading",
    "id-card-clip": "fa-id-card",
    "layer-minus": "fa-layer-group"
  };

  document.querySelectorAll(".summary a").forEach(link => {
    const href = link.getAttribute("href");
    const iconKey = href.replace(".html", "").toLowerCase();
    const faIcon = iconMap[iconKey];
    if (faIcon) {
      link.innerHTML = `<i class="fa-solid ${faIcon}"></i> ` + link.innerHTML;
    }
  });

  document.querySelectorAll(".markdown-section h1, .markdown-section h2").forEach(heading => {
    const text = heading.textContent.toLowerCase();
    for (const key in iconMap) {
      if (text.includes(key)) {
        heading.innerHTML = `<i class="fa-solid ${iconMap[key]}"></i> ` + heading.innerHTML;
        break;
      }
    }
  });
});
