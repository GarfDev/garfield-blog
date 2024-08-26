import {
  $convertFromMarkdownString,
  $convertToMarkdownString,
  registerMarkdownShortcuts,
  TRANSFORMERS,
} from '@lexical/markdown';
import React from 'react';

import { CodeNode } from '@lexical/code';
import { LinkNode } from '@lexical/link';
import { ListItemNode, ListNode } from '@lexical/list';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { HeadingNode, QuoteNode } from '@lexical/rich-text';

import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import ToolbarPlugin from './plugins/ToolbarPlugin';
import EditorTheme from './theme';

import './index.css';

// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.
function onError(error: Error) {
  console.error(error);
}

interface Props {
  defaultValue?: string;
}

function Editor({ defaultValue = "" }: Props) {


  const initialConfig = {
    nodes: [
      HeadingNode,
      QuoteNode,
      CodeNode,
      ListNode,
      ListItemNode,
      LinkNode,
    ],
    namespace: 'Meocam Editor',
    theme: EditorTheme,
    onError,
  };



  return (
    <LexicalComposer initialConfig={{ ...initialConfig, editorState: (editor) => {
      
    } }}>
      <div className="editor-container text-white">
        <ToolbarPlugin />
        <div className="editor-inner">
          <RichTextPlugin
            contentEditable={
              <EditorEditable />
            }
            ErrorBoundary={LexicalErrorBoundary}
          />
          <HistoryPlugin />
          <AutoFocusPlugin />
          <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
        </div>
      </div>
    </LexicalComposer>
  );
}

export default Editor;

const EditorEditable = () => {

  const [editor] = useLexicalComposerContext();

  registerMarkdownShortcuts(editor, TRANSFORMERS);

  return (
    <ContentEditable
      className="editor-input text-white placeholder-white"
      aria-placeholder={"Meocam"}
      placeholder={
        <div className="editor-placeholder text-gray-500">Viết gì đi ông già</div>
      }
    />
  )
}