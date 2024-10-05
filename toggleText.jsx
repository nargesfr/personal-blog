import { useState } from "react"

const ToggleText = () => {
const [isTextVisible , setIsTextVisible] = useState (false);

const handleToggle = () => {
    setIsTextVisible (!isTextVisible);

};
  return (
    <div>
      <button onClick={handleToggle}>
        {isTextVisible ? 'Hide Text' : 'ShowText'}
      </button>

      {isTextVisible && <p>Hello world!...</p>}
    </div>
  );
};

export default ToggleText
