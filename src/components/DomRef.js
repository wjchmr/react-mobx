import React, { useState, useCallback } from 'react'

export default function MeasureExample() {
    const [height, setHeight] = useState(0)

    // Because our ref is a callback, it still works
    // even if the ref only gets attached after button
    // click inside the child component.
    const measureRef = useCallback(node => {
        if (node !== null) {
            setHeight(node.getBoundingClientRect().height)
        }
    })

    return (
        <>
            <Child measureRef={measureRef} />
            {height > 0 && <h2>The above header is {Math.round(height)}px tall</h2>}
        </>
    )
}

function Child({ measureRef }) {
    const [show, setShow] = useState(false)
    if (!show) {
        return <button onClick={() => setShow(true)}>Show child</button>
    }
    return (
        <div>
            <h1 ref={measureRef}>Hello, world</h1>
            <button onClick={() => setShow(false)}>hide child</button>
        </div>
    )
}
