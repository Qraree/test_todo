import React from 'react';
import {useTypedSelector} from "./hooks/useTypedSelector";

function App() {
    const {users, error, loading} = useTypedSelector(state => state.user)
  return (
    <div className="App">
      hello
    </div>
  );
}

export default App;
