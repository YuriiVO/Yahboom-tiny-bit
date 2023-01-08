let distance = 0
let go = 0
images.createImage(`
    # . . . #
    . # . . #
    . . # . #
    . . . # #
    . . . . #
    `).showImage(0)
let strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
Tinybit.RGB_Car_Big(Tinybit.enColor.Green)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        go = 1
    }
    distance = Tinybit.Ultrasonic_Car()
    Tinybit.RGB_Car_Program().showColor(neopixel.hsl(0, 0, distance))
    if (input.buttonIsPressed(Button.B)) {
        go = 0
    }
    if (go == 1) {
        if (distance < 25) {
            Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinRight, 150)
            basic.pause(100)
        } else {
            Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 80)
        }
    } else {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Stop, 0)
    }
})
