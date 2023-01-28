import React from 'react'
import '../../style.css'
import Star from '../../images/icon-star.svg'

const Top = () => {
    return (
        <div className='main-top'>
            <article className='main-top-goal'>
                <h1>10,000+ of our users love our products.</h1>
                <p>We only provide great products combined with excellent customer service.
                    See what our satisfied customers are saying about our services.
                </p>
            </article>

            <div class='main-top-stars'>
                <article className="ratings left">
                    <div className='ratings-star'>
                        <img src={Star} alt="" />
                        <img src={Star} alt="" />
                        <img src={Star} alt="" />
                        <img src={Star} alt="" />
                        <img src={Star} alt="" />
                    </div>
                    <h2>Rated 5 Stars in Reviews</h2>
                </article>
                <article className="ratings">
                    <div className='ratings-star'>
                        <img src={Star} alt="" />
                        <img src={Star} alt="" />
                        <img src={Star} alt="" />
                        <img src={Star} alt="" />
                        <img src={Star} alt="" />
                    </div>
                    <h2>Rated 5 Stars in Report Guru</h2>
                </article>
                <article className="ratings right">
                    <div className='ratings-star'>
                        <img src={Star} alt="" />
                        <img src={Star} alt="" />
                        <img src={Star} alt="" />
                        <img src={Star} alt="" />
                        <img src={Star} alt="" />
                    </div>
                    <h2>Rated 5 Stars in BestTech</h2>
                </article>
            </div>
        </div>
    )
}

export default Top
