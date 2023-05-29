import { useState } from 'react';

const useHome = () => {
  const [fNumber, setFNumber] = useState<number>(0);
  const [sNumber, setSNumber] = useState<number>(0);
  const formatter = Intl.NumberFormat('es-AR');

  const deleteNumber = () => {
    const numToString = fNumber.toString();
    const numRemoved = numToString.slice(0, -1);
    setFNumber(Number(numRemoved));
  };

  const addNumber = (num: number) => {
    const numToString = `${fNumber}` + `${num}`;

    const formattedNumber = Number(numToString);
    setFNumber(formattedNumber);
  };

  return {
    formatter,
    addNumber,
    deleteNumber,
    fNumber,
    sNumber,
  };
};

export default useHome;
