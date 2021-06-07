import React, { useEffect, useState, useRef } from 'react'
import MainpageCSS from './MainpageCSS.module.css'
import firebase from '../../utils/firebase'


const Mainpage = () => {
    // State for Counter
    const [counter, setCounter] = useState('')
    const [qn, setQn] = useState('')
    const [data, setData] = useState([])
    const [images, setImages] = useState([])
    // const [images, setImages] = useState([])
    const [isLoaded,setIsLoaded] = useState(false);
    const initial = useRef(true);


    useEffect(() => {
        const ref = firebase.database().ref('data').child(555);
        ref.on('value', (snapshot) => {
          const all = snapshot.val();
          const array = [];
          setData(all);
          setImages(all.images)
        });
      }, []);

      console.log(data);

    const imgurl = "https://thumb.fakeface.rest/thumb_"

    function getCounter() {
        var d = new Date();
        var h = d.getUTCHours();
        var m = d.getUTCMinutes();
        var s = d.getUTCSeconds();
        var secondsUntilEndOfDate = 24 * 60 * 60 - h * 60 * 60 - m * 60 - s;
        var questionNo = Math.trunc(secondsUntilEndOfDate / 30)
        var remainder = (secondsUntilEndOfDate % 30)
        return [questionNo, remainder]
    }



    // JSX
    return (
        <div className={`container ${MainpageCSS.container}`}>
            <div className={`card ${MainpageCSS.card}`}>
                <span className={MainpageCSS.txtspan}>
                    <h4 className={MainpageCSS.h1}>{data.question}</h4>
                </span>
                <div className="row">
                    <div className="col-6">
                        <div className={MainpageCSS.imgdiv}>
                            <img src={imgurl + images[0]} alt="logo" className={MainpageCSS.img} draggable="false" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className={MainpageCSS.imgdiv}>
                            {/* <img src={imgurl + images[1]} alt="logo" className={MainpageCSS.img} draggable="false" /> */}
                        </div>
                    </div>
                </div>

                <span className={MainpageCSS.span}>
                    <p className={MainpageCSS.counter}>{('0' + counter).slice(-2)}</p>
                </span>

                <div className="row mt-4">
                    <div className="col-6">
                        <div className={MainpageCSS.imgdiv}>
                            {/* <img src={imgurl + images[2]} alt="logo" className={MainpageCSS.img} draggable="false" /> */}
                        </div>
                    </div>
                    <div className="col-6">
                        <div className={MainpageCSS.imgdiv}>
                            {/* <img src={imgurl + images[3]} alt="logo" className={MainpageCSS.img} draggable="false" /> */}
                        </div>
                    </div>
                </div>
                <p className={MainpageCSS.p}>Brain Wave</p>
            </div>
        </div>
    )
}

export default Mainpage
