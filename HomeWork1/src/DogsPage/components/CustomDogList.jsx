import CustomDog from './CustomDog';
import { Link } from 'react-router-dom'


const DogList = ({ data, setDogSelected }) => {

    return data.map((dogs) => 
    <Link onClick={() => setDogSelected(dogs)} to={`/${dogs.id}`}>
      <CustomDog item={dogs}></CustomDog>
    </Link>)
  }

export default DogList