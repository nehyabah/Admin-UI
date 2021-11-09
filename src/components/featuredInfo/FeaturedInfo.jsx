import './featuredInfo.css'
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'

export const FeaturedInfo = () => {
    return (
        <div className='featured'>
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">£2,500</span>
                    <span className="featuredMoneyRate">-30.89 <ArrowDownward className='featuredIcon negative'/> </span>
                </div>
                <span className="featuredSub">Compared to last Month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">£8,570</span>
                    <span className="featuredMoneyRate">-3.86 <ArrowDownward className='featuredIcon negative'/> </span>
                </div>
                <span className="featuredSub">Compared to last Month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">£4,550</span>
                    <span className="featuredMoneyRate">9.89 <ArrowUpward className='featuredIcon'/> </span>
                </div>
                <span className="featuredSub">Compared to last Month</span>
            </div>
            
        </div>
    )
}
