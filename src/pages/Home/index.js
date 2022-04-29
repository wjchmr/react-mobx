import { observer } from 'mobx-react'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Example from '../../components/Example'
import Ref from '../../components/DomRef'

/* 
observer:将你的组件变成响应式组件。就是数据改变时候可以出发重新的渲染。
inject(homeStore):和redux的connect作用一样,将数据注册到组件。
homeStore其实就是store/index中 new出来的实例名称 */

// @inject("homeStore")
@observer
class Home extends Component {
    static defaultProps = {
        name: 'home',
    }

    static propTypes = {
        name: PropTypes.string.isRequired,
    }

    componentDidMount() {
        console.log('home componentDidMount')
    }

    toPageOne = () => {
        this.props.history.push({
            pathname: '/one',
            state: { from: true },
        })
    }

    render() {
        console.log('home render')
        return (
            <div>
                <h1>Home</h1>
                {/* <Example count={1} /> */}
                <Ref />
            </div>
        )
    }
}

export default Home
