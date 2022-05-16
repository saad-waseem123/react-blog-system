import { useState } from 'react';

const Test = () => {
    const [name, setName] = useState('saad');

    const fun = () => {
        setName('ali')
    }

    return (
        <div>
            <p>Welcome {name} </p>
            <button onClick={fun}>
            Click me
            </button>
      </div>
    );
}
 
export default Test;