import { FaRegUserCircle } from 'react-icons/fa';
import { ImCancelCircle } from 'react-icons/im';
// import { RxCrossCircled } from 'react-icons/rx';
export default  function Header(){
    return (
        <div id="header">
            <h1 id="interview"><FaRegUserCircle/>  INTERVIEW PROCESS</h1>
            <h1 id="cross"><ImCancelCircle/></h1>
        </div>
    )
}