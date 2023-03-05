import { useState } from 'react'
import './App.css'
import axios from 'axios';
import Card from './Card';


function App() {

  const [res, setRes] = useState(null);
  const [graph, setGraph] = useState(null);
  const [formData, setFormData] = useState({
    pregnancies: Number,
    glucose: Number,
    blood_pressure: Number,
    skin_thickness: Number,
    insulin: Number,
    bmi: Number,
    diabetes_pedigree_function: Number,
    age: Number
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      var response = await axios.post('https://bct-diabetes-prediction-api.sayan.org.in/predict/', formData);
      var hist = await axios.get('https://bct-diabetes-prediction-api.sayan.org.in/get-histogram/', { responseType: 'arraybuffer' }).then(res => {
        let blob = new Blob(
          [res.data],
          { type: response.headers['content-type'] }
        )
        let image = URL.createObjectURL(blob)
        return image
      });
      console.log(graph);
      console.log(response);
      setGraph(hist);
      setRes(response);

    } catch (error) {
      console.log(error);
    }
  };

  const labelStyle = "input-group ml-3 lg:w-1/3 m-3 lg:mx-auto"
  const inputStyle = "input input-bordered lg:w-2/3"
  return (
    <div className="">
      <div className="">
        <div className="flex flex-col just">
          <h1 className="text-center text-3xl font-bold text-slate-50 m-5 p-6">DIABETES PREDICTOR</h1>
        </div>

        <form onSubmit={handleSubmit} method="post">
          <div>
            <div className="flex flex-col justify-center" >
              <label className={labelStyle}>
                <span>pr</span>
                <input type="number" placeholder="Enter the number of pregnancies" name="pregnancies" onChange={handleChange} className={inputStyle} autocomplete="off" />
              </label>
              <label className={labelStyle}>
                <span>gl</span>
                <input type="number" placeholder="Enter the glucose level" name="glucose" onChange={handleChange} className={inputStyle} autocomplete="off" />
              </label>
              <label className={labelStyle}>
                <span>bp</span>
                <input type="number" placeholder="Enter the blood pressure" name="blood_pressure" onChange={handleChange} className={inputStyle} autocomplete="off" />
              </label>
              <label className={labelStyle}>
                <span>st</span>
                <input type="number" placeholder="Enter the skin thickness" name="skin_thickness" onChange={handleChange} className={inputStyle} autocomplete="off" />
              </label>
              <label className={labelStyle}>
                <span>is</span>
                <input type="number" placeholder="Enter the insulin level" name="insulin" onChange={handleChange} className={inputStyle} autocomplete="off" />
              </label>
              <label className={labelStyle}>
                <span>bm</span>
                <input type="number" placeholder="Enter the BMI" name="bmi" onChange={handleChange} className={inputStyle} autocomplete="off" />
              </label>
              <label className={labelStyle}>
                <span>d</span>
                <input type="number" placeholder="Enter the Diabetes" name="diabetes_pedigree_function" onChange={handleChange} className={inputStyle} autocomplete="off" />
              </label>
              <label className={labelStyle}>
                <span>ag</span>
                <input type="number" placeholder="Enter the Age" name="age" onChange={handleChange} className={inputStyle} autocomplete="off" />
              </label>
            </div>

            <div class="flex justify-center">
              <button type="submit" class="btn btn-accent btn-outline w-24">Submit</button>
            </div>
          </div>
        </form>
        <div>
          {res && <Card data={res} />}
          {graph && <img src={graph} width={550} height={550} />}
        </div>
      </div>




    </div>

  )
}

export default App
