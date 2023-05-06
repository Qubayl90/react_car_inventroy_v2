import Button from './Button'
import Input from './Input'

import {useForm} from 'react-hook-form';
import {server_calls} from '../api/server';
import { useDispatch, useStore } from 'react-redux';
import { chooseMake, chooseModel, chooseYear, chooseColor } from '../redux/slices/RootSlice';

//interfaces
interface CarFormProps {
  id?: string[], 
  //data?: {}
}

const CarForm = (props:CarFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch =useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${ typeof props.id}`);
    console.log(`ID: ${props.id}`);
    console.log(data);

    if (props.id && props.id.length >0){
      server_calls.update(props.id[0], data)
      console.log(`updated: ${data.car_make} ${props.id}`)
      setTimeout(()=>{window.location.reload()}, 5000);
      event.target.reset();
    }
    else{
      // use dispatch to update our state in our store
      dispatch(chooseMake(data.car_make));
      dispatch(chooseModel(data.car_model));
      dispatch(chooseYear(data.year));
      dispatch(chooseColor(data.color));

      server_calls.create(store.getState());

      setTimeout(() => {window.location.reload()}, 1000);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="car_make"> Car Make</label>
            <Input {...register('car_make')} name="car_make" placeholder="Make" />
        </div>
        <div>
          <label htmlFor="car_model"> Model</label>
            <Input {...register('car_model')} name="car_model" placeholder="Model" />
        </div>
        <div>
          <label htmlFor="year"> Year</label>
            <Input {...register('year')} name="year" placeholder="Year" />
        </div>
        <div>
          <label htmlFor="color"> Color</label>
            <Input {...register('color')} name="color" placeholder="Color" />
        </div>
        <div className="flex p-1">
          <Button className='flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white'
          > Submit </Button>
        </div>

      </form>
    </div>
  )
}

export default CarForm