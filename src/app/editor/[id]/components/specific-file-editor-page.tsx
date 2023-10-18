import Loading from '@/components/loading';

import EditorPageContainer from '../../containers/editor-page';

interface SpecificFileEditorPageProps {
  fileName: string;
  dataset: string;
}

const SpecificFileEditorPage = ({
  fileName,
  dataset,
}: SpecificFileEditorPageProps) => {
  if (dataset) {
    return <EditorPageContainer fileName={fileName} dataset={dataset} />;
  } else {
    return <Loading />;
  }
};

export default SpecificFileEditorPage;
