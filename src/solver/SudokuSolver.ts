import Helpers from "./lib/helpers";
export default class SudokuSolver {
    digits: string
    rows: string
    cols: string
    squares: string[]
    appContainer: HTMLElement
    // unitList: string[]
    // units: string[]
    // peers: string[]
    helper: Helpers

    constructor () {
        this.helper = new Helpers()
        this.digits = '123456789'
        this.rows = 'ABCDEFGHI'
        this.cols = this.digits
        this.squares = this.helper.crossProduct(this.rows, this.cols)
        console.log('cols', this.cols)
        console.log('rows', this.rows)
        console.log('squares', this.squares)
        this.appContainer = document.querySelector('#App')!
        this.appContainer.append(this.squares.toString())
    }
    

}