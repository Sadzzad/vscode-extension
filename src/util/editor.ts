import * as vscode from "vscode";
export default class Editor {
  constructor() {
    const editor = vscode.window.activeTextEditor;

    return editor as vscode.TextEditor;
  }
}
