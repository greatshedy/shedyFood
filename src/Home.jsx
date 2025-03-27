import React,{useReducer} from 'react'
import Nav from '../componenet/Nav'
import food_vid from "./assets/food_vid.mp4";
import "./App.css";
import { useInView } from "react-intersection-observer";


function Home() {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
      });
  return (
    <div>
        <div ref={ref} className="divee">
        <video
          className="video"
          muted
          controls={false}
          src={food_vid}
          loop
          autoPlay={inView}
        />
        <div className="divee1">
          <Nav />
          <div className="divee3">
            <h1>Shedy Food Recipe</h1>
            <p>
              Discover the best food recipes and cooking tips from <br /> around
              the world.
            </p>
            <div className="divee2">
              <button>Explore food</button>
              <button>Learn more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home