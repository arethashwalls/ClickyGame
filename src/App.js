import React, {Component} from 'react';
import Image from './components/Image';
import ImageBox from './components/ImageBox'
import TopNav from './components/TopNav'
import './style.css'
import {Container} from 'react-materialize'
const classNames = require('classnames');

let allLangs = require('./allLangs.json')

const randomize = arr => {
    let randomArr = [];
    while(arr.length > 0) {
        const index = Math.floor(Math.random() * arr.length);
        randomArr.push( arr.splice(index, 1)[0] );
    }
    return randomArr;
}

const declick = arr =>  arr.forEach(element => element.clicked = false);
allLangs = randomize(allLangs);
declick(allLangs);

class App extends Component {
    state = {
        allLangs: allLangs,
        score: 0,
        topScore: 0,
        shakeBox: false
    };

    clickLang = lang => {
        if(lang.clicked) {
            if(this.state.score > this.state.topScore) this.setState({topScore: this.state.score});
            this.setState({
                score: 0,
                allLangs: declick(this.state.allLangs),
                shakeBox: true
            });
            // window.setTimeout(() => this.setState({shakeBox: false}, 500))
            window.setTimeout(() => this.setState({shakeBox: false}), 500)

        } else {
            this.setState({
                allLangs: this.state.allLangs.map(item => {
                    if(item.key === lang.key) {
                        item.clicked = true;
                        return item;
                    } else {
                        return item;
                    }
                }),
                score: this.state.score + 1
            });
        }
        this.setState({allLangs: randomize(this.state.allLangs)});
    };
    render() {
        return <div>
        <TopNav score={this.state.score} topScore={this.state.topScore} />
        <Container>
            <ImageBox allLangs={this.state.allLangs} classes={classNames(
                'image-box', 'grey', 'darken-3', 'z-depth-3', 
                {'shake': this.state.shakeBox})} >
                {this.state.allLangs.map(lang => {
                    return <Image 
                        lang={lang}
                        key={lang.key}
                        clickLang={this.clickLang} 
                    />
                })}
            </ImageBox>
        </Container>
    </div>
    }
    
}

export default App;