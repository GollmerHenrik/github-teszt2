input.onButtonPressed(Button.A, function () {
    while (true) {
        images.createImage(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `).showImage(0)
        basic.pause(1000)
        images.createImage(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `).showImage(0)
        basic.pause(200)
        if (input.pinIsPressed(TouchPin.P1) || (input.buttonIsPressed(Button.B) || (input.pinIsPressed(TouchPin.P0) || input.pinIsPressed(TouchPin.P2)))) {
            break;
        }
    }
})
input.onPinPressed(TouchPin.P2, function () {
    while (true) {
        images.createImage(`
            # . . . .
            . # . . .
            . . # . #
            . . . # #
            . . # # #
            `).showImage(0)
        basic.pause(1000)
        images.createImage(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `).showImage(0)
        basic.pause(200)
        if (input.buttonIsPressed(Button.A) || (input.buttonIsPressed(Button.B) || (input.pinIsPressed(TouchPin.P0) || input.pinIsPressed(TouchPin.P1)))) {
            break;
        }
    }
})
input.onPinPressed(TouchPin.P1, function () {
    while (true) {
        images.createImage(`
            . . . . #
            . . . # .
            # . # . .
            # # . . .
            # # # . .
            `).showImage(0)
        basic.pause(1000)
        images.createImage(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `).showImage(0)
        basic.pause(200)
        if (input.buttonIsPressed(Button.A) || (input.buttonIsPressed(Button.B) || (input.pinIsPressed(TouchPin.P0) || input.pinIsPressed(TouchPin.P2)))) {
            break;
        }
    }
})
basic.forever(function () {
	
})
