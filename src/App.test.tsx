import {addScore} from "./App";

describe("Log", ()=>{
    it("log에 아이템을 추가할 수 있다", ()=>{
        const add3 = addScore(3);

        const result = add3([2,4])
        expect(result).toEqual([2,4,3])
    })
})