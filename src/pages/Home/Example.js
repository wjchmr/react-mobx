import React, { useState, useEffect } from 'react'

export default function Example(props) {
    const init = () => {
        console.log('init', props.count)
        return props.count + 1
    }
    const [count, setCount] = useState(init())

    // 相当于 componentDidMount 和 componentDidUpdate:
    useEffect(() => {
        // 使用浏览器的 API 更新页面标题
        console.log('Example useEffect')
        document.title = `You clicked ${count} times`
    })

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
            <ExampleChild />
        </div>
    )
}

function ExampleChild() {
    const [todos] = useState([{ text: '' }])

    useEffect(() => {
        // 使用浏览器的 API 更新页面标题
        console.log('ExampleChild', 'useEffect')
    })

    return (
        <div>
            {todos.map(el => {
                return <div key={el.text}>{el.text}</div>
            })}
        </div>
    )
}
