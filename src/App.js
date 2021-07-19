import React, { Component } from 'react'

export default class App extends Component {
    state = {
        username: '',
        password: ''
    }
    saveFormData = (dataType) => {
        return (
            (event) => {
                this.setState({ [dataType]: event.target.value }) //dataType 识别为变量而不是单纯的字符串
            }
        )
    }
    render() {
        return (
            <div>
                <form>
                    Username:<input onChange={this.saveFormData('username')} type="text/" />
                    Password:<input onChange={this.saveFormData('password')} type="password" />
                </form>
            </div>
        )
    }
}
