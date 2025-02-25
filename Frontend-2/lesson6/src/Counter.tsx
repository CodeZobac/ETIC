import { useSelector } from "react-redux";
import { RootState } from "./store";
import { useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";



export const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  return <div>{count}</div>;
};

export const IncrementButton = () => {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(increment())}>Increment</button>;
}