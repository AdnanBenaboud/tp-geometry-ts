import { describe, it, expect } from "vitest";
import EnvelopeBuilder from "../src/EnvelopeBuilder";

describe("test EnvelopeBuilder", () => {
    it("test build avec insert", () => {
        const result = new EnvelopeBuilder().build();
        expect(result.isEmpty()).to.be.true;
    });

    it("test build avec une seul coordonnée", () => {
        const builder = new EnvelopeBuilder();
        builder.insert([1.0, 2.0]);
        expect(builder.build().toString()).to.equal("[1,2,1,2]");
    });

    it("test build avec plusieurs coordonnées", () => {
        const builder = new EnvelopeBuilder();
        builder.insert([0.0, 1.0]);
        builder.insert([2.0, 0.0]);
        builder.insert([1.0, 3.0]);
        const result = builder.build();
        expect(result.isEmpty()).to.be.false;
        expect(result.toString()).to.equal("[0,0,2,3]");
    });

    it("test build avec négative coordonnée", () => {
        const builder = new EnvelopeBuilder();
        builder.insert([-1.0, -5.0]);
        builder.insert([-3.0, -2.0]);
        expect(builder.build().toString()).to.equal("[-3,-5,-1,-2]");
    });

    it("test insert ignorer coordonnées vide", () => {
        const builder = new EnvelopeBuilder();
        builder.insert([]);
        expect(builder.build().isEmpty()).to.be.true;
        builder.insert([1.0, 1.0]);
        builder.insert([]);
        expect(builder.build().toString()).to.equal("[1,1,1,1]");
    });
});
