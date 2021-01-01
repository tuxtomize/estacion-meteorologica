input.onGesture(Gesture.Shake, function () {
    radio.sendString("alarma")
})
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
        radio.sendString("apagar pantalla")
    }
    if (receivedString == "luz") {
        radio.sendNumber(input.lightLevel())
    }
    if (receivedString == "temperatura") {
        radio.sendNumber(input.temperature())
    }
})
radio.setGroup(1)
basic.showIcon(IconNames.Yes)
