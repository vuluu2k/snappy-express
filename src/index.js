import SnyStatus from './components/SnyStatus';
import SnyButton from './components/SnyButton';
import './styles/common.scss';

const returnLibrary = () => {
  return {
    SnyStatus: SnyStatus,
    SnyButton: SnyButton,
  };
};
export default returnLibrary();
