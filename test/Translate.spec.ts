import { describe, it, expect } from "vitest";
import Geometry from "../src/Geometry";
import LineString from "../src/LineString";
import Point from "../src/Point";

describe("test translate", () => {

    describe("Point", () => {
        it("translate un point", () => {
            const p = new Point([3.0, 4.0]);
            p.translate(1.0, -2.0);
            expect(p.x()).to.equal(4.0);
            expect(p.y()).to.equal(2.0);
        });

        it("ne modifie pas un point vide", () => {
            const p = new Point();
            p.translate(1.0, 1.0);
            expect(p.isEmpty()).to.be.true;
            expect(p.getCoordinate()).to.deep.equal([]);
        });
    });

    describe("LineString", () => {
        it("translate tous les points", () => {
            const ln = new LineString([
                new Point([0.0, 0.0]),
                new Point([1.0, 1.0])
            ]);
            ln.translate(2.0, 3.0);
            expect(ln.getPointN(0).getCoordinate()).to.deep.equal([2.0, 3.0]);
            expect(ln.getPointN(1).getCoordinate()).to.deep.equal([3.0, 4.0]);
        });

        it("ne plante pas sur une LineString vide", () => {
            const ln = new LineString();
            ln.translate(1.0, 1.0);
            expect(ln.isEmpty()).to.be.true;
        });
    });

    describe("via l'interface Geometry", () => {
        it("translate n'importe quelle géométrie", () => {
            const geometries: Array<Geometry> = [
                new Point([0.0, 0.0]),
                new LineString([new Point([1.0, 1.0])])
            ];
            for (const g of geometries) {
                g.translate(1.0, 1.0);
            }
            expect((geometries[0] as Point).getCoordinate()).to.deep.equal([1.0, 1.0]);
            expect((geometries[1] as LineString).getPointN(0).getCoordinate()).to.deep.equal([2.0, 2.0]);
        });
    });

});