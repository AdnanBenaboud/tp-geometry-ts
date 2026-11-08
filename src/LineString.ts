import Geometry from "./Geometry";
import Point from "./Point";
import EnvelopeBuilder from "./EnvelopeBuilder"
import Envelope from "./Envelope"

export default class LineString implements Geometry {
    private points: Array<Point>;

    constructor(points: Array<Point> = []) {
        this.points = points;
    }

    getType(): string {
        return "LineString";
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

    isEmpty(): boolean {
        return this.points.length === 0;
    }

    translate(dx: number, dy: number): void{
        for (const point of this.points) {
            point.translate(dx, dy);
        }
    }

    clone(): LineString {
        return new LineString(this.points.map(point => point.clone()));
    }

    getEnvelope(): Envelope {
        const builder = new EnvelopeBuilder();
        for (const point of this.points) {
            builder.insert(point.getCoordinate())
        }
        return builder.build();
    }
}
