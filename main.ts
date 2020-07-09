input.onButtonPressed(Button.A, function () {
    led.unplot(x, 0)
    x += -1
})
input.onButtonPressed(Button.B, function () {
    led.unplot(x, 0)
    x += 1
})
let x = 0
x = 0
basic.forever(function () {
    led.plot(x, 0)
})
