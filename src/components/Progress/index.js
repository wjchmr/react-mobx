import React, { Component } from 'react'

import './index.css'

export default class Progress extends Component {
    render() {
        return (
            <div className="container">
                <div className="progress-item">
                    <div className="mark">
                        <div>2022 02 29</div>
                        <div className="dot"></div>
                        <div>孙超</div>
                    </div>
                    <div className="mid">
                        <div>标准时长5分钟</div>
                        <span className="line"></span>
                        <span>用时三分钟</span>
                    </div>
                </div>
                <div className="progress-item">
                    <div className="mark">
                        <div>2022 02 29</div>
                        <div className="dot"></div>
                        <div>孙超</div>
                    </div>
                    <div className="mid">
                        <div>标准时长5分钟</div>
                        <span className="line"></span>
                        <span>用时三分钟</span>
                    </div>
                </div>
                <div className="progress-item">
                    <div className="mark">
                        <div>2022 02 29</div>
                        <div className="dot"></div>
                        <div>孙超</div>
                    </div>
                    <div className="mid">
                        <div>标准时长5分钟</div>
                        <span className="line"></span>
                        <span>用时三分钟</span>
                    </div>
                </div>
                <div className="progress-item">
                    <div className="mark">
                        <div>2022 02 29</div>
                        <div className="dot"></div>
                        <div>孙超</div>
                    </div>
                    {/* <div className='mid'>
                        <div>标准时长5分钟</div>
                        <span className="line"></span>
                        <span>用时三分钟</span>
                    </div> */}
                </div>
            </div>
        )
    }
}
