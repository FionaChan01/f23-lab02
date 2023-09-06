import { Shape } from "./shape.js";

interface Square extends Shape{
    sideLen: number,
    computeArea:() => number
}

function newSquare(sideLen: number): Square {
    return {
        sideLen,
        computeArea: function (): number {
            return sideLen * sideLen
        }
    }
}

export { newSquare }