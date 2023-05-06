---
title: Spiral tunnel
publish_date: 2023-31-03
disable_html_sanitization : true
---
# Ideation

My idea was to have the background tranforms from a blank canvas that later on reveal a hidden message 'RMIT creative coding specialisation' underneath. Taking inspiraton from the stop-motion movie 'Coraline', there's a scene the mysterious tunnel appears leading her to a parallel world. I think it'll be interesting to have influence from this artform into my sketch

![Coraline crawling](./image/tunnel.jpg) 

![tunnel](./image/coraline.jpg) 

My banner ideation is to place the text (in white colour) into a blank canvas. After interaction (clicking to logo). A squirling line will appear and fully cover the canvas like a spider-web

 # Used functions

 From The Coding Train (drag the canvas to operate)

 <iframe width="600" height="400" src="https://editor.p5js.org/codingtrain/full/1y_xfueO"></iframe>

 -class

 -array

 -mousePressed()/mouseDragged()

 These are the functions that I learnt from The Coding Train. The style is also an inspiration for this experiment

# Testing
The background transformation (click the icon to operate)
<iframe width="600" height="400" src="https://editor.p5js.org/whateverimsandy/full/VADwDnL1a"></iframe>
My p5js sketch

# Links
https://editor.p5js.org/codingtrain/full/1y_xfueO
https://editor.p5js.org/whateverimsandy/full/VADwDnL1a


click to see the squares

<canvas id=onclick_example></canvas>

<script type=module>

    // getting and formatting the canvas element
    const cnv = document.getElementById (`onclick_example`)
    cnv.width = cnv.parentNode.scrollWidth
    cnv.height = cnv.width * 9 / 16

    // this array will store the coordinates
    // of the click events
    const coordinates = []

    // this function will take the
    // pointerEvent as an argument
    // and assign it to parameter 'e'
    function add_coordinate (e) {

        // adding to the coordinates array 
        // an object with x & y properties
        // storing the values associated 
        // with the .offsetX and .offsetY
        // properties of the pointerEvent
        // object assigned to parameter 'e' 
        coordinates.push ({
            x : e.offsetX,
            y : e.offsetY
        })
    }

    // adding the function to the 
    // .onclick property of the canvas
    // add_coordinate
    cnv.onclick = add_coordinate

    // getting a 2d context
    const ctx = cnv.getContext ('2d')    

    // function to draw animation frames
    function draw_frame () {

        // turquoise background
        ctx.fillStyle = `turquoise`
        ctx.fillRect (0, 0, cnv.width, cnv.height)

        // hotpink squares
        ctx.fillStyle = `hotpink`

        // go through the coordinates array
        coordinates.forEach (p => {

            // use the values on the x & y properties
            // of each object to draw a square
            ctx.fillRect (p.x - 10, p.y - 10, 20, 20)
        })

        // call itself recursively
        requestAnimationFrame (draw_frame)
    }

    // call the first frame
    requestAnimationFrame (draw_frame)
</script>

type to start

<div id=onkeypress_input></div>

<script type=module>

    // get and format div
    const div = document.getElementById (`onkeypress_input`)
    div.width = div.parentNode.scrollWidth
    div.style.height = `${ div.width * 9 / 32}px`
    div.style.backgroundColor = `tomato`
    div.style.textAlign  = 'center'
    div.style.lineHeight = div.style.height
    div.style.fontSize   = '36px'
    div.style.fontWeight = 'bold'
    div.style.fontStyle  = 'italic'
    div.style.color      = 'white'

    // array for the elements we will generate
    const free_elements = []

    // call initial frame
    requestAnimationFrame (physics_engine)

    // function to move the elements around
    function physics_engine () {

        // iterate through the free_elements array
        free_elements.forEach (e => {

            // if element is too far to the right
            if (e.offsetLeft > window.innerWidth) {

                // respawn it on the left
                e.style.left = `${ -e.offsetWidth }px`
            }

            // add the elements velocity to its position
            e.style.left = `${ e.offsetLeft + e.x_vel }px`
        })
        
        // call next frame
        requestAnimationFrame (physics_engine)
    }

    // function to generate elements
    // accepts some text as an argument
    // assigns it to the parameter 't'
    function set_free (t) {

        // create a div element
        const free_div = document.createElement (`div`)

        // assign the text that was passed in
        // to the innerText property of the div
        free_div.innerText = t 

        // format the div
        free_div.style.fontSize   = '36px'
        free_div.style.fontWeight = 'bold'
        free_div.style.fontStyle  = 'italic'
        free_div.style.color      = 'hotpink'

        // setting .position to 'fixed' means
        // the position is set against the viewport
        // rather than the document
        free_div.style.position   = 'fixed'

        // incorporate the div in the DOM
        document.body.append (free_div)

        // .offsetHeight is the height of the div element
        // multiplied by how many elements are already in
        // the free_elements array
        const y_offset = free_div.offsetHeight * free_elements.length

        // set the new element underneath the other elements
        free_div.style.top = `${ y_offset }px`

        // .offsetWidth is the width of the div
        // start the div to the left of the screen
        free_div.style.left = `${ -free_div.offsetWidth }px`

        // we can add properties to the DOM objects
        // simply assign to a new property
        // and the value stays there!
        // here we are storing a random x-velocity
        free_div.x_vel = Math.random () * 10

        // add the div to the free_elements array
        free_elements.push (free_div)
    }

    // the keypress listener exists on the document object
    // we assign to it a function that accepts a keyboardEvent
    // and assigns it to the parameter 'e'
    document.onkeypress = e => {

        // the .key property of the keyboardEvent 
        // contains what key was pressed
        // if it was Enter
        if (e.key == 'Enter') {

            // call the set_free function
            // with the existing innerText
            set_free (div.innerText)

            // clear the innerText
            div.innerText = ''
        }

        // if it is not enter
        else {

            // add that key to the
            // existing innerText
            div.innerText += e.key
        }
    }
</script>