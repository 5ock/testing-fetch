test('object assignment', () => {
    const data = { one: 1 }
    data['two'] = 2
    expect(data).toEqual({ one: 1, two: 2 })
})

test('adding positive numbers is not zero', () => {
    for(let a=1; a<10; a++) {
        for(let b=1; b<10; b++) {
            expect(a+b).not.toBe(0)
        }
    }
})

// float toBeCloseTo
test('adding floating point numbers', () => {
    const value = 0.1 + 0.2
    //expect(value).toBe(0.3);  This won't work because of rounding error
    expect(value).toBeCloseTo(0.3) // This works.
})

// string
test('there is no I in team', () => {
    expect('team').not.toMatch(/I/)
})

test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch('stop')
})

// array
const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
]
  
test('the shopping list has milk on it', () => {
    expect(shoppingList).toContain('milk')
    expect(new Set(shoppingList)).toContain('milk')
})