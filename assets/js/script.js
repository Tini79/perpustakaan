const bookCon = document.getElementById("bookContainer")
let bookConWidth = bookCon.offsetWidth
const imgCon = document.getElementById("imgContainer")
let imgConWidth = imgCon.offsetWidth
let calcTranslateXLeft = imgCon.getBoundingClientRect().left
let calcTranslateXRight = imgCon.getBoundingClientRect().right
// let calcTranslateXLeft = 0
const imgConCls = document.getElementsByClassName("image-container")
const prevBtn = document.getElementById("prevBtn")
const nextBtn = document.getElementById("nextBtn")
count = 0
function getNextSlide() {
    console.log(imgConWidth);
    calcTranslateXLeft = calcTranslateXLeft - (imgConCls[0].offsetWidth + 90)
    console.log(calcTranslateXRight, 'r');
    if (calcTranslateXLeft <= 0) {
        if (calcTranslateXRight == imgConWidth + 100) {
            if (count == 1) {
                nextBtn.setAttribute("disabled", "")
                prevBtn.removeAttribute("disabled")
            }
            imgCon.style.transform = "translateX(" + (calcTranslateXLeft + 90) + "px)"
            count++
            return
        }
    }
    imgCon.style.transform = "translateX(" + calcTranslateXLeft + "px)"
}

function getPrevSlide() {
    calcTranslateXLeft = calcTranslateXLeft + imgConCls[0].offsetWidth + 90
    console.log(calcTranslateXLeft);
    if (calcTranslateXLeft == 100) {
        imgCon.style.transform = "translateX(0px)"
        prevBtn.setAttribute("disabled", "")
    } else {
        imgCon.style.transform = "translateX(" + calcTranslateXLeft + "px)"
        nextBtn.removeAttribute("disabled")

    }
}
