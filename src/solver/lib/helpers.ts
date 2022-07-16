export default class Helpers {

    sum (arr: []) {
        var result = 0, n = arr.length || 0; //may use >>> 0 to ensure length is Uint32
        while(n--) {
          result += +arr[n]; // unary operator to ensure ToNumber conversion
        }
        return result;
      }

    // Cross Product of elements in A with elements in B
    crossProduct (A:any, B:any): string[] {
        const result = []
        for (const a in A) {
            for (const b in B) {
                result.push(A[a]+B[b])
            }
        }
        return result
    }

    createSquares (rows: any, cols: any): string[] {
        return this.crossProduct(rows, cols)
    }

    createUnitList (rows: any, cols: any): string[][] {
        const result = []
        const letters = ['ABC', 'DEF', 'GHI']
        const numbers = ['123', '456', '789']
        for (const c in cols) {
            result.push(this.crossProduct(rows, cols[c]))
        }
        for (const r in rows) {
            result.push(this.crossProduct(rows[r], cols))
        }
        for (const rs in letters) {
            for (const cs in numbers) {
                result.push(this.crossProduct(letters[rs], numbers[cs]))
            }
        }
        return result;
    }

    createUnits (unitList: string[][], squares: string[]): any {
        const result: any = {}
        for (const s in squares) {
            for (const unit in unitList) {
                const si = unitList[unit]
                for (const u in si) {
                    if (squares[s] == si[u]) {
                        const propName = squares[s].toString()
                        result[propName] = si
                    }
                }
            }
        }
        return result 
    }

    createPeers (units: any, squares: string[]): any {
        const set = new Set()
        for (const s in squares) {
            for (const unit in units) {
                const si = units[unit]
                for (const u in si) {
                    if (squares[s] == si[u]) {
                        const propName = squares[s].toString()
                        const tmpSet = new Set()
                        //  TODO convert Python set example
                        // tmpSet.add([si])
                        // let obj: any = {}
                        // obj[propName] = si
                        // set.add(this.sum(si[s])-tmpSet)
                    }
                }
            }
        }
        return set 
    }
}