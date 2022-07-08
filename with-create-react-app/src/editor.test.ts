/* eslint-disable testing-library/render-result-naming-convention */
import { renderEditor } from "jest-remirror";
import { HeadingExtension } from "remirror/extensions";

describe("heading", () => {
  // Render a editor with chosen extensions
  const editor = renderEditor([new HeadingExtension({})]);

  const {
    nodes: { doc, p },
    attributeNodes: { heading },
  } = editor;

  const h1 = heading({ level: 1 });
  const h2 = heading({ level: 2 });
  const h3 = heading({ level: 3 });
  const h4 = heading({ level: 4 });
  const h5 = heading({ level: 5 });
  const h6 = heading({ level: 6 });

  it("should turn a pargraph into a heading by typing # and space", () => {
    // Initialize the editor with an empty paragraph
    editor.add(doc(p("")));

    // Insert #
    editor.insertText("#");

    // Expect the editor to a paragraph with the #
    expect(editor.state.doc).toEqualRemirrorDocument(doc(p("#")));

    // Insert a space after the #
    editor.insertText(" ");

    // Expect the editor to have a heading now
    expect(editor.state.doc).toEqualRemirrorDocument(doc(h1("")));
  });
});
