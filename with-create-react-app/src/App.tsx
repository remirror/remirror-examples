import {
  BasicFormattingButtonGroup,
  DataTransferButtonGroup,
  HeadingLevelButtonGroup,
  HistoryButtonGroup,
  Remirror,
  ThemeProvider,
  Toolbar,
  useRemirror,
  VerticalDivider,
} from "@remirror/react";
import { AllStyledComponent } from "@remirror/styles/emotion";
import {
  BoldExtension,
  HeadingExtension,
  ItalicExtension,
  UnderlineExtension,
} from "remirror/extensions";

const extensions = () => [
  new HeadingExtension(),
  new BoldExtension(),
  new ItalicExtension(),
  new UnderlineExtension(),
];

function EditorToolbar() {
  return (
    <Toolbar>
      <HistoryButtonGroup />
      <VerticalDivider />
      <DataTransferButtonGroup />
      <VerticalDivider />
      <HeadingLevelButtonGroup />
      <VerticalDivider />
      <BasicFormattingButtonGroup />
      <VerticalDivider />
    </Toolbar>
  );
}

export default function App() {
  const { manager, state } = useRemirror({
    extensions,
    content: "<p><u>Hello</u> there <b>friend</b> and <em>partner</em>.</p>",
    selection: "end",
    stringHandler: "html",
  });
  return (
    <AllStyledComponent>
      <ThemeProvider>
        <Remirror
          manager={manager}
          initialContent={state}
          autoFocus
          autoRender="end"
        >
          <EditorToolbar />
        </Remirror>
      </ThemeProvider>
    </AllStyledComponent>
  );
}
