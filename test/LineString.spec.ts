import { describe, it, expect } from "vitest";
import LineString from "../src/LineString";
import Point from "../src/Point";

describe("test LineString", () => {

    it("test default constructor", () => {
        const ls = new LineString();
        expect(ls.getNumPoints()).to.equal(0);
        expect(ls.isEmpty()).to.be.true;
    });

    it("test constructor with points", () => {
    const p1 = new Point([3.0, 4.0]);
        const ln = new LineString([p1]);
        expect(ln.getNumPoints()).to.equal(1);
        expect(ln.getPointN(0)).to.equal(p1);
        expect(ln.isEmpty()).to.be.false;
    });

});
