import * as vscode from "vscode";
import Editor from "../util/editor";
const editor = new Editor() as vscode.TextEditor;
function moveLeft() {
  if (editor) {
    vscode.commands.executeCommand("cursorLeft");
  }
}
function moveRight() {
  if (editor) {
    vscode.commands.executeCommand("cursorRight");
  }
}
function moveUp() {
  if (editor) {
    vscode.commands.executeCommand("cursorUp");
  }
}
function moveDown() {
  if (editor) {
    vscode.commands.executeCommand("cursorDown");
  }
}
function moveToBeginningOfLine() {
  if (editor) {
    vscode.commands.executeCommand("cursorHome");
  }
}
function moveToEndOfLine() {
  if (editor) {
    vscode.commands.executeCommand("cursorEnd");
  }
}
function currentPostion() {
  if (editor) {
    const position = editor.selection.active;
    return position;
  }
}
function moveToBeginningOfFile() {
  if (editor) {
    vscode.commands.executeCommand("cursorTop");
  }
}
function moveToEndingOfFile() {
  if (editor) {
    vscode.commands.executeCommand("cursorBottom");
  }
}
function pageUp() {
  if (editor) {
    vscode.commands.executeCommand("cursorPageUp");
  }
}
function pageDown() {
  if (editor) {
    vscode.commands.executeCommand("cursorPageDown");
  }
}
function collapsAll() {
  if (editor) {
    vscode.commands.executeCommand("editor.foldAll");
  }
}
function expandAll() {
  if (editor) {
    vscode.commands.executeCommand("editor.unfoldAll");
  }
}
function selectLeft() {
  if (editor) {
    vscode.commands.executeCommand("cursorLeftSelect");
  }
}
function selectRight() {
  if (editor) {
    vscode.commands.executeCommand("cursorRightSelect");
  }
}
function selectUp() {
  if (editor) {
    vscode.commands.executeCommand("cursorUpSelect");
  }
}
function selectDown() {
  if (editor) {
    vscode.commands.executeCommand("cursorDownSelect");
  }
}
function selectToBeginningOfLine() {
  if (editor) {
    vscode.commands.executeCommand("cursorHomeSelect");
  }
}
function selectToEndOfLine() {
  if (editor) {
    vscode.commands.executeCommand("cursorEndSelect");
  }
}
function zoomin() {
  if (editor) {
    vscode.commands.executeCommand("workbench.action.zoomIn");
  }
}
function zoomout() {
  if (editor) {
    vscode.commands.executeCommand("workbench.action.zoomOut");
  }
}
function zoomReset() {
  if (editor) {
    vscode.commands.executeCommand("workbench.action.zoomReset");
  }
}
function selectpageUp() {
  if (editor) {
    vscode.commands.executeCommand("cursorPageUpSelect");
  }
}
function selectpageDown() {
  if (editor) {
    vscode.commands.executeCommand("cursorPageDownSelect");
  }
}
function selectToBeginningOfFile() {
  if (editor) {
    vscode.commands.executeCommand("cursorTopSelect");
  }
}
function selectToEndingOfFile() {
  if (editor) {
    vscode.commands.executeCommand("cursorBottomSelect");
  }
}
export {
  moveLeft,
  moveRight,
  moveUp,
  moveDown,
  moveToBeginningOfLine,
  moveToEndOfLine,
  currentPostion,
  moveToBeginningOfFile,
  moveToEndingOfFile,
  pageUp,
  pageDown,
  collapsAll,
  expandAll,
  selectLeft,
  selectRight,
  selectUp,
  selectDown,
  selectToBeginningOfLine,
  selectToEndOfLine,
  zoomin,
  zoomout,
  selectpageDown,
  selectpageUp,
  selectToBeginningOfFile,
  selectToEndingOfFile,
  zoomReset,
};
