import { Draw } from "./draw.js";

export function randInt(n: number): number {
    return Math.floor(Math.random() * n);
}

const TRACK: number = 305;

Draw.clearScreen();
Draw.setBackgroundColor("#4b4b50");
//Draw.rect(0, 0, TRACK, TRACK, "#00A2E8");

const WIDTH: number = 1280;
const HEIGHT: number = 720;

const CENTER: number = 256 + 128 + 256;
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

// Fileira de cima
Draw.rect(0, 0, 365, 277, "#00A2E8");
Draw.rect(365 + 240, 0, 70, 277, "#00A2E8");
Draw.rect(365 + 240 + 70 + 240, 0, 365, 277, "#00A2E8");

// Canteiro esquerdo
//Draw.rect(0, 277 + )

// Canteiro direto


// Fileira de baixo
Draw.rect(0, 277 + 166, 365, 277, "#00A2E8");
Draw.rect(365 + 240, 277 + 166, 70, 277, "#00A2E8");
Draw.rect(365 + 240 + 70 + 240, 277 + 166, 500, 277, "#00A2E8");
//Draw.rect(512+256, 240 * 2, 512, 240, "#00A2E8");


