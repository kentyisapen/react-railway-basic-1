import  { useState } from 'react';

export const useThreadIndex = () => {
  const [x, setX] = useState(0)

  return [
    x,
    setX
  ]
}

