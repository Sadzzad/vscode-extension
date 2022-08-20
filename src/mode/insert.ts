import * as vscode from "vscode";
import * as Cursor from "../move/cursor";
export default class Insert {
  public mode: "insert" | "view" = "view";
  constructor() {
    this.insertOn();
    this.insertOff();
    this.backspace();
  }
  private insertOn() {
    vscode.commands.registerCommand("starshine.insertmodeon", () => {
      this.mode = "insert";
    });
  }
  private insertOff() {
    vscode.commands.registerCommand("starshine.insertmodeoff", () => {
      this.mode = "view";
    });
  }
  private backspace() {
    vscode.commands.registerCommand("starshine.backspace", () => {
      if (this.mode === "insert") {
        vscode.commands.executeCommand("deleteLeft");
      }
    });
  }
}
