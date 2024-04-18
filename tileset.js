function constructTileSet() {
  let tileCount = 0;
  const main = document.createElement("main");
  document.body.appendChild(main);
  for (iv = 1; iv <= tileSetHeight; iv++) {
    for (ih = 1; ih <= tileSetWidth; ih++) {
      tileCount++;
      tileCreation("tile" + tileCount, ih, iv);
    }
  }
  tileSetResize();
}
function tileCreation(tileId, xIndex, yIndex) {
//   let myPlace = document.getElementsByTagName('main');
  let tile = document.createElement("div");
  tile.id = tileId;
  tile.classList.add("tile");
  tile.setAttribute("x-index", xIndex);
  tile.setAttribute("y-index", yIndex);
//   myPlace.appendChild(tile);
document.querySelector("main").appendChild(tile);
}
function tileSetResize() {
  let tileSize = window.innerWidth / tileSetWidth;
  let tiles = document.getElementsByClassName("tile");
  for (i = 0; i < tiles.length; i++) {
    let xIndex = tiles[i].getAttribute("x-index");
    let yIndex = tiles[i].getAttribute("y-index");
    tiles[i].style.left = xIndex * tileSize - tileSize + "px";
    tiles[i].style.top = yIndex * tileSize - tileSize + "px";
    tiles[i].style.width = tileSize + "px";
    tiles[i].style.height = tileSize + "px";
  }
}
function createControls(){
    let controlsParent = document.createElement("footer");
    let controlChild = controlsParent.appendChild(document.createElement("button"));
    controlChild.appendChild(document.createTextNode("Set Isometric"));
    controlsParent.style.position = "sticky";
    controlsParent.style.bottom = 0;
    controlsParent.style.left = 0;
    controlsParent.style.zIndex = 9;
    // // document.body.appendChild(controlsParent);
    document.body.appendChild(controlsParent);
}
const tileSetWidth = parseInt(prompt("Enter number of tiles per row"));
const tileSetHeight = parseInt(prompt("Enter number of tiles per column"));
constructTileSet();
createControls();

window.addEventListener("resize", function () {
    tileSetResize()
});
