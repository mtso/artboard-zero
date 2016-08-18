

var onArtboardChanged = function(context) {
	app = NSApp.delegate();
	app.openPreferencesWindowWithPreferencePaneIdentifier("plugins");

	action = context.actionContext;

	document = action.document;

	view = document.currentView();
	page = document.currentPage();

	rectToCenter = page.rect();

	artboards = page.artboards();

	count = artboards.count();

	if (count == 1) {
		document.showMessage("Moved the first artboard to (0, 0).");

		firstArtboard = artboards[0];

		frame = firstArtboard.frame();
		
		frame.x = 0;
		frame.y = 0;

		view.centerRect(rectToCenter);
	}

};