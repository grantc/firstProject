exports.baseController = "application/controllers/abstractWindow";

var args = arguments[0] || {};
var application = args.application;
var controller = args.controller;

// Set the Ti.UI.Window
$.window = controller.window;
$.window.addEventListener('open', onOpen);
$.window.addEventListener('close', onClose);

$.isPopup = true;
$.isPopover = true;
$.type = 'popover';

function onOpen(e) {
	$.onOpenWindow(e);
}

function onClose(e) {
	$.onCloseWindow(e);
}
exports.isNarrow = function() {
	return true;
};
