export function itemTitleMaker(title, type) {
  let itemType = "";
  if (type === "movie") {
    itemType = "فیلم";
  } else if (type === "series") {
    itemType = "سریال";
  }
  if (title === "") {
    document.title = "نماوا";
  } else {
    document.title = `${itemType} ${title} | نماوا`;
  }
}

export function pageTitleMaker(title) {
  document.title = ` ${title} - نماوا`;
}
