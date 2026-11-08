import { describe, it, expect } from "vitest";
import WktWriter from "../src/WktWriter";
import Point from "../src/Point";
import LineString from "../src/LineString";
import Geometry from "../src/Geometry";
import Envelope from "../src/Envelope";
import GeometryVisitor from "../src/GeometryVisitor";

describe("test WktWriter", () => {
    const writer = new WktWriter();

    it("écrit un point", () => {
        expect(writer.writeWKT(new Point([3.0, 4.0]))).to.equal("POINT (3 4)");
    });

    it("écrit un point vide", () => {
        expect(writer.writeWKT(new Point())).to.equal("POINT EMPTY");
    });

    it("écrit une LineString", () => {
        const ln = new LineString([new Point([0.0, 0.0]), new Point([1.0, 2.5])]);
        expect(writer.writeWKT(ln)).to.equal("LINESTRING (0 0, 1 2.5)");
    });

    it("écrit une LineString vide", () => {
        expect(writer.writeWKT(new LineString())).to.equal("LINESTRING EMPTY");
    });

    it("écrit une géometrie non supporté", () => {
        class Polygon implements Geometry {
            getType(): string { return "Polygon"; }
            isEmpty(): boolean { return true; }
            translate(dx: number, dy: number): void {}
            clone(): Geometry { return new Polygon(); }
            getEnvelope(): Envelope { return new Envelope(); }
            accept(visitor: GeometryVisitor): string { throw new Error("non supporté"); }
        }

        expect(() => writer.writeWKT(new Polygon()))
            .to.throw("Type de géométrie non supporté : Polygon");
    });
});
