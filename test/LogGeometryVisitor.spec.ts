import { describe, it, expect } from "vitest";
import LogGeometryVisitor from "../src/LogGeometryVisitor";
import Point from "../src/Point";
import LineString from "../src/LineString";

describe("test LogGeometryVisitor", () => {
    const visitor = new LogGeometryVisitor();

    it("décrit un point", () => {
        const result = new Point([3.0, 4.0]).accept(visitor);
        expect(result).to.equal("je suis un point avec x=3 et y=4.");
    });

    it("décrit un point vide", () => {
        const result = new Point().accept(visitor);
        expect(result).to.equal("je suis un point vide.");
    });

    it("décrit une polyligne", () => {
        const ln = new LineString([new Point([0.0, 0.0]), new Point([1.0, 1.0])]);
        expect(ln.accept(visitor)).to.equal("je suis une polyligne définie par 2 point(s).");
    });

    it("décrit une polyligne vide", () => {
        const result = new LineString().accept(visitor);
        expect(result).to.equal("je suis une polyligne vide.");
    });
});
