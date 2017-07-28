'use babel';

import { CompositeDisposable } from 'atom';

export default {

  subscriptions: null,

  activate(state) {
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'snake-case:format': () => this.format()
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  format() {
    let editor
    if (editor = atom.workspace.getActiveTextEditor()) {
        let selection = editor.getSelectedText()
        let snaked = selection.replace(/([A-Z])/g, function($1){return "_"+$1.toLowerCase();});
        editor.insertText(snaked);
    }
  }

};
