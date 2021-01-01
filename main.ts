radio.onReceivedString(function (receivedString) {
    if (receivedString == "encender pantalla") {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (receivedString == "apagar pantalla") {
        basic.clearScreen()
    }
    if (receivedString == "luz") {
        radio.sendNumber(input.lightLevel())
    }
    if (receivedString == "temperatura") {
        radio.sendNumber(input.temperature())
    }
})
