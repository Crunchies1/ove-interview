## Part 2

The file at question (control/images.js) contains 3 top level functions. 

The reason I explain them in the order I did is because the first function is called in the second, and the second in the third. So I felt like explaining them in this order would make it easier to understand.

### sendViewportDetails()

Like the name, this function simply calculates the details of the current viewport (bounds, zoom level and dimensions) and sets the current state of the ove window to an object containing all those parameters. (The viewport is the user's visible area of the image) However, the current state is only changed if the viewport has changed. The current application state (contents of window.ove.state.current) is then sent as a WebSocket broadcast, updating the current state on all clients that receive the message.

### initControl(data, viewport)

Next, we have `initControl`. I will try and condense this into a short explanation. This takes a state and an optional viewport. The controller is resized in order to fit within the current window. If there already is a state, we use that state. Otherwise we initialise a new state. Any URL query params passed are taken into consideration so that we can set the states tileSources to that URL. (An OPS TileSource is an interface which contains the most basic implementation required to create a smooth transition between layers in an image pyramid.) Then the currentState is stored.

A small helper function is then defined called `setupHandlers`. This does exactly what it says it does, and sets up OpenSeadragon event handlers using a predefined constant and viewport details from `sendViewportDetails`. (Event handlers call functions when certain events happen) It then calls `sendViewportDetails` at the end of it.

The `initControl` function then loads OpenSeadragon with the current state and calls setupHandlers. If the viewport parameter was set, we hide the image until all processing has finished and the new viewport is calculated.

### beginInitialization()

Lastly, we have `beginInitialization`. This combines the previous two functions. This function firstly loads the current state and checks to see if it is attempting to load a new state. If the image has been preloaded and the we are not loading a new state, we call `initControl` with the current state and viewport (since we are not moving the viewport). Otherwise, if there is a new state being loaded, we simply call `initControl` with the state only. This means that the details of the new viewport will be calculated in the `initControl` function. If we don't fall in either of those categories, we load the default state. 


