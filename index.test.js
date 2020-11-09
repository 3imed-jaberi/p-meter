const assert = require('assert')
const pMeter = require('.')

let result

describe('password meter test - error', () => {
  it('Condition 1', () => {
    result = pMeter('123456')
    assert.strictEqual(result, -1)
  })

  it('Condition 2', () => {
    result = pMeter('')
    assert.strictEqual(result, -1)
  })

  it('Condition 3', () => {
    result = pMeter('12345678 ')
    assert.strictEqual(result, -1)
  })

  it('Condition 4', () => {
    result = pMeter(' ')
    assert.strictEqual(result, -1)
  })

  it('Condition 5', () => {
    result = pMeter('   ', { useSpace: true })
    assert.strictEqual(result, -1)
  })

  it('Condition 6', () => {
    result = pMeter('12345678910111112424242525', { useSpace: true })
    assert.strictEqual(result, -1)
  })

  it('Condition 7', () => {
    result = pMeter('123456', { displayString: true })
    assert.strictEqual(result.substr(0, 5), 'ERROR')
  })

  it('Condition 8', () => {
    result = pMeter('', { displayString: true })
    assert.strictEqual(result.substr(0, 5), 'ERROR')
  })

  it('Condition 9', () => {
    result = pMeter('12345678 ', { displayString: true })
    assert.strictEqual(result.substr(0, 5), 'ERROR')
  })

  it('Condition 10', () => {
    result = pMeter(' ', { displayString: true })
    assert.strictEqual(result.substr(0, 5), 'ERROR')
  })

  it('Condition 11', () => {
    result = pMeter('   ', { displayString: true, useSpace: true })
    assert.strictEqual(result.substr(0, 5), 'ERROR')
  })

  it('Condition 12', () => {
    result = pMeter('12345678910111112424242525', { displayString: true, useSpace: true })
    assert.strictEqual(result.substr(0, 5), 'ERROR')
  })
})

describe('password meter test - faible', () => {
  it('Condition 1', () => {
    result = pMeter('12345678')
    assert.strictEqual(result, 0)
  })

  it('Condition 2', () => {
    result = pMeter('imedjaberi')
    assert.strictEqual(result, 0)
  })

  it('Condition 3', () => {
    result = pMeter('IMEDJABERI')
    assert.strictEqual(result, 0)
  })

  it('Condition 4', () => {
    result = pMeter('+°%/*-+-')
    assert.strictEqual(result, 0)
  })

  it('Condition 5', () => {
    result = pMeter('+°%/ * +-', { useSpace: true })
    assert.strictEqual(result, 0)
  })

  it('Condition 6', () => {
    result = pMeter('12345678', { displayString: true })
    assert.strictEqual(result, 'FAIBLE')
  })

  it('Condition 7', () => {
    result = pMeter('imedjaberi', { displayString: true })
    assert.strictEqual(result, 'FAIBLE')
  })

  it('Condition 8', () => {
    result = pMeter('IMEDJABERI', { displayString: true })
    assert.strictEqual(result, 'FAIBLE')
  })

  it('Condition 9', () => {
    result = pMeter('+°%/*-+-', { displayString: true })
    assert.strictEqual(result, 'FAIBLE')
  })

  it('Condition 10', () => {
    result = pMeter('+°%/ * +-', { displayString: true, useSpace: true })
    assert.strictEqual(result, 'FAIBLE')
  })
})

describe('password meter test - AVG', () => {
  it('Condition 1', () => {
    result = pMeter('123456im')
    assert.strictEqual(result, 1)
  })

  it('Condition 2', () => {
    result = pMeter('123IM456')
    assert.strictEqual(result, 1)
  })

  it('Condition 3', () => {
    result = pMeter('imedJABERI')
    assert.strictEqual(result, 1)
  })

  it('Condition 4', () => {
    result = pMeter('123456im', { displayString: true })
    assert.strictEqual(result, 'AVG')
  })

  it('Condition 5', () => {
    result = pMeter('123IM456', { displayString: true })
    assert.strictEqual(result, 'AVG')
  })

  it('Condition 6', () => {
    result = pMeter('imedJABERI', { displayString: true })
    assert.strictEqual(result, 'AVG')
  })
})

describe('password meter test - ABOVE AVG', () => {
  it('Condition 1', () => {
    result = pMeter('123456*+')
    assert.strictEqual(result, 2)
  })

  it('Condition 2', () => {
    result = pMeter('IMED CSM', { useSpace: true })
    assert.strictEqual(result, 2)
  })

  it('Condition 3', () => {
    result = pMeter('i+love+my+mom')
    assert.strictEqual(result, 2)
  })

  it('Condition 4', () => {
    result = pMeter('123456*+', { displayString: true })
    assert.strictEqual(result, 'ABOVE AVG')
  })

  it('Condition 5', () => {
    result = pMeter('IMED CSM', { displayString: true, useSpace: true })
    assert.strictEqual(result, 'ABOVE AVG')
  })

  it('Condition 6', () => {
    result = pMeter('i+love+my+mom', { displayString: true })
    assert.strictEqual(result, 'ABOVE AVG')
  })
})

describe('password meter test - STRONG AVG', () => {
  it('Condition 1', () => {
    result = pMeter('123S56im')
    assert.strictEqual(result, 3)
  })

  it('Condition 2', () => {
    result = pMeter('123S56im', { displayString: true })
    assert.strictEqual(result, 'STRONG AVG')
  })
})

describe('password meter test - FORT', () => {
  it('Condition 1', () => {
    result = pMeter('123+56im')
    assert.strictEqual(result, 4)
  })

  it('Condition 2', () => {
    result = pMeter('123S56+M')
    assert.strictEqual(result, 4)
  })

  it('Condition 3', () => {
    result = pMeter('imed+csM')
    assert.strictEqual(result, 4)
  })

  it('Condition 4', () => {
    result = pMeter('123+56im', { displayString: true })
    assert.strictEqual(result, 'FORT')
  })

  it('Condition 5', () => {
    result = pMeter('123S56+M', { displayString: true })
    assert.strictEqual(result, 'FORT')
  })

  it('Condition 6', () => {
    result = pMeter('imed+csM', { displayString: true })
    assert.strictEqual(result, 'FORT')
  })
})

describe('password meter test - ABOVE FORT', () => {
  it('Condition 1', () => {
    result = pMeter('123+5S6m')
    assert.strictEqual(result, 5)
  })

  it('Condition 2', () => {
    result = pMeter('123+5S6m', { displayString: true })
    assert.strictEqual(result, 'ABOVE FORT')
  })
})

describe('password meter test - STRONG FORT', () => {
  it('Condition 1', () => {
    result = pMeter('123+5S6im')
    assert.strictEqual(result, 6)
  })

  it('Condition 2', () => {
    result = pMeter('123+5S6im', { displayString: true })
    assert.strictEqual(result, 'STRONG FORT')
  })
})
