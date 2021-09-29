import React from 'react'
import Particles from 'react-particles-js'


export default function() {
    return (
        <div className="fixed top-0 left-0 bg-gradient-to-r from-blue-600 to-green-600 overflow-hidden w-screen h-screen flex items-stretch"> 
            <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 50
	        },
	        "size": {
	            "value": 3
	        },
			"move": {
				"speed": 0.5
			}
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} />
        </div>
        
    )
}