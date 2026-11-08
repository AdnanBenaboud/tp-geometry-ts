import Point from "./Point";
import LineString from "./LineString";
import Geometry from "./Geometry";

export default class WktWriter {
    writeWKT(geometry: Geometry): string {
        if (geometry instanceof Point) {
            return this.writePoint(geometry);
        }
        if (geometry instanceof LineString) {
            return this.writeLineString(geometry);
        }
        throw new Error(`Type de géométrie non supporté : ${geometry.getType()}`);
    }

    private writePoint(point: Point): string {
        if (point.isEmpty()) {
            return "POINT EMPTY";
        }
        return `POINT (${point.x()} ${point.y()})`;
    }

    private writeLineString(line: LineString): string {
        if (line.isEmpty()) {
            return "LINESTRING EMPTY";
        }
        const coordinates: string[] = [];
        for (let i = 0; i < line.getNumPoints(); i++) {
            const point = line.getPointN(i);
            coordinates.push(`${point.x()} ${point.y()}`);
        }
        return `LINESTRING (${coordinates.join(", ")})`;
    }
}
