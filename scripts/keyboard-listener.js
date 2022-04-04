/*
 * References:
 * -----------
 * https://stackoverflow.com/questions/71242841/listen-to-keyboard-input-in-the-whole-blazor-page/71243751
 * https://docs.microsoft.com/en-us/aspnet/core/blazor/javascript-interoperability/call-dotnet-from-javascript?view=aspnetcore-6.0#invoke-an-instance-net-method
*/

window.TetrisFunctions = {
	addKeyboardListenerEvent: function (listener) {
		let serializeEvent = function (event) {
			if (event) {
				return {
					key: event.key,
					code: event.keyCode.toString(),
					location: event.location,
					repeat: event.repeat,
					ctrlKey: event.ctrlKey,
					shiftKey: event.shiftKey,
					altKey: event.altKey,
					metaKey: event.metaKey,
					type: event.type
				};
			}
		};

		window.document.addEventListener('keydown', function (event) {
			listener.invokeMethodAsync('BrowserKeyDownReceived', serializeEvent(event))
		});
	}
};