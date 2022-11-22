import { ArrowDownward, ArrowUpward } from "@mui/icons-material"
import React from "react"
import "./feature.css"

const Feature = () => {
  return (
    <>
      <div className='feature'>
        <div className='featureItem'>
          <span className='featureTitel'>Users</span>
          <div className='featuredMoneyContainer'>
            <span className='featureMoney'>210</span>
            {/* <span className='featureMoneyRate'>
              -11.4 <ArrowDownward className='featureIcon negative' />
            </span> */}
          </div>
          {/* <span className='featuredSub'>Bandingkan dengan bulan sebelumnya</span> */}
        </div>

        <div className='featureItem'>
          <span className='featureTitel'>Postingan</span>
          <div className='featuredMoneyContainer'>
            <span className='featureMoney'>100</span>
            {/* <span className='featureMoneyRate'>
              -2.4 <ArrowDownward className='featureIcon negative' />
            </span> */}
          </div>
          {/* <span className='featuredSub'>Bandingkan dengan bulan sebelumnya</span> */}
        </div>
     
      </div>
    </>
  )
}

export default Feature
