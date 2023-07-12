import toast, {Toaster as ReactHotToaster } from 'react-hot-toast';

export const Toaster = ReactHotToaster;

export const toastError = (message, options = {}) => toast.error(message, options);
export const toastSuccess = (message, options = {}) => toast.success(message, options);
export const toastCustom = (content, options = {}) => toast((t) => content(t), options);