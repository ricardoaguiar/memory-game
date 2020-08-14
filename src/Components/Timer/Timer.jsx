import React, { Component } from 'react'

export default class Timer extends Component {
    state = {
        minutes: null,
        seconds: 0,
    }

    componentDidMount() {
        this.setState({minutes:this.props.timeLevel})
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval)
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            } 
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render() {
        const { minutes, seconds } = this.state
        let statusGame=minutes === 0 && seconds === 0
        ? <h1>Time out!</h1>
        : <h1>Time: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
        return (
            <div>
                {statusGame}
            </div>
        )
    }
}