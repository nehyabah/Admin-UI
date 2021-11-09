import "./widgetLarge.css"
import { Visibility } from "@material-ui/icons"
import Ezy from '../Ezy.jpg'
import Damie from '../Damie.jpg'
import Mama from '../Mama.jpg'

const Button = ({ type }) => {
    return <button className={'widgetLgButton ' + type}>{type}</button>
}
export default function WidgetLarge() {
    return (
        <div className='widgetLg'>
            <h3 className="widgetLgTitle">Latest Transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src={Ezy} alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Ezra Abah</span>
                    </td>
                    <td className="widgetLgDate">24 Sep 2021</td>
                    <td className="widgetLgAmount">£150.00</td>
                    <td className="widgetLgStatus"> <Button type ='Approved'/> </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src={Damie} alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Damie Adeladan</span>
                    </td>
                    <td className="widgetLgDate">24 Sep 2021</td>
                    <td className="widgetLgAmount">£1980.00</td>
                    <td className="widgetLgStatus"> <Button type ='Approved'/> </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src={Ezy} alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Ezra Abah</span>
                    </td>
                    <td className="widgetLgDate">24 Sep 2021</td>
                    <td className="widgetLgAmount">£160.00</td>
                    <td className="widgetLgStatus"> <Button type ='Declined'/> </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src={Ezy} alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Ezra Abah</span>
                    </td>
                    <td className="widgetLgDate">24 Sep 2021</td>
                    <td className="widgetLgAmount">£90.00</td>
                    <td className="widgetLgStatus"> <Button type ='Pending'/> </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src={Mama} alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Michelle Alfa</span>
                    </td>
                    <td className="widgetLgDate">27 Sep 2021</td>
                    <td className="widgetLgAmount">£600.00</td>
                    <td className="widgetLgStatus"> <Button type ='Declined'/> </td>
                </tr>
            </table>
        </div>
    )
}
