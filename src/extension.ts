import * as vscode from "vscode";
import KeyListener from "./util/keylistener";
import Editor from "./util/editor";
import Insert from "./mode/insert";
import {
  moveLeft,
  moveRight,
  moveUp,
  moveDown,
  moveToBeginningOfLine,
  moveToEndOfLine,
  currentPostion,
  pageUp,
  pageDown,
  moveToBeginningOfFile,
  selectDown,
  selectUp,
  selectLeft,
  selectRight,
  selectpageUp,
  selectpageDown,
  selectToBeginningOfLine,
  selectToBeginningOfFile,
  selectToEndOfLine,
  selectToEndingOfFile,
  zoomin,
  zoomout,
  expandAll,
  collapsAll,
  zoomReset,
} from "./move/cursor";
export function activate(context: vscode.ExtensionContext) {
  console.log("Congratulations, your extension is now active!");
  const insert = new Insert();
  new KeyListener((keypress) => {
    console.log(keypress);
    const key = keypress.text as string;
    if (insert.mode === "insert") {
      vscode.commands.executeCommand("default:type", keypress);
    }
    //aAsSdDfFgGhHjJkKlL;:
    if (insert.mode === "view") {
      console.log(key);
      switch (key) {
        case " ":
          if (insert.mode !== "view") {
            vscode.commands.executeCommand("default:type", keypress);
          } else {
            vscode.commands.executeCommand("starshine.insertmodeon");
          }
          break;
        case "a":
          pageUp();
          break;
        case "A":
          selectpageUp();
          break;
        case "s":
          moveToBeginningOfLine();
          break;
        case "S":
          selectToBeginningOfLine();
        case "d":
          moveUp();
          break;
        case "D":
          selectUp();
          break;
        case "f":
          moveDown();
          break;
        case "F":
          selectDown();
          break;
        case "g":
          moveToBeginningOfFile();
          break;
        case "G":
          selectToBeginningOfFile();
        case "h":
          moveToEndOfLine();
          break;
        case "H":
          selectToEndingOfFile();
        case "j":
          moveLeft();
          break;
        case "J":
          selectLeft();
          break;
        case "k":
          moveRight();
          break;
        case "K":
          selectRight();
          break;
        case "l":
          moveToEndOfLine();
          break;
        case ";":
          pageDown();
          break;
        case ":":
          selectpageDown();
          break;
        case "V":
          zoomin();
          break;
        case "N":
          zoomout();
          break;
        case "v":
          expandAll();
          break;
        case "n":
          collapsAll();
          break;
        case "B":
          zoomReset();
      }
    }
  });
}

// this method is called when your extension is deactivated
export function deactivate() {
  console.log("Deactivated");
}
