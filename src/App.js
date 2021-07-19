import React, { Component } from 'react'

export default class App extends Component {
    state = {
        username: '',
        password: ''
    }
    saveFormData = (dataType) => {
        return (
            (event) => {
                this.setState({ [dataType]: event.target.value })
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
