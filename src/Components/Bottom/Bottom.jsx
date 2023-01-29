import React from 'react'
import '../../style.css'
import Img1 from '../../images/image-colton.jpg'
import Img2 from '../../images/image-irene.jpg'
import Img3 from '../../images/image-anne.jpg'

const Bottom = () => {
    return (
        <div className="bottom">
            <div className="bottom-card top">
                <div className="bottom-card_user">
                    <img src={Img1} alt="" />
                    <section className='bottom-card_user_name'>
                        <h3>Colton Smith</h3>
                        <strong>Verified Buyer</strong>
                    </section>
                </div>
                <p>"We needed the same printed design as the one we had ordered a week prior.
                    Not only did they find the original order, but we also received it in time.
                    Excellent!"
                </p>
            </div>

            <div className="bottom-card">
                <div className="bottom-card_user">
                    <img src={Img2} alt="" />
                    <section className='bottom-card_user_name'>
                        <h3>Irene Roberts</h3>
                        <strong>Verified Buyer</strong>
                    </section>
                </div>
                <p>"Customer service is always excellent and very quick turn around. Completely
                    delighted with the simplicity of the purchase and the speed of delivery."
                </p>
            </div>

            <div className="bottom-card bot">
                <div className="bottom-card_user">
                    <img src={Img3} alt="" />
                    <section className='bottom-card_user_name'>
                        <h3>Anne Wallace</h3>
                        <strong>Verified Buyer</strong>
                    </section>
                </div>
                <p>"Put an order with this company and can only praise them for the very high
                    standard. Will definitely use them again and recommend them to everyone!"
                </p>
            </div>
        </div>
    )
}

export default Bottom
