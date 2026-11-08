import type GeometryVisitor from "./GeometryVisitor";
import type LineString from "./LineString";
import type Point from "./Point";

export default class WktVisitor implements GeometryVisitor {
    visitPoint(point: Point): string {
        if (point.isEmpty()) {
            return "POINT EMPTY";
        }
        return `POINT (${point.x()} ${point.y()})`;
    }

    visitLineString(line: LineString): string {
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
