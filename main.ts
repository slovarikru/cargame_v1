input.onButtonPressed(Button.A, function () {
    if (carPosition > 0) {
        led.unplot(carPosition, 4)
        carPosition = carPosition - 1
        led.plot(carPosition, 4)
    }
})
input.onButtonPressed(Button.B, function () {
    if (carPosition < 4) {
        led.unplot(carPosition, 4)
        carPosition = carPosition + 1
        led.plot(carPosition, 4)
    }
})
let carPosition = 0
carPosition = 2
led.plot(carPosition, 4)
let stoneY = 0
led.plot(2, stoneY)
basic.pause(1000)
basic.forever(function () {
    basic.pause(1000)
    led.unplot(2, stoneY)
    stoneY = stoneY + 1
    led.plot(2, stoneY)
    if (stoneY == 4 && carPosition == 2) {
        basic.clearScreen()
        basic.showString("GAME OVER")
        carPosition = 2
        led.plot(carPosition, 4)
        stoneY = 0
        led.plot(2, stoneY)
        basic.pause(1000)
    }
    if (stoneY == 5) {
        stoneY = -1
    }
})
