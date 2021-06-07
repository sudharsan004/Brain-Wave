import React, { useEffect, useState, useRef } from 'react'
import MainpageCSS from './MainpageCSS.module.css'
import firebase from '../../utils/firebase'


const Mainpage = () => {
    // State for Counter
    const [counter, setCounter] = useState('')
    const [data, setData] = useState([])
    const [images, setImages] = useState([])
    const [isLoaded,setIsLoaded] = useState(false);
    const initial = useRef(true);


    function get(id) {
        const ref = firebase.database().ref('data').child(id);
        ref.once('value', (snapshot) => {
            return(snapshot.val());
        });
    }

    const imgurl = "https://thumb.fakeface.rest/thumb/_"

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

    useEffect(() => {
        let [questionNo, remainder] = getCounter();
        setInterval(() => {
            let [questionNo, remainder] = getCounter();

            setCounter(remainder);

        }, 1000)
        if(initial.current){
            console.log(questionNo);
            get(questionNo);
            console.log(get(questionNo));
            initial.current = false;
            setIsLoaded(true)
        }
        if(counter === 0){
            console.log(questionNo-1);
            if(questionNo !== 0){
                get(questionNo - 1)
                setIsLoaded(true)
            }
            else{
                get(questionNo)
                setIsLoaded(true)
            }
            console.log(isLoaded);
        }
    }, [counter])



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
                            <img src={imgurl + images[1]} alt="logo" className={MainpageCSS.img} draggable="false" />
                        </div>
                    </div>
                </div>

                <span className={MainpageCSS.span}>
                    <p className={MainpageCSS.counter}>{('0' + counter).slice(-2)}</p>
                </span>

                <div className="row mt-4">
                    <div className="col-6">
                        <div className={MainpageCSS.imgdiv}>
                            <img src={imgurl + images[2]} alt="logo" className={MainpageCSS.img} draggable="false" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className={MainpageCSS.imgdiv}>
                            <img src={imgurl + images[3]} alt="logo" className={MainpageCSS.img} draggable="false" />
                        </div>
                    </div>
                </div>
                <p className={MainpageCSS.p}>Brain Wave</p>
            </div>
        </div>
    )
}

export default Mainpage
