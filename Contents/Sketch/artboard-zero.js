

var onArtboardChanged = function(context) {

	action = context.actionContext;

	document = action.document;
	
	page = document.currentPage();

	artboards = page.artboards();

	count = artboards.count();

	if (count == 1) {
		document.showMessage("Moved the first artboard to (0, 0).");

		firstArtboard = artboards[0];

		frame = firstArtboard.frame();
		
		frame.x = 0;
		frame.y = 0;


		view = document.currentView();
		rectToCenter = page.rect();
		view.centerRect(rectToCenter);

		page.deselectAllLayers();

		firstArtboard.select_byExpandingSelection(true, true);
	}

};
