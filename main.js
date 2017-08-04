let links = 
["https://s-media-cache-ak0.pinimg.com/736x/89/4d/87/894d8721ce40e52a59d94dab16d1fb57--outline-drawings-girl-outline-drawing.jpg",

"https://s-media-cache-ak0.pinimg.com/736x/28/4a/a1/284aa18d1552c3d8676e3a46f49996e9--black-and-white-drawings-of-people-black-and-white-girls-drawing.jpg",

"https://s-media-cache-ak0.pinimg.com/736x/79/77/5d/79775dd8b435788b20460a9d2dee13e4--girl-tumbler-white-girls.jpg",

"https://i.pinimg.com/736x/e4/96/f0/e496f09be758ce8d6bddaacf85dbe803--outline-drawings-girl-drawings.jpg",

"https://s-media-cache-ak0.pinimg.com/736x/d2/bb/d6/d2bbd6c1f5022331d4d3df32ccaec57a--tumblr-outlines-girls-tumblr-outlines-drawing.jpg"
];

let titles = ["Nail polish", "Wassup", "CK","Godvibes","Coffee"]
let index = 0;
let autoplay = false;

function prevPic() {
  console.log("prevPic: " - index);
  let img = document.getElementById("pic");
  index--;
  img.src = links[index % links.length];
}
function nextPic() {
  console.log("nextPic: " + index);
  let img = document.getElementById("pic");
  index++;
  img.src = links[index % links.length];
  let title = document.getElementById("title");
  title.innerHTML = titles[index % links.length];
  console.log(title);
  
  if(autoplay) {
    setTimeout(nextPic, 3000);
  }
}

  if(autoplay) {
    setTimeout(nextPic, 3000);
}
