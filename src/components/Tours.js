import { useState } from 'react';
import { tours } from "../data";
import Tour from "./Tour.js";

const Tours = () => {
  const [toursData, setToursData] = useState(tours);
  // const  handelSetToursData=(e)=>{
  //   setToursData(e.target.vlue)
  // }
  const handeleDelete = (toursData, id) => {
    const updateToursData = toursData.filter((data) => data.id !== id)
    setToursData(updateToursData)
  }
  return (
    <section className="section" id="tour">
      <div className="section-title">
        <h2>
          featured <span>tours</span>
        </h2>
      </div>
      <div className="section-center featured-center">
        {toursData.map((tour) => {
          return (<div>
            <Tour {...tour} key={tour.id} />
            <button onClick={() => handeleDelete(toursData,tour.id)}> Delete </button>
          </div>)


        })}

      </div>
    </section>
  );
};

export default Tours;