radio.onReceivedString(function (receivedString) {
    if (receivedString == 0) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (receivedString == 1) {
        basic.clearScreen()
    }
    if (receivedString == 2) {
        radio.sendNumber(input.lightLevel())
    }
    if (receivedString == 3) {
        radio.sendNumber(input.temperature())
    }
})
