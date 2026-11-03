import Coordinate from "./Coordinate";
import Envelope from "./Envelope";

export default class EnvelopeBuilder {
    private xMin = Number.POSITIVE_INFINITY;
    private yMin = Number.POSITIVE_INFINITY;
    private xMax = Number.NEGATIVE_INFINITY;
    private yMax = Number.NEGATIVE_INFINITY;

    insert(coordinate: Coordinate): void {
        if (coordinate.length < 2) {
            return;
        }
        this.xMin = Math.min(this.xMin, coordinate[0]);
        this.yMin = Math.min(this.yMin, coordinate[1]);
        this.xMax = Math.max(this.xMax, coordinate[0]);
        this.yMax = Math.max(this.yMax, coordinate[1]);
    }

    build(): Envelope {
        if (this.xMin > this.xMax) {
            return new Envelope();
        }
        return new Envelope([this.xMin, this.yMin], [this.xMax, this.yMax]);
    }
}