import { toast } from 'react-toastify';

export const warning = message => {
  toast.warn(message, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: 'dark',
    progress: undefined,
  });
};
