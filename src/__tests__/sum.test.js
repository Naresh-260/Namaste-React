import sum from "../components/sum";
test("sum function that will sum of two numbers",()=>{
    const result = sum(3,5);

    // Assertion
    expect(result).toBe(8);
})