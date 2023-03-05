import { useState } from 'react'
import './App.css'
import axios from 'axios';
import Card from './Card';


function App() {

  const [res, setRes] = useState(null);
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
      console.log(response);
      setRes(response);

    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="min-h-screen bg-gray-100">
      <div className=" px-4 pt-8">
        <h1 className="mb-8 text-center text-4xl font-bold text-gray-900">DIABETES PREDICTOR</h1>
        <form onSubmit={handleSubmit} method="post">

          <div className="form-control grid grid-rows-1">
            <label className="input-group m-3">
              <span>PREGA</span>
              <input type="number" placeholder="Enter the number of pregnancies" name="pregnancies" onChange={handleChange} className="input input-bordered " />
            </label>
            <label className="input-group m-3">
              <span>GLUCO</span>
              <input type="number" placeholder="Enter the glucose level" name="glucose" onChange={handleChange} className="input input-bordered" />
            </label>
            <label className="input-group m-3">
              <span>BP</span>
              <input type="number" placeholder="Enter the blood pressure" name="blood_pressure" onChange={handleChange} className="input input-bordered" />
            </label>
            <label className="input-group m-3">
              <span>SKIN THICKNESS</span>
              <input type="number" placeholder="Enter the skin thickness" name="skin_thickness" onChange={handleChange} className="input input-bordered" />
            </label>
            <label className="input-group m-3">
              <span>INSULIN</span>
              <input type="number" placeholder="Enter the insulin level" name="insulin" onChange={handleChange} className="input input-bordered" />
            </label>
            <label className="input-group m-3">
              <span>BMI</span>
              <input type="number" placeholder="Enter the BMI" name="bmi" onChange={handleChange} className="input input-bordered" />
            </label>
            <label className="input-group m-3">
              <span>Diabetes</span>
              <input type="number" placeholder="Enter the Diabetes" name="diabetes_pedigree_function" onChange={handleChange} className="input input-bordered" />
            </label>
            <label className="input-group m-3">
              <span>AGE</span>
              <input type="number" placeholder="Enter the Age" name="age" onChange={handleChange} className="input input-bordered" />
            </label>
            <button type="submit" className="ml-3 mb-5 btn btn-accent btn-outline w-24">Submit</button>
          </div>
        </form>
        <div>
          {res && <Card data={res} />}
        </div>
      </div>




    </div>

  )
}

export default App
