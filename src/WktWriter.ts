import Point from "./Point";
import LineString from "./LineString";
import Geometry from "./Geometry";
import WktVisitor from "./WktVisitor";

export default class WktWriter {
    writeWKT(geometry: Geometry): string {
        return geometry.accept(new WktVisitor());
    }
}
