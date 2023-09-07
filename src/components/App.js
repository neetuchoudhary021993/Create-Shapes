import React from 'react'
import '../styles/App.css';
const App = () => {
 const [selectedShape, setSelectedShape] = useState('Square');
  const [shapes, setShapes] = useState([]);

  const handleAddShape = () => {
    if (selectedShape === 'Square') {
      setShapes([...shapes, 'square']);
    } else if (selectedShape === 'Circle') {
      setShapes([...shapes, 'circle']);
    }
  };
return (
    <div id="main">
      <div id="shape-creator">
        <select
          value={selectedShape}
          onChange={(e) => setSelectedShape(e.target.value)}
        >
          <option value="Square">Square</option>
          <option value="Circle">Circle</option>
        </select>
        <button onClick={handleAddShape}>Add shape</button>
      </div>
      <div id="shapes-holder">
        {shapes.map((shape, index) => (
          <div key={index} className={shape}></div>
        ))}
      </div>
    </div>
  );
};


export default App;
