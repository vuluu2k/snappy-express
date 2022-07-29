import './styles/common.scss';
import SnyStatus from './components/SnyStatus';
import SnyButton from './components/SnyButton';

const returnLibrary = () => {
  return {
    SnyStatus: SnyStatus,
    SnyButton: SnyButton,
  };
};
export default returnLibrary();
