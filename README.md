# ![TARDIS](https://github.com/iakashpaul/tardis-agora/raw/master/favicon.jpg "TARDIS") AVATAR - TARDIS | Agora.io Challenge

The project aims to build a playground/plugin which developers can use to define gestures within video calls. For ex. Ability to add VFX like Doctor Strange making those golden circles, Thor lightning up with electricity flowing through him, even do sign language(not finger level fidelity)/human pose detection for a variety of tasks, all within the browser be it on PC or mobile using TensorFlow for ML+AR & Agora to do the video-chat heavy lifting.

## Team : Akash Paul

## About

We've used Agora.io stack to help people learn, instruct others & participate in immersive AR experiences without requiring costly hardware & delivered via a webpage for PC/Android browsers. Selling hosting & add-ons would be another way for developers to create more use cases with our product by incorporating human pose detection data which is being performed on the device itself

- Youtube: [https://youtu.be/sN4ITLhJ5zs](https://youtu.be/sN4ITLhJ5zs)

- Github: [https://github.com/AgoraIO-Community/AvatAR](https://github.com/AgoraIO-Community/AvatAR)

- Demo: [https://avatar-agora.surge.sh](https://avatar-agora.surge.sh)

## Steps to run

- Clone this repo & cd into it

- Install node.js & run, `npm install --global surge`

- Run, `surge`& provide a domain of your choosing

- Voila, it is going to be hosted at your subdomain on surge.sh, visit it over https

## Modules used

- Agora.io, [Token Server for Agora](https://github.com/AgoraIO-Community/TokenServer-nodejs) on heroku at [https://tardis-demo.herokuapp.com/access_token?channel=test&uid=1234](https://tardis-demo.herokuapp.com/access_token?channel=test&uid=1234)

- TensorFlow.js, [PoseNet Model for realtime human pose detection](https://github.com/ml5js/ml5-examples/tree/release/javascript/PoseNet)

- Materializecss for themeing, jQuery for helping with JS.

# Media

[![AVATAR-TARDIS VIDEO](http://img.youtube.com/vi/sN4ITLhJ5zs/0.jpg)](http://www.youtube.com/watch?v=sN4ITLhJ5zs)
