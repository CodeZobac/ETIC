import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { useDispatch } from "react-redux";
import { increment } from "./redux/counterSlice";



export const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  return <div>{count}</div>;
};

export const IncrementButton = () => {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(increment())}>Increment</button>;
}