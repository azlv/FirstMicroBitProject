input.onButtonPressed(Button.A, function () {
    let myImage: Image = null
    myImage.showImage(0)
    basic.showNumber(0)
})
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    basic.showLeds(`
        . . # . .
        # # # # #
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.showLeds(`
        . . # . .
        . # # # #
        # . # . .
        . # . # .
        # . . . #
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . # . # .
        # . . . #
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . # . # .
        . # . . #
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . # . # .
        . # . # .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        # # . # .
        . . . # .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        # # . # #
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . # # # #
        # . # . .
        # # . # #
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        # # # # #
        . . # . .
        # # . # #
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        # # # # .
        . . # . .
        # # # # #
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        . . # . .
        # # # # #
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
