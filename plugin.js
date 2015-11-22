/**
 * plugin.js
 *
 * Released under LGPL License.
 * Copyright (c) 2015 SIRAP SAS All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

/*global tinymce:true */

tinymce.PluginManager.add('tabulation', function(editor) {

	editor.on('keydown', function(e) {
		// Check for tab but not ctrl/cmd+tab since it switches browser tabs
		if (e.keyCode != 9 || tinymce.util.VK.metaKeyPressed(e)) {
			return;
		}

		e.preventDefault();

		/**
		 * todo
		 * - configure indentation content with tinymce getParam()
		 */
		function indentSelection(){
			editor.insertContent('&nbsp; &nbsp; &nbsp; &nbsp;');
		}

		/**
		 * todo
		 * - INDENT/OUTDENT IF shift
		 * - INDENT IN START OF LINE
		 */
		function outdentSelection(){
			// todo
		}

		if (editor.dom.getParent(editor.selection.getStart(), 'p')) {

			if (e.shiftKey) {
				outdentSelection();
			} else {
				indentSelection();
			}
		}
	});
});
