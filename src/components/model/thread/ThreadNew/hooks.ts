import  { useState } from 'react';

export const useThreadNew = () => {
  const [x, setX] = useState(0)

  return [
    x,
    setX
  ]
}

