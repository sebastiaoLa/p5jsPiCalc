
function getOddFraction(n) {
    return (((-1) ** n) / (getOdd(n)))
}

function getOdd(n) {
    return 2 * n + 1
}

function calcPi(n) {
    let a = currentPi / 4
    a = a + getOddFraction(n)
    currentPi = a * 4
    let b = a + getOddFraction(n + 1)
    let c = (a + b) / 2
    displayPi = c * 4
}

var currentN = 0
var currentPi = 0.0
var _width = window.document.body.scrollWidth
var _height = window.document.body.scrollHeight
var _textSize = 32
var calcs_per_frame = 0
var old_calcs = 0

function setup() {
    createCanvas(_width, _height);
    frameRate(60)
}

function draw() {
    background(225)
    calcPi(currentN)
    currentN++;
    while (textWidth(`${displayPi}`) > _width) {
        _textSize--
    }
    textSize(_textSize);

    text(`${currentPi}`, 10, _textSize)
    text(`${displayPi}`, 10, _textSize * 2.1)

    if (frameRate() > 20) {
        old_calcs = calcs_per_frame
        calcs_per_frame = Math.floor(currentN / 60)
    } else {
        old_calcs = calcs_per_frame + 1
    }

    for (let index = 0; index < calcs_per_frame; index++) {
        calcPi(currentN)
        currentN++;
    }

    if (currentN > 60) {
        frameRate(currentN)
        if (currentN > 120) {
            if (currentN > 240) {
                if (currentN > 300) {
                    if (old_calcs > calcs_per_frame) {
                        text(`Limited to ${calcs_per_frame} extra calcs_per_frame`, 10, _textSize * 3.1)
                        text(`To maintain framerate`, 10, _textSize * 4.1)

                    } else {
                        text(`No limits now! ${Math.floor(frameRate())} fps calc per frame: ${calcs_per_frame}`, 10, _textSize * 3.1)
                    }
                } else {
                    text(`FASTER! ${currentN}`, 10, _textSize * 3.1)
                }
            } else {
                text(`Faster ${currentN}`, 10, _textSize * 3.1)
            }
        } else {
            text(`Fast ${currentN}`, 10, _textSize * 3.1)
        }
    }

}
