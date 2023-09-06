import { Shape } from "./shape.js";

interface Circle extends Shape{
    radius: number,
    computeArea:() => number
}

function newCircle(radius: number): Circle {
    return {
        radius,
        computeArea: function (): number {
            return Math.PI * radius * radius
        }
    }
}

export { newCircle }
