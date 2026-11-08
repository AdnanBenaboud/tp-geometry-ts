import { describe, it, expect } from "vitest";
import WktVisitor from "../src/WktVisitor";
import WktWriter from "../src/WktWriter";
import Point from "../src/Point";
import LineString from "../src/LineString";

describe("test WktVisitor", () => {
    const visitor = new WktVisitor();

    it("écrit un point", () => {
        expect(new Point([3.0, 4.0]).accept(visitor)).to.equal("POINT (3 4)");
    });

    it("écrit un point vide", () => {
        expect(new Point().accept(visitor)).to.equal("POINT EMPTY");
    });

    it("écrit une LineString", () => {
        const ln = new LineString([new Point([0.0, 0.0]), new Point([1.0, 2.5])]);
        expect(ln.accept(visitor)).to.equal("LINESTRING (0 0, 1 2.5)");
    });

    it("écrit une LineString vide", () => {
        expect(new LineString().accept(visitor)).to.equal("LINESTRING EMPTY");
    });
});

describe("test WktWriter", () => {
    const writer = new WktWriter();

    it("délègue au visiteur", () => {
        expect(writer.writeWKT(new Point([3.0, 4.0]))).to.equal("POINT (3 4)");
        expect(writer.writeWKT(new LineString())).to.equal("LINESTRING EMPTY");
    });
});
