const codeHtml = `
    <svg code="delete" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect code="delete" x="0.907776" y="0.683868" width="35" height="35" fill="url(#pattern0)" fill-opacity="0.8"/>
        <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlink:href="#image0_17_189" transform="scale(0.01)"/>
        </pattern>
        <image id="image0_17_189" width="100" height="100" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAA7NJREFUeAHtnEuu0zAYhQ/isQB2cCVGwBJYBwM2wojHkAmIxwoQDBAsAa7EHmAAS0CMeEgwQIBOVVdu6rzsP+n/X51IVdL2xk2+L7aPfaMAWkRABERABERABERABERABERABERABERABERABERABERABERABERABERABERABI5F4BaAvwD+6bVh8BPARwCPAVxfW8oNAL8lovdi/APgGYBLa4i5AuCrZPTKyFuMd0tLuQzgs2RMkpHEPF2qlrD6vZeMWTIohc3XNWsp5wA8l4zZMlIteWQt5K5kVMuglA+WQm4q3jbJoJDvVkIUb+3GWc1OTgB8UVPVXDtSP9IkhPH2k2SYyaCU6uUigFPJMJVRLUTx1q7PSE1VWlfVEMVbR0IUb5eTMbvJYrz9pX7DvN9IzdUsIZ5mb/n/hPwkLLaXKLPmuCb1IZ7i7T0A5wG8MJTyGsAFALcNy6yRwX1GF0/xljLSYiUlyUjlHltKOo7i2lO85cQbr+J84ftXDVc19y2Vyd+qvcJb98vP72DbW7x9UwBYW1O6NYMnz7JeHlHGYJPlNd5aSPEqo1eI93jbIsWzjKKQKLO3NVK8yzgQ4ine8uDGXnOkRJCxJ4TxlrejjEHw9v0UKVFk7IR4irc1woekRJKxE3InYM3oiusbU5TGGS1jl+7vWr+H13hbc6KlmpIPrjyMM8bO68zde1uqKZTSOqofA2n1vYQ4a67PVJNV6sC7TZblLLFVrcjL2RyvOnU/cX8jJHrsLdWM1IGXOvraCcn8Sl5qe1ejow4Mh2QkaJGk7IRwI9rUyRQZ0aTsCeGbKJOLc2REknIghB94n36vkRFFSlEIP/Q6gm+REUFKrxB+4e1fuBYyvEsZFOIpDusmh60qT7cBPcgunzTOSFd87bobie8feSolO8X+TU9xmFKsZCSJScqxZfB4Ji+6lXSd6ZXJQviH3uNwuuIjr2cJ4R97jcORJeTHPlsId/AWh/MTir5dJcRTHI4uoHv8VUK4k6c43D2pyO+rhXBHT3E4soT82JuEcOcos8P5SXvebhbCAhiH9eQ4m3GKiRAWojjcLuSbmY1tQYrDbVJMH89EJ4rDbUIeWtcQlqdH/NVJ4SP+ri4hhGUyDushmPPEPFlKRirX0+yw55jLY3u7HWgndoutFYeHawmbKdYMznqstuhR4/tSfmwfdskOfLE+YzW7+iEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAERWInAfyzpY6jDHFYJAAAAAElFTkSuQmCC"/>
        </defs>
    </svg>`

const cssVar = {
    mainColor: '#AC3AF2'
}

const StylesCalc = {
    mainContainerClass: {
        position: "absolute",
        backgroundColor: "#EAECF0",
        width: "375px",
        height: "812px",
        borderRadius: "32px"
    },

    // //.working_space
    workingSpaceClass: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        width: "375px",
        height: "812px",
        top: "50%",
        left: "50%"
    },
    // //.pads
    padsClass: {
        display: "grid",
        padding: "2.5rem 1.5rem 2rem",
        gridTemplateRows: "1fr 1fr 1fr 1fr 1fr",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gap: "15px"
    },
    // //.pad
    padClass: {
        height: "4rem",
        borderRadius: "1rem",
        background: "linear-gradient(135deg, rgba(136, 136, 136, 0.1) 0%, rgba(255, 255, 255, 0.25) 100%)",
        boxShadow: "-5px -5px 8px #F2F4F8, 5px 5px 7px rgba(174, 174, 192, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid rgba(255, 255, 255, 0.4)",
        fontSize: "2rem",
        color: cssVar.mainColor,
        fontWeight: "600"
    },
    // //.pad.number
    padNumberClass: {
        height: "4rem",
        borderRadius: "1rem",
        background: "linear-gradient(135deg, rgba(136, 136, 136, 0.1) 0%, rgba(255, 255, 255, 0.25) 100%)",
        boxShadow: "-5px -5px 8px #F2F4F8, 5px 5px 7px rgba(174, 174, 192, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid rgba(255, 255, 255, 0.4)",
        fontSize: "2rem",
        color: cssVar.mainColor,
        fontWeight: "600",
        fontSize: "2rem",
        color: cssVar.mainColor,
        fontFamily: "'Inter', sans-serif",
    },
    // //.pad.operation.mult
    padOperationMultClass: {
        fontSize: "1.5rem"
    },
    // //.equals
    equalsClass: {
        height: "4rem",
        borderRadius: "1rem",
        background: "linear-gradient(135deg, rgba(136, 136, 136, 0.1) 0%, rgba(255, 255, 255, 0.25) 100%)",
        boxShadow: "-5px -5px 8px #F2F4F8, 5px 5px 7px rgba(174, 174, 192, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid rgba(255, 255, 255, 0.4)",
        fontSize: "2rem",
        fontWeight: "600",
        backgroundColor: cssVar.mainColor,
        borderRadius: "36px",
        color: "black"
    },
    // //.results
    resultsClass: {
        padding: "2.5rem 1.5rem 2rem",
        height: "320px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        fontFamily: "'Inter', sans-serif"
    },
    //#results
    resultsId: {
        height: "320px",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "end",
        whiteSpace: "nowrap",
        flexDirection: "column",
        overflow: "hidden"
    },
    //.result
    resultClass: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        whiteSpace: "nowrap",
        overflow: "hidden",
        height: "48px",
        color: "#5C5C5C",
        fontSize: "44px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "20px",
        letterSpacing: "-0.24px"
    },
    //.history
    historyClass: {
        color: "#6C6C6C",
        fontSize: "32px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "20px",
        letterSpacing: "-0.24px",
        paddingBottom: "16px"
    }
}

const history = {
    tag: 'div',
    style: StylesCalc.historyClass,
    class: 'history',
    childs: []
}

const objHtml = {
    childs: [{
        tag: 'div',
        style: StylesCalc.mainContainerClass,
        class: 'main_container',
        childs: [{
            tag: 'div',
            style: StylesCalc.workingSpaceClass,
            class: 'working_space',
            childs: [{
                tag: 'div',
                style: StylesCalc.resultsClass,
                class: 'results',
                childs: [{
                    tag: 'div',
                    style: StylesCalc.resultsId,
                    id: 'results',
                    childs: [
                        history,
                        history,
                        history,
                        history,
                        history,
                        history,

                    ]
                }, {
                    tag: 'div',
                    style: StylesCalc.resultClass,
                    id: 'res',
                    class: 'result',
                    textContent: '0',
                    childs: []
                },]
            }, {
                tag: 'div',
                style: StylesCalc.padsClass,
                class: 'pads',
                childs: [{
                    tag: 'button',
                    style: StylesCalc.padClass,
                    class: 'pad all-clear',
                    code: 'clear',
                    textContent: 'C',
                    childs: []
                }, {
                    tag: 'button',
                    style: StylesCalc.padClass,
                    class: 'pad delete',
                    code: 'delete',
                    childs: []
                },
                {
                    tag: 'button',
                    style: StylesCalc.padClass,
                    class: 'pad',
                    code: 'persent',
                    textContent: '%',
                    childs: []
                },
                {
                    tag: 'button',
                    style: StylesCalc.padClass,
                    class: 'pad operation',
                    code: '/',
                    textContent: '\u{00F7}',
                    childs: []
                },
                {
                    tag: 'button',
                    style: StylesCalc.padNumberClass,
                    class: 'pad number',
                    code: '7',
                    textContent: '7',
                    childs: []
                },
                {
                    tag: 'button',
                    style: StylesCalc.padNumberClass,
                    class: 'pad number',
                    code: '8',
                    textContent: '8',
                    childs: []
                },
                {
                    tag: 'button',
                    style: StylesCalc.padNumberClass,
                    class: 'pad number',
                    code: '9',
                    textContent: '9',
                    childs: []
                },
                {
                    tag: 'button',
                    style: StylesCalc.padNumberClass,
                    class: 'pad operation mult',
                    code: '*',
                    textContent: '\u{2715}',
                    childs: []
                },
                {
                    tag: 'button',
                    style: StylesCalc.padNumberClass,
                    class: 'pad number',
                    code: '4',
                    textContent: '4',
                    childs: []
                },
                {
                    tag: 'button',
                    style: StylesCalc.padNumberClass,
                    class: 'pad number',
                    code: '5',
                    textContent: '5',
                    childs: []
                },
                {
                    tag: 'button',
                    style: StylesCalc.padNumberClass,
                    class: 'pad number',
                    code: '6',
                    textContent: '6',
                    childs: []
                },
                {
                    tag: 'button',
                    style: StylesCalc.padNumberClass,
                    class: 'pad operation',
                    code: '-',
                    textContent: '\u{002D}',
                    childs: []
                },
                {
                    tag: 'button',
                    style: StylesCalc.padNumberClass,
                    class: 'pad number',
                    code: '1',
                    textContent: '1',
                    childs: []
                },
                {
                    tag: 'button',
                    style: StylesCalc.padNumberClass,
                    class: 'pad number',
                    code: '2',
                    textContent: '2',
                    childs: []
                },
                {
                    tag: 'button',
                    style: StylesCalc.padNumberClass,
                    class: 'pad number',
                    code: '3',
                    textContent: '3',
                    childs: []
                },
                {
                    tag: 'button',
                    style: StylesCalc.padNumberClass,
                    class: 'pad operation',
                    code: '+',
                    textContent: '\u{002B}',
                    childs: []
                },
                {
                    tag: 'button',
                    style: StylesCalc.padNumberClass,
                    class: 'pad number',
                    childs: []
                },
                {
                    tag: 'button',
                    style: StylesCalc.padNumberClass,
                    class: 'pad number',
                    code: '0',
                    textContent: '0',
                    childs: []
                },
                {
                    tag: 'button',
                    style: StylesCalc.padNumberClass,
                    class: 'pad',
                    code: 'dot',
                    textContent: '\u{00B7}',
                    childs: []
                },
                {
                    tag: 'button',
                    style: StylesCalc.equalsClass,
                    class: 'pad equals',
                    code: 'equal',
                    textContent: '\u{003D}',
                    childs: []
                },]
            }
            ]
        }]
    }]
}

const wrapper = document.getElementById('wrapper')

const fragment = document.createDocumentFragment()

const createRecurse = (objArr, parent) => {
    for (const obj of objArr.childs) {
        const element = document.createElement(obj['tag'])
        for (const [key, value] of Object.entries(obj)) {
            switch (key) {
                case 'tag':
                    break;
                case 'style':
                    Object.assign(element.style, value)
                    break;
                case 'class':
                    element.className = value
                    break;
                case 'code':
                    element.setAttribute('code', value);
                    break;
                case 'childs':
                    createRecurse(obj, element)
                default:
                    element[key] = value
                    break;
            }
        }
        parent.appendChild(element)
    }
}

createRecurse(objHtml, fragment)

wrapper.appendChild(fragment)

/******* Time */
const mainContainer = document.querySelector('.main_container')
// wrapper.innerHTML = codeHtml

const numberButtons = document.querySelectorAll('.number')

const operationButtons = document.querySelectorAll('.operation')

const equalsButton = document.querySelector('.equals')

const deleteButton = document.querySelector('.delete')
deleteButton.innerHTML = codeHtml;

const allClearButton = document.querySelector('.all-clear')

const operandTextElement = document.getElementById('his1')

const res = document.getElementById('res')

const results = document.getElementById('results')



let resultReady = false
let actions = ['0']
let curIndex = 0
const act = ['/', '*', '+', '-', '%']

const pads = document.querySelector('.pads')


const refreshDisplay = (res, arr) => {
    res.textContent = arr.join(' ')
}

const parsePersent = (arr, curIndex) => {

    let valuePersent = arr[curIndex]

    valuePersent = curIndex
        ? String(Math.round(arr[curIndex - 2] * valuePersent) / 100)
        : String(Math.round(valuePersent) / 100)

    return valuePersent
}

const parseActions = (arr) => {
    const arrFn = [...arr]
    const act = new Map([
        ['/', (a, b) => a / b],
        ['*', (a, b) => a * b],
        ['-', (a, b) => a - b],
        ['+', (a, b) => a / 1 + b / 1]
    ])

    const iterator = act.entries()
    let idx = 0

    while (currentActionEntries = iterator.next().value) {
        const [char, fun] = currentActionEntries
        const findIdx = arrFn.findIndex((element) => char === element)
        if (findIdx === -1) {
            idx++
        } else {
            const res = fun(arrFn[findIdx - 1], arrFn[findIdx + 1])
            console.log(res)
            arrFn.splice(findIdx - 1, 3, res)
            console.log(arrFn)
        }
    }

    return String(Math.round(arrFn[0] * 100) / 100)
}

// double click clear
pads.addEventListener('dblclick', (event) => {
    const code = event.target.getAttribute('code')
    if (code === 'clear') {
        actions = ['0']
        curIndex = 0
        for (let i = 0; i < results.querySelectorAll("*").length; i++) {
            results.querySelectorAll("*")[i].textContent = ''
        }
    }
})

pads.addEventListener('click', (event) => {

    // get button code
    const code = event.target.getAttribute('code')
    let curAction = actions[curIndex]

    // number
    if (event.target.classList.contains('number')) {
        if (!(curAction === '/' && code === '0')) {
            if (act.includes(curAction)) {
                actions.push()
                curIndex++
                curAction = ''
            }
            actions[curIndex] = curAction === '0'
                ? curAction = code
                : curAction += code
        }
    }

    // operation
    if (event.target.classList.contains('operation')) {
        if (!act.includes(curAction)) {
            actions.push(code)
            curIndex++
        }
    }

    // specific operation
    switch (code) {
        case 'dot':
            if (!Number.isNaN(+(curAction + '.'))) {
                actions[curIndex] += '.'
            }
            break
        case 'delete':
            if (curAction === '0') {
                break
            } else if (actions.length === 1 && curAction.length === 1) {
                actions[curIndex] = '0'
            } else if (curAction.length === 1) {
                actions.length--
                curIndex--
                break
            } else {
                curAction = curAction.slice(0, -1)
                actions[curIndex] = curAction
            }
            break
        case 'clear':
            actions = ['0']
            curIndex = 0
            break
        case 'persent':
            actions[curIndex] = parsePersent(actions, curIndex)
            refreshDisplay(res, actions)
            break
        case 'equal':
            let elem = document.createElement("div")
            results.removeChild(results.firstElementChild)
            elem.classList.add("history")
            elem.textContent = parseActions(actions)
            Object.assign(elem.style, StylesCalc.historyClass)
            results.appendChild(elem)
            actions = ['0']
            curIndex = 0
            break
    }

    refreshDisplay(res, actions)
    return null

})

cont = document.querySelector('.main_container');
let newPosX = 0, newPosY = 0, startPosX = 0, startPosY = 0;

// when the user clicks down on the element
cont.addEventListener('mousedown', function (e) {
    e.preventDefault();

    // get the starting position of the cursor
    startPosX = e.clientX;
    startPosY = e.clientY;

    document.addEventListener('mousemove', mouseMove);

    document.addEventListener('mouseup', function () {
        document.removeEventListener('mousemove', mouseMove);
    });

});

function mouseMove(e) {
    // calculate the new position
    newPosX = startPosX - e.clientX;
    newPosY = startPosY - e.clientY;

    // with each move we also want to update the start X and Y
    startPosX = e.clientX;
    startPosY = e.clientY;

    // set the element's new position:
    cont.style.top = (cont.offsetTop - newPosY) + "px";
    cont.style.left = (cont.offsetLeft - newPosX) + "px";
}