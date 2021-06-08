import React, { useEffect, useState, useRef } from 'react'
import MainpageCSS from './MainpageCSS.module.css'
import firebase from '../../utils/firebase'


const Mainpage = () => {
    // State for Counter
    const [counter, setCounter] = useState('')
    // const [qn, setQn] = useState('')
    const [data, setData] = useState([])
    const [images, setImages] = useState([])
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

    function getData(){
        var [qNo, rem] = getCounter()
        const ref = firebase.database().ref('data').child(1);
        ref.on('value', (snapshot) => {
          const all = snapshot.val();
        //   const array = [];
          setData(all);
          console.log(all)
          setImages(all.images)
        });
    }

    function updateData(){
        var [qNo,rem] = getCounter()
        const ref = firebase.database().ref('data').child(1);
        ref.update({
            ...data,
            "votes":[0,0,0,0]
        })

    }

    useEffect(() => {
        getData()
      }, []);


    useEffect(() => {
         let interval= setInterval(() => {
            let[qNo,rem]=getCounter()
            setCounter(rem)
            if (rem ===29){
                getData()
            }
          }, 1000)
        return function cleanup() {
          console.log("cleaning up");
          clearInterval(interval);
        };
      }, [])
    //   console.log(data);

    const imgurl = "https://thumb.fakeface.rest/thumb_"

  



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
                            <img src={imgurl + images[0]} alt="" className={MainpageCSS.img} draggable="false" onError={(e)=>e.target.src=loading_img} />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className={MainpageCSS.imgdiv}>
                            <img src={imgurl + images[1]} alt="" className={MainpageCSS.img} draggable="false" onError={(e)=>e.target.src=loading_img}  />
                        </div> 
                    </div> 
                </div> 
 
                <span className={MainpageCSS.span}> 
                    <p className={MainpageCSS.counter}>{('0' + counter).slice(-2)}</p> 
                </span> 
 
                <div className="row mt-4"> 
                    <div className="col-6"> 
                        <div className={MainpageCSS.imgdiv}> 
                            <img src={imgurl + images[2]} alt="" className={MainpageCSS.img} draggable="false" onError={(e)=>e.target.src=loading_img}  />
                        </div> 
                    </div> 
                    <div className="col-6"> 
                        <div className={MainpageCSS.imgdiv}> 
                            <img src={imgurl + images[3]} alt="" className={MainpageCSS.img} draggable="false" onError={(e)=>e.target.src=loading_img}  />
                        </div>
                    </div>
                </div>
                <p className={MainpageCSS.p}>Brain Wave</p>
            </div>
        </div>
    )
}

export default Mainpage
