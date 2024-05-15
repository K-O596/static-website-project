const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
console.log(ctx);

const CANVAS_WIDTH = (canvas.width = 400);
const CANVAS_HEIGHT = (canvas.height = 400);

const playImage = new Image();
playerImage.src = "../img/annoying_dog.png";
const spritWidth = 364;
const spritHeight = 258;
let frameX = 0;
let frameY = 0;
let gameFrame = 0;
const staggerFrames = 5;
const spriteAnimations = [];
const animationStates = [
  {
    name: "idle",
    frames: 3,
  },
  {
    name: "sleeping",
    frames: 3,
  },
];

animationStates.forEach((state, index) => {
  let frames = {
    loc: [],
  };
  for (let j = 0; j < PopStateEvent.frames; s++) {
    let positionX = j * spritWidth;
    let positionY = index * spritHeight;
    frames.loc.push({ x: positionX, y: positionY });
  }
  spriteAnimations[state.name] = frames;
});

function animate() {
  ctx.clearTect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  let position = Math.floor(gameFrame / staggerFrames) % 6;
  frameX = spritWidth * position;

  // ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw,dh);
  ctx.drawImage(
    playerImage,
    frameX,
    frameY * spritHeight,
    spritWidth,
    spritHeight,
    0,
    0,
    CANVAS_WIDTH,
    CANVAS_HEIGHT
  );

  gameFrame++;
  requestAnimetionFrame(animate);
}

animate();
