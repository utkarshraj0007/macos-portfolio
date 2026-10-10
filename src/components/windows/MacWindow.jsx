// import React from 'react'
// import { Rnd } from 'react-rnd'
// import "./window.scss"

// const MacWindow = ({ children, width = "40vw", height = "40vh", windowName, setWindowsState }) => {
//     return (
//         <Rnd
//             default={{
//                 width: width,
//                 height: height,
//                 x: 300,
//                 y: 200
//             }}
//         >
//             <div className="window">
//                 <div className="nav">
//                     <div className="dots">
//                         <div onClick={() => setWindowsState(state => ({ ...state, [windowName]: false }))} className="dot red"></div>
//                         <div className="dot yellow"></div>
//                         <div className="dot green"></div>
//                     </div>

//                     <div className="title"><p>pawanchaudhary - zsh</p></div>

//                 </div>
//                 <div className="main-content">
//                     {children}
//                 </div>
//             </div>
//         </Rnd>
//     )
// }

// export default MacWindow






// import React, { useState } from 'react'
// import { Rnd } from 'react-rnd'
// import "./window.scss"

// const getPixelSize = (value, type) => {
//     if (typeof value === 'number') {
//         return value
//     }

//     const dimension = String(value).trim()
//     const amount = parseFloat(dimension)

//     if (dimension.endsWith('vw')) {
//         return window.innerWidth * amount / 100
//     }

//     if (dimension.endsWith('vh')) {
//         return window.innerHeight * amount / 100
//     }

//     if (dimension.endsWith('%')) {
//         const viewportSize = type === 'width'
//             ? window.innerWidth
//             : window.innerHeight

//         return viewportSize * amount / 100
//     }

//     return amount
// }

// const MacWindow = ({
//     children,
//     width = "40vw",
//     height = "40vh",
//     windowName,
//     setWindowsState
// }) => {
//     const [size, setSize] = useState(() => ({
//         width: getPixelSize(width, 'width'),
//         height: getPixelSize(height, 'height')
//     }))

//     const [position, setPosition] = useState(() => ({
//         x: window.innerWidth <= 640 ? 10 : 300,
//         y: window.innerWidth <= 640 ? 80 : 200
//     }))

//     const [isMinimized, setIsMinimized] = useState(false)
//     const [isMaximized, setIsMaximized] = useState(false)

//     const [previousSize, setPreviousSize] = useState(null)
//     const [previousPosition, setPreviousPosition] = useState(null)

//     const [minimizedSize, setMinimizedSize] = useState(null)
//     const [minimizedPosition, setMinimizedPosition] = useState(null)

//     const closeWindow = () => {
//         setWindowsState(state => ({
//             ...state,
//             [windowName]: false
//         }))
//     }

//     const toggleMinimize = () => {
//         if (isMinimized) {
//             setSize(minimizedSize)
//             setPosition(minimizedPosition)
//             setMinimizedSize(null)
//             setMinimizedPosition(null)
//             setIsMinimized(false)
//             return
//         }

//         setMinimizedSize(size)
//         setMinimizedPosition(position)

//         setSize(currentSize => ({
//             ...currentSize,
//             height: 40
//         }))

//         setIsMinimized(true)
//     }

//     const toggleMaximize = () => {
//         if (isMinimized) {
//             setSize(minimizedSize)
//             setPosition(minimizedPosition)
//             setMinimizedSize(null)
//             setMinimizedPosition(null)
//             setIsMinimized(false)
//             return
//         }

//         if (isMaximized) {
//             setSize(previousSize)
//             setPosition(previousPosition)
//             setIsMaximized(false)
//             return
//         }

//         setPreviousSize(size)
//         setPreviousPosition(position)

//         setSize({
//             width: window.innerWidth,
//             height: window.innerHeight - 40
//         })

//         setPosition({
//             x: 0,
//             y: 40
//         })

//         setIsMaximized(true)
//     }

//     return (
//         <Rnd
//             size={size}
//             position={position}
//             minWidth={260}
//             minHeight={isMinimized ? 40 : 120}
//             disableDragging={isMaximized || isMinimized}
//             enableResizing={!isMaximized && !isMinimized}
//             onDragStop={(event, data) => {
//                 setPosition({
//                     x: data.x,
//                     y: data.y
//                 })
//             }}
//             onResize={(event, direction, ref, delta, nextPosition) => {
//                 setSize({
//                     width: ref.offsetWidth,
//                     height: ref.offsetHeight
//                 })

//                 setPosition(nextPosition)
//             }}
//         >
//             <div className="window">
//                 <div className="nav">
//                     <div className="dots">
//                         <button
//                             type="button"
//                             aria-label="Close window"
//                             onClick={closeWindow}
//                             className="dot red"
//                         />

//                         <button
//                             type="button"
//                             aria-label={isMinimized ? "Restore window" : "Minimize window"}
//                             onClick={toggleMinimize}
//                             className="dot yellow"
//                         />

//                         <button
//                             type="button"
//                             aria-label={isMaximized ? "Restore window size" : "Maximize window"}
//                             onClick={toggleMaximize}
//                             className="dot green"
//                         />
//                     </div>

//                     <div className="title">
//                         <p>pawanchoudhary - zsh</p>
//                     </div>
//                 </div>

//                 {!isMinimized && (
//                     <div className="main-content">
//                         {children}
//                     </div>
//                 )}
//             </div>
//         </Rnd>
//     )
// }

// export default MacWindow





// import React from 'react'
// import { Rnd } from 'react-rnd'
// import "./window.scss"

// const MacWindow = ({ children, width = "40vw", height = "40vh", windowName, setWindowsState }) => {
//     return (
//         <Rnd
//             default={{
//                 width: width,
//                 height: height,
//                 x: window.innerWidth <= 640 ? 10 : 300,
//                 y: window.innerWidth <= 640 ? 80 : 200
//             }}
//         >
//             <div className="window">
//                 <div className="nav">
//                     <div className="dots">
//                         <div onClick={() => setWindowsState(state => ({ ...state, [windowName]: false }))} className="dot red"></div>
//                         <div className="dot yellow"></div>
//                         <div className="dot green"></div>
//                     </div>

//                     <div className="title">
//                         <p>pawanchoudhary - zsh</p>
//                     </div>
//                 </div>

//                 <div className="main-content">
//                     {children}
//                 </div>
//             </div>
//         </Rnd>
//     )
// }

// export default MacWindow





import React, { useState } from 'react'
import { Rnd } from 'react-rnd'
import "./window.scss"

const getPixelSize = (value, type) => {
    if (window.innerWidth <= 900) {
        if (type === 'width') {
            return window.innerWidth - 20
        }

        return Math.min(window.innerHeight * 0.62, 560)
    }

    if (typeof value === 'number') {
        return value
    }

    const dimension = String(value).trim()
    const amount = parseFloat(dimension)

    if (dimension.endsWith('vw')) {
        return window.innerWidth * amount / 100
    }

    if (dimension.endsWith('vh')) {
        return window.innerHeight * amount / 100
    }

    if (dimension.endsWith('%')) {
        const viewportSize = type === 'width'
            ? window.innerWidth
            : window.innerHeight

        return viewportSize * amount / 100
    }

    return amount
}

const MacWindow = ({
    children,
    width = "40vw",
    height = "40vh",
    windowName,
    setWindowsState
}) => {
    const [size, setSize] = useState(() => ({
        width: getPixelSize(width, 'width'),
        height: getPixelSize(height, 'height')
    }))

    const [position, setPosition] = useState(() => ({
        x: window.innerWidth <= 900 ? 10 : 300,
        y: window.innerWidth <= 900 ? 80 : 200
    }))

    const [isMinimized, setIsMinimized] = useState(false)
    const [isMaximized, setIsMaximized] = useState(false)

    const [previousSize, setPreviousSize] = useState(null)
    const [previousPosition, setPreviousPosition] = useState(null)

    const [minimizedSize, setMinimizedSize] = useState(null)
    const [minimizedPosition, setMinimizedPosition] = useState(null)

    const closeWindow = () => {
        setWindowsState(state => ({
            ...state,
            [windowName]: false
        }))
    }

    const toggleMinimize = () => {
        if (isMinimized) {
            setSize(minimizedSize)
            setPosition(minimizedPosition)
            setMinimizedSize(null)
            setMinimizedPosition(null)
            setIsMinimized(false)
            return
        }

        setMinimizedSize(size)
        setMinimizedPosition(position)

        setSize(currentSize => ({
            ...currentSize,
            height: 40
        }))

        setIsMinimized(true)
    }

    const toggleMaximize = () => {
        if (isMinimized) {
            setSize(minimizedSize)
            setPosition(minimizedPosition)
            setMinimizedSize(null)
            setMinimizedPosition(null)
            setIsMinimized(false)
            return
        }

        if (isMaximized) {
            setSize(previousSize)
            setPosition(previousPosition)
            setIsMaximized(false)
            return
        }

        setPreviousSize(size)
        setPreviousPosition(position)

        setSize({
            width: window.innerWidth,
            height: window.innerHeight - 40
        })

        setPosition({
            x: 0,
            y: 40
        })

        setIsMaximized(true)
    }

    return (
        <Rnd
            size={size}
            position={position}
            minWidth={260}
            minHeight={isMinimized ? 40 : 120}
            disableDragging={isMaximized || isMinimized}
            enableResizing={!isMaximized && !isMinimized}
            onDragStop={(event, data) => {
                setPosition({
                    x: data.x,
                    y: data.y
                })
            }}
            onResize={(event, direction, ref, delta, nextPosition) => {
                setSize({
                    width: ref.offsetWidth,
                    height: ref.offsetHeight
                })

                setPosition(nextPosition)
            }}
        >
            <div className="window">
                <div className="nav">
                    <div className="dots">
                        <button
                            type="button"
                            aria-label="Close window"
                            onClick={closeWindow}
                            className="dot red"
                        />

                        <button
                            type="button"
                            aria-label={isMinimized ? "Restore window" : "Minimize window"}
                            onClick={toggleMinimize}
                            className="dot yellow"
                        />

                        <button
                            type="button"
                            aria-label={isMaximized ? "Restore window size" : "Maximize window"}
                            onClick={toggleMaximize}
                            className="dot green"
                        />
                    </div>

                    <div className="title">
                        <p>pawanchoudhary - zsh</p>
                    </div>
                </div>

                {!isMinimized && (
                    <div className="main-content">
                        {children}
                    </div>
                )}
            </div>
        </Rnd>
    )
}

export default MacWindow