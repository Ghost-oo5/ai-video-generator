
import React from 'react';

interface ErrorMessageProps {
  message: string | null;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  if (!message) {
    return null;
  }

  return (
    <div 
      className="mt-4 p-3 bg-red-500/20 border border-red-500 text-red-400 rounded-lg text-sm"
      role="alert"
    >
      <p className="font-medium">Error:</p>
      <p>{message}</p>
    </div>
  );
};
    