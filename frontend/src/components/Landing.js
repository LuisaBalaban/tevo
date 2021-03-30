import React, { Component } from 'react';
import background from '../images/bck.png'
import negative from '../images/negative.png'
import positive from '../images/positive.png'
import neutral from '../images/neutral.png'
import mic from '../images/mic.png'
import down from '../images/down.png'
import ScriptTag from 'react-script-tag';
import animationData from '../images/animation.json';
import axios from 'axios'
import Lottie from './Lottie.js'
import './components.css'
import './boot-strap.css'


class Landing extends Component {
    constructor() {
        super()
        this.state = {
            link: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.start = this.start.bind(this);
    }
    handleChange(event) {      
          const { name, value } = event.target
        this.setState({ [name]: value })
    }
    start()
    {
        axios.post('http://localhost:3000/start').then(response => {
            console.log(response)}).catch(error => {
                console.log(error.response)})
    }
    
    render() {
        return (
            <div>

                <head>
                    <title>tevo</title>
                </head>
                <div>
                    <section>
                        <h2 id="text">Have better conversations</h2>
                        <img src={background} id="bck"></img>
                        <Lottie lotti={animationData} height={700} width={700} id="animation" />
                        {/* <img src={down} id="down"></img>          */}
                    </section>
                    <div>
                        <div class="container">
                            <div class="row">
                                <div class="col-sm">
                                    <div id="leftSide">
                                    <div class="row">
                                        <h1>We’re ready to listen</h1>
                                       <button  id="mic" onClick={this.start}></button>
                                       </div>
                                        <h1>Discussion topic</h1>
                                        <h1>Key points</h1>
                                    </div>
                                </div>
                                <div class="col-sm" id="rightSide">
                                    <h1>Feelings</h1>
                                    <div class="row">
                                        <h3>negative: </h3>
                                        <img src={negative} />

                                    </div>
                                    <div class="row">
                                        <h3>neutral  : </h3>
                                        
                                        <img src={neutral} />
                                    </div>

                                    <div class="row">
                                        <h3>positive: </h3>
                                        <img src={positive} />
                                    </div>
                                    <h1>Participants</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>)
    }
}
export default Landing