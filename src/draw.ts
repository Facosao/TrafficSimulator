class Point {
    x: number = 0;
    y: number = 0;
    static radius: number = 0;
}

export class Draw {
    private static ctx = this.getContext();
    private static width: number = this.getWidth();
    private static height: number = this.getHeight();

    private static getContext(): CanvasRenderingContext2D {
        const myCanvas = document.getElementById("display-canvas") as HTMLCanvasElement;
        
        myCanvas.width = this.getWidth();
        myCanvas.height = this.getHeight();

        const result = myCanvas.getContext("2d");
        if (result === null) {
            throw new Error("Failed to get canvas element!");
        } else {
            return result;
        }
    }

    private static getWidth(): number {
        return window.screen.availWidth - 30;
    }

    private static getHeight(): number {
        return window.screen.availHeight - 30;
    }

    static rect(x: number, y: number, width: number, height: number, color: string) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x ,y, width, height);
        console.log("rect drawn");
    }

    static setBackgroundColor(color: string) {
        if (Draw.width !== null) {
            if (Draw.height !== null) {
                Draw.rect(0, 0, Draw.width, Draw.height, color);
                return;
            }
        }

        throw new Error("width || height === null!");
    }

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

    static clearScreen() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
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
}
