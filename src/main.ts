import { Draw } from "./draw.js";

export function randInt(n: number): number {
    return Math.floor(Math.random() * n);
}

//const ASPHALT: string = "#4b4b50";
//const SOLID: string = "#00A2E8";


//Draw.clearScreen();
//Draw.setBackgroundColor(ASPHALT);

//const CENTER: number = 256 + 128 + 256;
// Carro (faixa) = 70px
// Extra de cada faixa = 10px
// 3 faixas = (70px * 3) + (10px * 3) = 210px + 30px = 240px
// 240 + 70 + 240
// 480 + 70 = 550
// 1280 - 550 = 730
// 730 / 2 = 365

// Mureta divisória = 6px

// ERRO: Deveria ser 4 faixas !!!
// 2 faixas com mureta = (70px * 2) + (10px * 2) + 5px = 140px + 20px + 5px = 166px
// 720 - 166 = 554
// 554 / 2 = 277

/*
const DIVISOR: number = 5;
const CAR: number = 70;
const LANE_PADDING: number = 10;
const LANE: number = CAR + LANE_PADDING;
const CENTER_WALK: number = CAR;

let horizontalLane = 3 * LANE;
let verticalLane = 2 * LANE;

//let centerArea = verticalLane * horizontalLane;

let totalVertical = verticalLane + DIVISOR + verticalLane;
let totalHorizontal = horizontalLane + CENTER_WALK + horizontalLane;

let blockWidth = (Draw.width - totalHorizontal) / 2;
let blockHeight = (Draw.height - totalVertical) / 2;

let topLeftX = 0;
let topLeftY = 0;

let topRightX = blockWidth + totalHorizontal;
let topRightY = 0;

let bottomLeftX = 0;
let bottomLeftY = blockHeight + totalVertical;

let bottomRightX = topRightX;
let bottomRightY = bottomLeftY;

Draw.rect(topLeftX, topLeftY, blockWidth, blockHeight, SOLID);
Draw.rect(topRightX, topRightY, blockWidth, blockHeight, SOLID);
Draw.rect(bottomLeftX, bottomLeftY, blockWidth, blockHeight, SOLID);
Draw.rect(bottomRightX, bottomRightY, blockWidth, blockHeight, SOLID);
*/

Draw.layout();
