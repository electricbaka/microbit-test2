led.toggle(0, 0)
basic.showLeds(`
    . . . . #
    . . . . #
    . . . . #
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
})
