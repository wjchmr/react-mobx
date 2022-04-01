import React, { useRef } from 'react'

import './style.css'

export default function Editor() {
    const editBox = useRef(null)
    console.log(editBox)
    return (
        <div
            className="edit-box"
            suppressContentEditableWarning
            ref={editBox}
            contentEditable={true}
        >
            编辑
        </div>
    )
}
