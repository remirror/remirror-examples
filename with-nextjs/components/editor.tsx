import "remirror/styles/all.css";

import { OnChangeJSON, Remirror, useRemirror } from "@remirror/react";
import { useCallback, useState } from "react";
import type { RemirrorJSON } from "remirror";
import { BoldExtension } from "remirror/extensions";

const STORAGE_KEY = "remirror-editor-content";

const Editor: React.FC = () => {
  const [initialContent] = useState<RemirrorJSON | undefined>(() => {
    // Retrieve the JSON from localStorage (or undefined if not found)
    const content = window.localStorage.getItem(STORAGE_KEY);
    return content ? JSON.parse(content) : undefined;
  });

  const handleEditorChange = useCallback((json: RemirrorJSON) => {
    // Store the JSON in localStorage
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(json));
  }, []);

  return (
    <CoreEditor onChange={handleEditorChange} initialContent={initialContent} />
  );
};

interface MyEditorProps {
  onChange: (json: RemirrorJSON) => void;
  initialContent?: RemirrorJSON;
}

const CoreEditor: React.FC<MyEditorProps> = ({ onChange, initialContent }) => {
  const { manager } = useRemirror({ extensions: () => [new BoldExtension({})] });
  return (
    <div style={{ width: "100%", maxWidth: "500px" }}>
      <Remirror
        placeholder="Enter text..."
        manager={manager}
        autoRender={true}
        initialContent={initialContent}
      >
        <OnChangeJSON onChange={onChange} />
      </Remirror>
    </div>
  );
};

export default Editor;
