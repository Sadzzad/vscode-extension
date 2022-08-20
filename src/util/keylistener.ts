import * as vscode from "vscode";
export default class KeyListener {
  constructor(func: (keypress: any) => void) {
    vscode.commands.registerCommand("type", func);
  }
}
