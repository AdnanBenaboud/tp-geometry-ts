import type Point from "./Point";
import type LineString from "./LineString";

export default interface GeometryVisitor{
    visitPoint(point: Point): string;
    visitLineString(lineString: LineString): string;
}
