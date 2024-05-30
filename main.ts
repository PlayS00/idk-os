input.onGesture(Gesture.TiltLeft, function () {
    if (input.buttonIsPressed(Button.A)) {
        music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.UntilDone)
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . . .
        . . . . .
        . . . . .
        `)
})
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.forever()


	

