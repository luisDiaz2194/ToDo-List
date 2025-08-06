
import  { useEffect } from 'react';

function Toast({ message, type = 'success', onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const colors = {
    success: 'bg-green-800',
    error: 'bg-red-800',
    info: 'bg-green-800',
    warning: 'bg-yellow-500 text-black',
  };

  return (
    <div className={`fixed top-4 right-4 px-4 py-2 text-white rounded shadow-lg ${colors[type] || colors.success}`}>
      {message}
      <div className="h-1 mt-2 bg-white animate-pulse w-full" />
    </div>
  );
}

export default Toast;
