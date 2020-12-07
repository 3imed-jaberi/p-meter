# P-METER 📏

![pMeter](https://raw.githubusercontent.com/3imed-jaberi/p-meter/master/archive/logo.png)

[![Build Status](https://travis-ci.org/3imed-jaberi/p-meter.svg?branch=master)](https://travis-ci.org/3imed-jaberi/p-meter) &nbsp; [![Coverage Status](https://coveralls.io/repos/github/3imed-jaberi/p-meter/badge.svg?branch=master)](https://coveralls.io/github/3imed-jaberi/p-meter?branch=master)

> quick way to measure the strength of the password.

The purpose of this module is to analyze the password
and then categorize it according to our rules mentioned
in the documentation where you can view the result
numerical or textual.

**`NOTE:`** we verify that a blank password or that 
there are spaces are passed to the module function.

## Installation 

```bash
# npm
$ npm install p-meter
# yarn
$ yarn add p-meter
```

## Usage 

```javascript
const pwdMeter = require('p-meter')
const password = '199812+imeD'
// 1.x.x
// const result = pwdMeter (password, { displayString: true, useSpace: false })
// 2.x.x
// the default value of displayString and useSpace is false 
const result = pwdMeter (password, { displayString: true })
```

**`NOTE:`** This example is the simplest thing to write.
For more examples you will find them in a section of exemples.

## Examples

The result can be displayed in a two different way (Numerical or Textual).
In this section we illustrate the two ways of seeing the result. 

1- Numerical: 

| -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
|----|---|---|---|---|---|---|---|

```javascript
// 1.x.x 
const result = passwordMeter(password, { displayString: false, useSpace: false })
// 2.x.x
// the default value of displayString and useSpace is false
const result = passwordMeter(password)
```

2 - Textual :

| ERROR | FAIBLE | AVG | ABOVE AVG | STRONG AVG | FORT | ABOVE FORT | STRONG FORT |
|-------|--------|-----|-----------|------------|------|------------|-------------|


```javascript
// 1.x.x
const result = passwordMeter(password, { displayString: true, useSpace: false })
// 2.x.x
// the default value of displayString and useSpace is false
const result = passwordMeter(password, { displayString: true })
```

## Rules 

We can divide passwords into four categories (numbers, 
uppercase alphabet, lowercase alphabet and special 
characters) ..

We have 8 levels of results:

- Level 1 (-1 or ERROR): If you have an invalid password 
that is empty or composed of spaces.
- Level 2 (0 or LOW): If there is only one category in 
the password of the four.
- Level 3 (1 or AVG): if there are two categories in 
the password and the special characters do not belong to them.
- Level 4 (2 or ABOVE AVG): if there are two categories 
in the password and the special characters belong to it.
- Level 5 (3 or STRONG AVG): If you have three categories 
and the special characters do not belong to them.
- Level 6 (4 or FORT): If you have three categories and 
the special characters belong to them.
- Level 7 (5 or ABOVE FORT): if all categories are present.
- Level 8 (6 or STRONG FORT): If all categories are present 
with the following characteristics:
    - If uppercase letters are at least 30% of the password 
    length, lowercase letters must be at least 10%.
    - If lowercase letters represent 30% of the length of 
    the password, the capital letters must represent at least 10%.
    - Special characters must be at least 20%.

#### License
---

[MIT](LICENSE)
