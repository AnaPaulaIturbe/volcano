// Magma rising through a vent
for (let index = 0; index < 4; index++) {
    basic.showLeds(`
        # . . . #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.pause(250)
    basic.showLeds(`
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        # # # # #
        `)
    basic.pause(250)
    basic.showLeds(`
        # . . . #
        # . . . #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(250)
    basic.showLeds(`
        # . . . #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(250)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(250)
}
// Lava erupting from the top of the volcano
for (let index = 0; index < 4; index++) {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # . # .
        # . . . #
        `)
    basic.pause(250)
    basic.showLeds(`
        # . # . #
        . . # . .
        . . . . .
        . # . # .
        # . . . #
        `)
    basic.pause(250)
    basic.showLeds(`
        . # # # .
        . . . . .
        . . . . .
        . # . # .
        # . . . #
        `)
    basic.pause(250)
    basic.showLeds(`
        # # # # #
        . . . . .
        . . . . .
        . # . # .
        # . . . #
        `)
    basic.pause(250)
}
