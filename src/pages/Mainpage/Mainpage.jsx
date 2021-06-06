import React from 'react'
import MainpageCSS from './MainpageCSS.module.css'

const Mainpage = () => {
    const username = localStorage.getItem('username')
    const imgurl ="https://fakeface.rest/thumb/view/"
    return (
        <div className={`container ${MainpageCSS.container}`}>
            <div className={`card ${MainpageCSS.card}`}>
                <span className={MainpageCSS.txtspan}>
                    <h4 className={MainpageCSS.h1}>Who would more likely to be the theif ?</h4>
                </span>
                <div className="row">
                    <div className="col-6">
                        <div className={MainpageCSS.imgdiv}>
                            <img src={imgurl + '1'} alt="logo" className={MainpageCSS.img} />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className={MainpageCSS.imgdiv}>
                            <img src={imgurl + '2'} alt="logo" className={MainpageCSS.img} />
                        </div>
                    </div>
                </div>
                
                <span className={MainpageCSS.span}>
                    <p className={MainpageCSS.counter}>30</p>
                </span>

                <div className="row mt-4">
                    <div className="col-6">
                        <div className={MainpageCSS.imgdiv}>
                            <img src={imgurl + '3'} alt="logo" className={MainpageCSS.img} />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className={MainpageCSS.imgdiv}>
                            <img src={imgurl + '4'} alt="logo" className={MainpageCSS.img} />
                        </div>
                    </div>
                </div>
                <p className={MainpageCSS.p}>Brain Wave</p>
            </div>
        </div>
    )
}

export default Mainpage
