import PuffLoader from 'react-spinners/PuffLoader';
import BeatLoader from 'react-spinners/BeatLoader';

export const Loader = () => {
  return <PuffLoader color="#4f95da" size={150} />;
};

export const LoaderButtons = () => {
  return <BeatLoader color="#4f95da" size={10} />;
};
