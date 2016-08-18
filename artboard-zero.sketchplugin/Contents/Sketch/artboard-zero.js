

var onArtboardChanged = function(context) {

	action = context.actionContext;
	document = action.document;

    document.showMessage("Triggered.");

	page = document.currentPage();
	artboards = page.artboards();

	count = artboards.count();
	if (count == 1) {

		// Get the first artboard
		firstArtboard = page.currentArtboard(); // artboards[0];

		// Move the artboard's frame to the origin
		frame = firstArtboard.frame();		
		frame.x = 0;
		frame.y = 0;

		// document.showMessage("Moved the first artboard to (0, 0).");

		// Deselect all layers
		// Then reselect the first artboard to reload the inspector
		// This is a workaround because MSDocument.reloadInspector(:) doesn't seem to work
		page.deselectAllLayers();
		firstArtboard.select_byExpandingSelection(true, true);

		// Center the view on the artboard
		view = document.currentView();
		tempFrame = firstArtboard.frame().scaleBy(1.2);

		offsetRect = firstArtboard.rect();
		view.zoomToFitRect(tempFrame.rect());
	}

};
