import Geometry from "./Geometry";
import Point from "./Point";

export default class LineString implements Geometry {
    private points: Array<Point>;

    constructor(points: Array<Point> = []) {
        this.points = points;
    }

    getType(): string {
        return "LineString";
    }

    isEmpty(): boolean {
        return this.points.length === 0;
    }

    getNumPoints(): number {
        return this.points.length;
    }

    getPointN(n: number): Point {
        if (n < 0 || n >= this.points.length) {
            throw new Error("Index hors limites");
        }
        return this.points[n];
    }

    translate(dx: number, dy: number): void{
        for (const point of this.points) {
            point.translate(dx, dy);
    }
    }
}