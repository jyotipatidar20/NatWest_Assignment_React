import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiUserCheck } from 'react-icons/bi';
import { MdOutlineNaturePeople} from 'react-icons/md';
import { MdPayment } from 'react-icons/md';
import { RiShoppingBasket2Fill } from 'react-icons/ri';
import {RiTableAltFill } from 'react-icons/ri';
import { MdOutlineSettingsSuggest } from 'react-icons/md';
import { TbArrowBearRight2 } from 'react-icons/tb';
import { SlUserFemale } from 'react-icons/sl';
// import { AiOutlineHome } from 'react-icons/ai';

export default  function Footer(){
    return (
        <div id="Footer">
            <table>
                <tr>
                    <td   class="item1"><AiOutlineHome/> Dashboard</td>
                </tr>
                <tr>
                    <td  class="item2"><AiOutlineUser/> Employee {"<"}</td>
                </tr>
                <tr>
                    <td class="item3"><BiUserCheck/> Attendance  {"<"}</td>
                </tr>
                <tr>
                    <td class="item4"><MdOutlineNaturePeople/> Site/Field,Track{"<"}</td>
                </tr>
                <tr>
                    <td class="item5"><MdPayment/> Payroll{"<"}</td>
                </tr>
                <tr>
                    <td class="item6"><RiShoppingBasket2Fill/>Statuatory Compliance{"<"}</td>
                </tr>
                <tr>
                    <td class="item7"><RiTableAltFill/> Leaves{"<"}</td>
                </tr>
                <tr>
                    <td class="item8"><MdOutlineSettingsSuggest/> Asset Management{"<"}</td>
                </tr>
                <tr>
                    <td class="item9"><TbArrowBearRight2/>Goal And performance{"<"}</td>
                </tr>
                <tr>
                    <td class="item10"><SlUserFemale/><select id="recruit"><option>Recruitment</option></select>
                    <tr>
                    <td class="item11">Opening</td>
                </tr>
                <tr>
                    <td class="item12">Candidates</td>
                </tr>
                <tr>
                    <td class="item13">Interview process</td>
                </tr>
                    
                    </td>
                </tr>
                
            </table>
        </div>
    )
}