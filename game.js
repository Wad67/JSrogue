// Check if rot.js can work on this browser
if (!ROT.isSupported()) {
    alert("The rot.js library isn't supported by your browser.");
} else {
    // Good to go!
}

var display = new ROT.Display({width:80, height:80});
var container = display.getContainer();
document.body.appendChild(container);
display.drawText(2, i, colors + "Hello, world!");
var foreground, background, colors;
//for (var i = 0; i < 15; i++) {
    // Calculate the foreground color, getting progressively darker
    // and the background color, getting progressively lighter.
//    foreground = ROT.Color.toRGB([255 - (i*20),
                                  255 - (i*20),
                                  255 - (i*20)]);
 //   background = ROT.Color.toRGB([i*20, i*20, i*20]);
    // Create the color format specifier.
 //   colors = "%c{" + foreground + "}%b{" + background + "}";
    // Draw the text at col 2 and row i
    
//}
