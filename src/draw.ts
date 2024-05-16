import { Color } from "./color.js";

const DIVISOR: number = 5;
const CAR: number = 70;
const LANE_PADDING: number = 10;
const LANE: number = CAR + LANE_PADDING;
const CENTER_WALK: number = CAR;
const VERTICAL_LANE_HEIGHT = 50;

export class Draw {
    public static width: number = 3840;
    public static height: number = 2160;
    
    private static ctx = this.getContext();

    private static horizontalLane = 3 * LANE;
    private static verticalLane = 2 * LANE;
    
    private static totalVertical = this.verticalLane + DIVISOR + this.verticalLane;
    private static totalHorizontal = this.horizontalLane + CENTER_WALK + this.horizontalLane;
    
    private static blockWidth = (Draw.width - this.totalHorizontal) / 2;
    private static blockHeight = (Draw.height - this.totalVertical) / 2;
    
    private static topLeftX = 0;
    private static topLeftY = 0;
    private static topRightX = this.blockWidth + this.totalHorizontal;
    private static topRightY = 0;
    private static bottomLeftX = 0;
    private static bottomLeftY = this.blockHeight + this.totalVertical;
    private static bottomRightX = this.topRightX;
    private static bottomRightY = this.bottomLeftY;

    private static getContext(): CanvasRenderingContext2D {
        const myCanvas = document.getElementById("display-canvas") as HTMLCanvasElement;
        
        myCanvas.width = this.width;
        myCanvas.height = this.height;

        const result = myCanvas.getContext("2d");
        if (result === null) {
            throw new Error("Failed to get canvas element!");
        } else {
            return result;
        }
    }

    static rect(x: number, y: number, width: number, height: number, color: string) {
        console.log("x = " + x);
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x ,y, width, height);
        //console.log("rect drawn");
    }

    static setBackgroundColor(color: string) {
        Draw.rect(0, 0, this.width, this.height, color);
    }

    static clearScreen() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }

    static layout() {
        Draw.clearScreen();
        Draw.setBackgroundColor(Color.ASPHALT);

        Draw.rect(this.topLeftX, this.topLeftY, this.blockWidth, this.blockHeight, Color.GROUND);
        Draw.rect(this.topRightX, this.topRightY, this.blockWidth, this.blockHeight, Color.GROUND);
        Draw.rect(this.bottomLeftX, this.bottomLeftY, this.blockWidth, this.blockHeight, Color.GROUND);
        Draw.rect(this.bottomRightX, this.bottomRightY, this.blockWidth, this.blockHeight, Color.GROUND);
    }

    static lanes() {
        const FIRST_LANE = this.blockWidth + CAR;
        const SECOND_LANE = FIRST_LANE + LANE;
        const CENTER_X = this.blockWidth + LANE * 2 + CAR;

        for (let i = 10; i < 11; i += VERTICAL_LANE_HEIGHT * 2) {        
            Draw.rect(FIRST_LANE, i, LANE_PADDING, VERTICAL_LANE_HEIGHT, Color.LANE);
            Draw.rect(SECOND_LANE, i, LANE_PADDING, VERTICAL_LANE_HEIGHT, Color.LANE);

            Draw.rect(CENTER_X + CENTER_WALK + CAR, i, LANE_PADDING, VERTICAL_LANE_HEIGHT, Color.LANE);
            Draw.rect(CENTER_X + CENTER_WALK + CAR + LANE, i, LANE_PADDING, VERTICAL_LANE_HEIGHT, Color.LANE);
        }
        
        Draw.rect(CENTER_X, 0, CENTER_WALK, this.blockHeight, Color.GROUND);
    }

    /*
    static circle(p: Point, color: string = "blue") {
        this.ctx.beginPath();
        this.ctx.fillStyle = color;
        this.ctx.arc(p.x, p.y, Point.radius, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.stroke();
    }

    static points(points: Array<Point>) {
        for (const point of points) {
            Draw.circle(point);
        }
    }

    static line(p1: Point, p2: Point, color: string) {
        this.ctx.beginPath();
        this.ctx.strokeStyle = color;
        this.ctx.moveTo(p1.x, p1.y);
        this.ctx.lineTo(p2.x, p2.y);
        this.ctx.stroke();
    }

    static path(points: Array<Point>, path: Array<number>, color: string) {
        if (color === "green") {
            color = "#19a619";
        }
        
        Draw.clearScreen();
        for (let i = 1; i < path.length; i++) {
            Draw.line(points[path[i-1]], points[path[i]], color);
        }

        // Complete path, connect last point to first point
        if (path.length === points.length) { 
            Draw.line(points[path[path.length - 1]], points[path[0]], color);
        }

        Draw.points(points);
    }
    */
}
