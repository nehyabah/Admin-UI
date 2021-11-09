import './widgetsmall.css'
import { Visibility } from "@material-ui/icons"
import toolz from '../toolz.jpg'
import moro from '../moro.jpg'
import nae from '../nae.jpg'
import Damie from '../Damie.jpg'
import Mama from '../Mama.jpg'
import Ezy from '../Ezy.jpg'
export default function WidgetSmall() {
    return (
        <div className='widgetSm'>
                <span className="widgetSmTitle">New Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src={toolz} alt="" className='widgetSmImg' />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Tola Toye</span>
                        <span className="widgetSmUserTitle">Investment Banker</span>
                    </div>

                    <button className="widgetSmButton">
                    <Visibility className='widgetSmBtn'/> Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src={moro} alt="" className='widgetSmImg' />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Moro Dada</span>
                        <span className="widgetSmUserTitle">Complience Officer</span>
                    </div>

                    <button className="widgetSmButton">
                    <Visibility className='widgetSmBtn'/> Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src={nae} alt="" className='widgetSmImg' />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Nehemiah Abah</span>
                        <span className="widgetSmUserTitle">Software Developer</span>
                    </div>

                    <button className="widgetSmButton">
                    <Visibility className='widgetSmBtn'/> Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src={nae} alt="" className='widgetSmImg' />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Nehemiah Abah</span>
                        <span className="widgetSmUserTitle">Software Developer</span>
                    </div>

                    <button className="widgetSmButton">
                    <Visibility className='widgetSmBtn'/> Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src={nae} alt="" className='widgetSmImg' />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Nehemiah Abah</span>
                        <span className="widgetSmUserTitle">Software Developer</span>
                    </div>

                    <button className="widgetSmButton">
                    <Visibility className='widgetSmBtn'/> Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src={nae} alt="" className='widgetSmImg' />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Nehemiah Abah</span>
                        <span className="widgetSmUserTitle">Software Developer</span>
                    </div>

                    <button className="widgetSmButton">
                    <Visibility className='widgetSmBtn'/> Display
                    </button>
                </li>
                

            </ul>
        </div>
    )
}
