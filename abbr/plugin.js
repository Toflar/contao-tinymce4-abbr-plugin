/**
 * Plugin for tinyMCE that provides the "<abbr>" HTML tag
 *
 * @copyright  terminal42 gmbh 2014
 * @author     Yanick Witschi <yanick.witschi@terminal42.ch>
 * @license    LGPL
 */
tinymce.PluginManager.add('abbr', function(editor) {
    function showDialog() {

        var data = {}, parentNode;

        parentNode = editor.dom.getParent(editor.selection.getNode(), 'abbr');

        if (parentNode) {
            data.title = parentNode.title;
            data.abbr  = parentNode.innerText || parentNode.textContent;
        } else {
            data.title = '';
            data.abbr  = editor.selection.getContent({format: 'text'})
        }

        editor.windowManager.open({
            title: "Abbreviation",
            data: data,
            body: [
                {
                    name: 'abbr',
                    type: 'textbox',
                    label: 'Abbreviation'
                },
                {
                    name: 'title',
                    type: 'textbox',
                    label: 'Title'
                }
            ],
            onsubmit: function(e) {

                if (parentNode) {
                    editor.execCommand('mceRemoveNode', false, parentNode);
                }

                editor.selection.setNode(tinymce.activeEditor.dom.create('abbr', {title: e.data.title}, e.data.abbr));
            }
        });
    }

    editor.addMenuItem('abbr', {
        text: 'Insert/edit abbreviation',
        context: 'insert',
        onclick: showDialog
    });
});

// German translation
tinymce.addI18n('de', {
    'Insert/edit abbreviation': 'Abkürzung editieren/einfügen',
    'Abbreviation': 'Abkürzung'
});
