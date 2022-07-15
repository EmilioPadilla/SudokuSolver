export default class Helpers {

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
}