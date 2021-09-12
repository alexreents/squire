import React, { Component } from "react";
import { ParallaxProvider, Parallax } from 'react-skrollr';

class SqAnimation extends Component {
    render() {
      return (
        <ParallaxProvider>
            <Parallax
                data={{
                'data-center-center': 'opacity: 1;',
                'data-bottom-top': 'opacity: 0;'
                }}
            >
            <div id="perspective">
                <div class="myBox" data--30p-bottom="transform: rotateY(90deg)" data--60p-bottom="transform: rotateY(0deg)">
                <div class="myBoxB">
                    <h4>squire
                    investment
                    </h4>
                </div>
                <h4><text>personal data</text></h4>
                
                </div>
            </div>
            
            </Parallax>
        </ParallaxProvider>
      );
    }
  }
  
  export default SqAnimation;

