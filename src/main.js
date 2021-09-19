let $lastList = $(".main").find(".last");
simplify = function (x) {
  return x
    .replace("http://", "")
    .replace("https://", "")
    .replace("www.", "")
    .replace(/\/.*/, "");
};
const yy = localStorage.getItem("xx");
const yyObject = JSON.parse(yy);
let hashMap = yyObject || [
  { url: "https://xiedaimala.com" },
  { url: "https://bilibili.com" },
  { url: "https://baidu.com" },
  { url: "https://qq.com" },
];
const render = () => {
  $(".main").find("li:not(.last)").remove();
  hashMap.forEach((node, index) => {
    let url = node.url;
    let link = simplify(url);
    let connection = link.replace(".", "");

    let $li = $(`<li class="content">
      <div class="container">
      <div class="close"><svg class="icon-x" >
      <use xlink:href="#icon-close"></use>
      </svg></div>
        <div class="png-A">
          <div class="image">
           <img id="${connection}" src="https://${link}/favicon.ico" />
          </div>
        </div>
        <span>${link}</span>
      </div>
  </li>`).insertBefore($lastList);
    $li.on("click", () => {
      window.open(url);
    });
    $li.on("click", ".close", (e) => {
      e.stopPropagation();
      hashMap.splice(index, 1);
      render();
    });
    let img = document.getElementById(connection);
    img.onerror = function () {
      onerror = null;
      img.innerHTML = `${link[0]}`;
      img.src = "../save.ab2638ae.png";
      console.clear();
    };
  });
};
render();
$(".icon-a").on("click", () => {
  let hh = window.prompt("请输入要收藏的网站网址");
  function ff(url) {
    if (url.indexOf("http"||"https") === -1) {
      return "https://" + url;
    } else {
      return url;
    }
  }
  let url = ff(hh);
  hashMap.push({ url: url });
  render();
});
window.onbeforeunload = () => {
  const string = JSON.stringify(hashMap);
  localStorage.setItem("xx", string);
};
let $big = $(".background-image");
if (document.body.clientWidth > 500) {
  $big.attr("src", "../image/save.png");
}
