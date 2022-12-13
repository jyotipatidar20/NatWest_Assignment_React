import { ImBin2 } from 'react-icons/im';
import { TiUserAddOutline} from 'react-icons/ti';

export default function Body() {
    return (
        <div id="Body">
            <p id="name">Name<span>*</span></p>

            <p id="bussiness"> Business Development Executive</p>
            <hr id="line"></hr>
            <p id="round"><TiUserAddOutline/> Interview Process Rounds</p>
            <div id="insidebox">
                <div id="ele1">
                    <h3 id="level">Level<span>*</span></h3>
                    <p id="one">1</p>
                    <hr id="line2"></hr></div>
                <div id="ele2">
                    <h3 id="secondname">Name <span>*</span></h3>
                    <p id="telephonic"><b>Telephonic Round</b></p>
                    <hr id="line12"></hr></div>
                <div id="ele3">
                    <h1 id="select">Select interviewer<span>*</span></h1>
                    <p id="people"><b>GIRISHPRASAD KS</b></p>
                    <hr id="line4"></hr></div>
                <div id="ele4"></div>
                <div id="ele5"></div>
                <div id="ele6"></div>
                <div id="ele7">
                    <h3 id="level">Level<span>*</span></h3>
                    <p id="one">2</p>
                    <hr id="line3"></hr></div>
                <div id="ele8">
                    <h3 id="secondname">Name <span>*</span></h3>
                    <p id="telephonic"><b>Telephonic Round</b></p>
                    <hr id="line12"></hr></div>
                <div id="ele9">
                    <h1 id="select">Select interviewer<span>*</span></h1>
                    <p id="people"><b>RAKESH APPAJI</b></p>
                    <hr id="line4"></hr></div>
            </div>
            <button id="thirdBtn">ADD NEW </button>
        <button id="updatebtn">Update</button>
        <button id="cancelbtn">CENCEL</button>
        {/* <button id="thirdBtn">ADD NEW </button> */}
        <div id="checkbox">
                <div id="grid4">
                    <button id="blackBtn">1</button></div>
                <div id="grid2">
                    <h1 id="bin"><ImBin2/></h1></div>
                <div id="grid4">
                    <button id="redBtn">2</button></div>
                <div id="grid2">
                <h1 id="bin"><ImBin2/></h1></div>
        
        </div>   
            {/* <div><button id="updatebtn">Update</button>
                        <button id="cancelbtn">CENCEL</button>
                        <button id="thirdBtn">ADD NEW </button></div> */}
        </div>
    )
}