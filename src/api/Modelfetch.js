import axios from 'axios';

const handleSubmit = async (data, e) => {
  console.log(data);
  e.preventDefault();
  try {
    const response = await axios.post('https://bct-diabetes-prediction-api.sayan.org.in/predict/diabetes-predict', data);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

export default handleSubmit;