import { describe, it, expect } from "vitest";
import Geometry from "../src/Geometry";
import LineString from "../src/LineString";
import Point from "../src/Point";

describe("test clone", () => {

    describe("Point", () => {
        it("crée une copie égale mais distincte", () => {
            const p = new Point([3.0, 4.0]);
            const c = p.clone();
            expect(c).to.not.equal(p);
            expect(c.getCoordinate()).to.deep.equal([3.0, 4.0]);
        });

        it("est indépendante de l'original", () => {
            const p = new Point([3.0, 4.0]);
            const c = p.clone();
            c.translate(1.0, 1.0);
            expect(p.getCoordinate()).to.deep.equal([3.0, 4.0]);
            expect(c.getCoordinate()).to.deep.equal([4.0, 5.0]);
        });

        it("clone un point vide", () => {
            const c = new Point().clone();
            expect(c.isEmpty()).to.be.true;
        });
    });

    describe("LineString", () => {
        it("clone tous les points en profondeur", () => {
            const p0 = new Point([0.0, 0.0]);
            const p1 = new Point([1.0, 1.0]);
            const ln = new LineString([p0, p1]);
            const c = ln.clone();

            expect(c).to.not.equal(ln);
            expect(c.getNumPoints()).to.equal(2);
            expect(c.getPointN(0)).to.not.equal(p0);
            expect(c.getPointN(0).getCoordinate()).to.deep.equal([0.0, 0.0]);
            expect(c.getPointN(1).getCoordinate()).to.deep.equal([1.0, 1.0]);
        });

        it("est indépendante de l'original", () => {
            const ln = new LineString([new Point([0.0, 0.0])]);
            const c = ln.clone();
            c.translate(5.0, 5.0);
            expect(ln.getPointN(0).getCoordinate()).to.deep.equal([0.0, 0.0]);
            expect(c.getPointN(0).getCoordinate()).to.deep.equal([5.0, 5.0]);
        });

        it("clone une LineString vide", () => {
            const c = new LineString().clone();
            expect(c.isEmpty()).to.be.true;
        });
    });

    describe("via l'interface Geometry", () => {
        it("clone sans connaître le type concret", () => {
            const g: Geometry = new LineString([new Point([1.0, 2.0])]);
            const c = g.clone();
            expect(c.getType()).to.equal("LineString");
            expect(c).to.not.equal(g);
        });
    });

});