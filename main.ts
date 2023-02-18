let nombre = 0
input.onGesture(Gesture.Shake, function () {
    nombre = randint(0, 2)
    if (nombre == 0) {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            `)
    }
    if (nombre == 1) {
        basic.showLeds(`
            # # # # .
            # . . # .
            # . . # .
            # . . # .
            # # # # .
            `)
    }
    if (nombre == 2) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            # # . # #
            # # . # #
            `)
    }
})
