import Coordinate from "./Coordinate";
import Geometry from "./Geometry";

export default class Point implements Geometry {
    private coordinate: Coordinate;

    constructor(coordinate: Coordinate = []) {
        this.coordinate = coordinate;
    }

    getType(): string {
        return "Point";
    }

    isEmpty(): boolean {
        return this.coordinate.length === 0;
    }

    getCoordinate(): Coordinate {
        return this.coordinate;
    }

    translate(dx: number, dy: number): void{
      if (this.isEmpty()) {
        return;
      }
      this.coordinate[0] = this.x() + dx;
      this.coordinate[1] = this.y() + dy;
    }

    x(): number {
        return this.isEmpty() ? Number.NaN : this.coordinate[0];
    }

    y(): number {
        return this.coordinate.length < 2 ? Number.NaN : this.coordinate[1];
    }
}