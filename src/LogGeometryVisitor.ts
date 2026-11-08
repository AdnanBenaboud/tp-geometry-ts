import GeometryVisitor from "./GeometryVisitor";
import LineString from "./LineString";
import Point from "./Point";

export default class LogGeometryVisitor implements GeometryVisitor{
    visitPoint(point: Point){
        if(point.isEmpty()){
            return "je suis un point vide.";
        }
        return `je suis un point avec x=${point.x()} et y=${point.y()}.`;
    }

    visitLineString(line: LineString){
        if(line.isEmpty()){
            return "je suis une polyligne vide.";
        }
        return `je suis une polyligne définie par ${line.getNumPoints()} point(s).`;
    }
}
