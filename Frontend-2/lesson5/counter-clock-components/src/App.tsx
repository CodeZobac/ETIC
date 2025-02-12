import './App.css'
import { Counter } from './Counter';
import { Clock } from './Clock';

function App() {
  return (
    <div>
      <Clock />
      <Counter name="John Doe" age={25} />
    </div>
  );
}

export default App
