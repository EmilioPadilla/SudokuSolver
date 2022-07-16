import Helpers from "./lib/helpers";
export default class SudokuSolver {
    digits: string
    rows: string
    cols: string
    squares: string[]
    appContainer: HTMLElement
    unitList: string[][]
    units: {}
    peers: string[]
    helper: Helpers

    constructor () {
        this.helper = new Helpers()
        this.digits = '123456789'
        this.rows = 'ABCDEFGHI'
        this.cols = this.digits
        this.squares = this.helper.createSquares(this.rows, this.cols)
        this.unitList = this.helper.createUnitList(this.rows, this.cols)
        this.units = this.helper.createUnits(this.unitList, this.squares)
        this.peers = this.helper.createPeers(this.units, this.squares)
        console.log('cols', this.cols)
        console.log('rows', this.rows)
        console.log('peers', this.peers)
        this.appContainer = document.querySelector('#App')!
        this.appContainer.append(this.peers?.toString())
    }
    

}