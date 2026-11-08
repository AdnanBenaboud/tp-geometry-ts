import { describe, it, expect } from "vitest";
import Geometry from "../src/Geometry";
import LineString from "../src/LineString";
import Point from "../src/Point";

describe("test getEnvelope", () => {

    describe("Point", () => {
        it("retourne une enveloppe vide pour un point vide", () => {
            expect(new Point().getEnvelope().isEmpty()).to.be.true;
        });

        it("retourne une enveloppe réduite au point", () => {
            const e = new Point([3.0, 4.0]).getEnvelope();
            expect(e.toString()).to.equal("[3,4,3,4]");
        });
    });

    describe("LineString", () => {
        it("retourne une enveloppe vide pour une LineString vide", () => {
            expect(new LineString().getEnvelope().isEmpty()).to.be.true;
        });

        it("retourne l'emprise de tous les points", () => {
            const ln = new LineString([
                new Point([0.0, 1.0]),
                new Point([2.0, 0.0]),
                new Point([1.0, 3.0])
            ]);
            expect(ln.getEnvelope().toString()).to.equal("[0,0,2,3]");
        });
    });
});
