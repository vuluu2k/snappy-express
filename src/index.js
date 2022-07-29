import './styles/common.scss';
import SnyStatus from './components/SnyStatus';
import SnyButton from './components/SnyButton';
import SnyTabs from './components/SnyTabs';

const returnLibrary = () => {
  return {
    SnyStatus: SnyStatus,
    SnyButton: SnyButton,
    SnyTabs: SnyTabs,
  };
};
export default returnLibrary();
