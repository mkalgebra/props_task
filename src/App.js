import './App.css';
import {ClassFirst, ClassSecond, FunctionFirst, FunctionSecond} from './Components';

function App() {
  const users = [{name: 'a', age: '21', id: 1}, {name: 'b', age: '22', id: 2}, {name: 'c', age: '23', id: 3}]

  return (
    <div className="App">
      {users.map(i=>
        {
          return(
            <div key={i.id}>
              <ClassFirst name={i.name} age={i.age}/>
              <ClassSecond name={i.name} age={i.age}/>
              <FunctionFirst name={i.name} age={i.age}/>
              <FunctionSecond name={i.name} age={i.age}/>
            </div>
          )})}
    </div>
  );
}

export default App;
