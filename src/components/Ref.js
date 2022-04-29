import React, { useState, useRef, createRef } from 'react'

export default function Ref() {
    const [renderIndex, setRenderIndex] = useState(1)
    const refFromUseRef = useRef()
    const refFromCreateRef = createRef()
    if (!refFromUseRef.current) {
        refFromUseRef.current = renderIndex
    }

    if (!refFromCreateRef.current) {
        refFromCreateRef.current = renderIndex
    }
    return (
        <>
            <p>Current render index: {renderIndex}</p>
            <p>refFromUseRef value: {refFromUseRef.current}</p>
            <p>refFromCreateRef value: {refFromCreateRef.current}</p>
            <button
                onClick={() => {
                    setRenderIndex(prev => prev + 1)
                }}
            >
                Cause re-render
            </button>
        </>
    )
}
