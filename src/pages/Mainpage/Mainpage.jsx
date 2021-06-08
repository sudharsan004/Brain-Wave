import React, { useEffect, useState, useRef } from 'react'
import MainpageCSS from './MainpageCSS.module.css'
import firebase from '../../utils/firebase'

import 'react-circular-progressbar/dist/styles.css'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';

const Mainpage = () => {
    // State for Counter
    const [counter, setCounter] = useState('')
    // const [qn, setQn] = useState('')
    const [data, setData] = useState([])
    const [images, setImages] = useState([])
    const [votes, setVotes] = useState([0, 0, 0, 0])
    const [selected, setSelected] = useState(false)
    // const [images, setImages] = useState([])
    // const [isLoaded,setIsLoaded] = useState(false);
    // const initial = useRef(true);

    // loading img
    var loading_img = "https://cutewallpaper.org/21/loading-gif-transparent-background/Tag-For-Transparent-Spinner-Icon-Pehliseedhi-Suitable-.gif"
    loading_img = "https://abucoins.com/img/trade/pre-loading.gif"

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

    function getData() {
        var [qNo, rem] = getCounter()
        const ref = firebase.database().ref('data').child(qNo);
        ref.on('value', (snapshot) => {
            const all = snapshot.val();
            //   const array = [];
            setData(all);
            console.log(all)
            setImages(all.images)
        });
    }

    function updateData() {
        var [qNo, rem] = getCounter()
        const ref = firebase.database().ref('data').child(qNo);
        ref.update({
            ...data,
            "votes": [0, 0, 0, 0]
        })

    }

    useEffect(() => {
        getData()
    }, []);


    useEffect(() => {
        let interval = setInterval(() => {
            let [qNo, rem] = getCounter()
            setCounter(rem)
            if (rem === 29) {
                getData()
                setVotes([0,0,0,0])
                setSelected(false)
            }
        }, 1000)
        return function cleanup() {
            console.log("cleaning up");
            clearInterval(interval);
        };
    }, [])
    //   console.log(data);

    const imgurl = "https://thumb.fakeface.rest/thumb_"

    function handleClick(e) {
        if (!selected) {
            var target = e.target
            var img_no = target.alt
            // setVotes(p => { p[img_no] += 1; return p })
            var r=Math.random()
            setVotes([Math.random()*50,Math.random()*20,Math.random()*40,Math.random()*80])
            setSelected(true)
        }

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
                            <CircularProgressbarWithChildren value={votes[0]}
                                styles={{
                                    path: {
                                        // Path color
                                        stroke: `#2fdecc`
                                    },
                                    trail: {
                                        // Trail color
                                        stroke: '#eeeeee',
                                    }
                                }}>
                                <img src={imgurl + images[0]} alt="0" onClick={handleClick} className={MainpageCSS.img} draggable="false" onError={(e) => e.target.src = loading_img} />
                            </CircularProgressbarWithChildren>                        </div>
                    </div>
                    <div className="col-6">
                        <div className={MainpageCSS.imgdiv}>
                            <CircularProgressbarWithChildren value={votes[1]}
                                styles={{
                                    path: {
                                        // Path color
                                        stroke: `#2fdecc`
                                    },
                                    trail: {
                                        // Trail color
                                        stroke: '#eeeeee',
                                    }
                                }}>
                                <img src={imgurl + images[1]} alt="1" onClick={handleClick} className={MainpageCSS.img} draggable="false" onError={(e) => e.target.src = loading_img} />
                            </CircularProgressbarWithChildren>                        </div>
                    </div>
                </div>

                <span className={MainpageCSS.span}>
                    <p className={MainpageCSS.counter}>{('0' + counter).slice(-2)}</p>
                </span>

                <div className="row mt-4">
                    <div className="col-6">
                        <div className={MainpageCSS.imgdiv}>
                            <CircularProgressbarWithChildren value={votes[2]}
                                styles={{
                                    path: {
                                        // Path color
                                        stroke: `#2fdecc`
                                    },
                                    trail: {
                                        // Trail color
                                        stroke: '#eeeeee',
                                    }
                                }}>
                                <img src={imgurl + images[2]} alt="2" onClick={handleClick} className={MainpageCSS.img} draggable="false" onError={(e) => e.target.src = loading_img} />
                            </CircularProgressbarWithChildren>                        </div>
                    </div>
                    <div className="col-6">
                        <div className={MainpageCSS.imgdiv}>
                            <CircularProgressbarWithChildren value={votes[3]}
                                styles={{
                                    path: {
                                        // Path color
                                        stroke: `#2fdecc`
                                    },
                                    trail: {
                                        // Trail color
                                        stroke: '#eeeeee',
                                    }
                                }}>
                                <img src={imgurl + images[3]} alt="3" onClick={handleClick} className={MainpageCSS.img} draggable="false" onError={(e) => e.target.src = loading_img} />
                            </CircularProgressbarWithChildren>
                        </div>
                    </div>
                </div>
                <p className={MainpageCSS.p}>Brain Wave</p>


            </div>
        </div>
    )
}

export default Mainpage
