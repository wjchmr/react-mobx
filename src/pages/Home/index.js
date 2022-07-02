import { observer } from 'mobx-react'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Progress from '../../components/Progress'

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

    state = {
        message: 'hello',
    }

    static propTypes = {
        name: PropTypes.string.isRequired,
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ message: 'ni hao a 2' })
            console.log(this.state.message)
        }, 0)
        this.setState({ message: 'ni hao a ' })
        console.log(this.state.message)

        // console.log('home componentDidMount')
    }

    toPageOne = () => {
        this.props.history.push({
            pathname: '/one',
            state: { from: true },
        })
    }

    render() {
        console.log('home render', this.state.message)
        return (
            <div>
                <h1>Home</h1>
                {this.state.message}
                {/* <Example count={1} /> */}
                <Progress />
            </div>
        )
    }
}

export default Home
