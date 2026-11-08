import type Envelope from "./Envelope";
import type GeometryVisitor from "./GeometryVisitor";

export default interface Geometry {
    getType(): string;
    isEmpty(): boolean;
    translate(dx: number, dy: number): void;
    clone(): Geometry;
    getEnvelope(): Envelope;
    accept(v: GeometryVisitor): string;
}
