
import SnyStatus from "./components/SnyStatus";
import './styles/common.scss'

const returnLibrary = () => {
  return {
    SnyStatus: SnyStatus
      // you can add here other components that you want to export
  }
}
export default returnLibrary()