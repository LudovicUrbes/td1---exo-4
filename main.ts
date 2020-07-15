input.onButtonPressed(Button.A, function () {
    led.unplot(x, 0)
    led.unplot(x, 1)
    led.unplot(x, 2)
    led.unplot(x, 3)
    led.unplot(x, 4)
    x += -1
    if (x < 0) {
        y += -1
        x += 5
    }
    if (y < 0) {
        y += 5
        x += 0
    }
})
input.onButtonPressed(Button.B, function () {
    led.unplot(x, 0)
    led.unplot(x, 1)
    led.unplot(x, 2)
    led.unplot(x, 3)
    led.unplot(x, 4)
    x += 1
    if (x > 4) {
        y += 1
        x += -5
    }
    if (y > 4) {
        y += -5
        x += 0
    }
})
let y = 0
let x = 0
x = 0
y = 0
basic.forever(function () {
    led.plot(x, y)
})
