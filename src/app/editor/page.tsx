import EditorPageContainer from './containers/editor-page';

interface EditorProps {
  apiKey?: string;
  initialFileName?: string;
  dataset?: string;
}

const Editor = ({ apiKey, initialFileName, dataset }: EditorProps) => {
  return (
    <EditorPageContainer
      apiKey={apiKey}
      fileName={initialFileName}
      dataset={dataset}
    />
  );
};

export default Editor;
