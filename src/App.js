import './App.css';
import React, { Component } from 'react';
import Header from './components/Header';
import Post from './components/Post';
import { Button } from 'react-bootstrap';

{/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/> */ }
class App extends Component {
  render() {
    return <div className="App">
      <Header />
      <section className="App-main">
        {/* <Post nickname="Chris" avatar="https://www.laravelnigeria.com/img/chris.jpg" caption="Moving the community!" image="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg" responsive /> */}
        {/* <Post nickname="OG" avatar="https://www.laravelnigeria.com/img/chris.jpg" caption="Holding a mic" image="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg" /> */}
        <Post nickname="Gringo" avatar="https://image.flaticon.com/icons/svg/608/608857.svg" caption="in the heart of an alley :)" image="https://s3-media2.fl.yelpcdn.com/bphoto/tzHpSvCiSw3zcIzybIgsWA/o.jpg" responsive />
        <Post nickname="Platform 7" avatar="https://image.flaticon.com/icons/svg/590/590836.svg" caption="aesthetic! and very concentrated matcha" image="https://www.likealocalguide.com/media/cache/9a/26/9a2665096029369f38b62caaa4c60f90.jpg" responsive />
        <Post nickname="Passion8" avatar="https://image.flaticon.com/icons/svg/214/214298.svg" caption="bingsoo 4 life" image="https://static.wixstatic.com/media/77b93b_23f197d829114c1abb91bee4c5886312~mv2.jpeg/v1/fill/w_293,h_520,al_c,q_90,usm_0.66_1.00_0.01/77b93b_23f197d829114c1abb91bee4c5886312~mv2.webp" />
      </section>
    </div>
  }
}
export default App;
