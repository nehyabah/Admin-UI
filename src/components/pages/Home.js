import Chart from '../Chart/Chart'
import { FeaturedInfo } from '../featuredInfo/FeaturedInfo'
import './home.css'
import { userData } from '../../data';
import WidgetSmall from '../WidgetSmall/WidgetSmall';
import WidgetLarge from '../WidgetLLarge/WidgetLarge';

export default function Home() {
    return (
        <div className='home'>
            <FeaturedInfo />
            <Chart data={userData} title='User Analytics' grid dataKey='Active User' />
            <div className="homewidget">
                <WidgetSmall />
                <WidgetLarge/>
            </div>
        </div>
    )
}
