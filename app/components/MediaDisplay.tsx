import React from 'react';

interface MediaDisplayProps {
  title: string;
  imageUrl?: string | null;
  videoScript?: string | null;
  isLoading: boolean;
  altText?: string;
  showPlaceholder?: boolean;
  placeholderText?: string;
  downloadFileName?: string;
}

export const MediaDisplay: React.FC<MediaDisplayProps> = ({
  title,
  imageUrl,
  videoScript,
  isLoading,
  altText,
  showPlaceholder = true,
  placeholderText = "Generated content will appear here.",
  downloadFileName = "generated_content.txt",
}) => {
  const handleDownloadScript = () => {
    if (!videoScript) return;
    const blob = new Blob([videoScript], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = downloadFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
  };

  if (isLoading) {
     return (
      <div className="mt-6 p-4 bg-slate-700/30 border-2 border-dashed border-slate-600 rounded-lg flex flex-col items-center justify-center min-h-[200px]">
        <h3 className="text-lg font-semibold text-sky-400 mb-2">{title}</h3>
        <p className="text-slate-400">Loading content...</p>
      </div>
    );
  }
  
  if (!imageUrl && !videoScript && showPlaceholder) {
    return (
      <div className="mt-6 p-4 bg-slate-700/30 border-2 border-dashed border-slate-600 rounded-lg flex flex-col items-center justify-center min-h-[200px]">
        <h3 className="text-lg font-semibold text-sky-400 mb-2">{title}</h3>
        <p className="text-slate-400 text-center">{placeholderText}</p>
      </div>
    );
  }

  if (!imageUrl && !videoScript) {
    return null; // Don't render anything if no content and placeholder is off
  }
  
  return (
    <div className="mt-6 w-full bg-slate-700/50 p-4 rounded-lg shadow-lg border border-slate-600">
      <h3 className="text-xl font-semibold text-sky-300 mb-3">{title}</h3>
      {imageUrl && (
        <div className="group relative aspect-video w-full bg-slate-700 rounded-lg overflow-hidden shadow-inner border border-slate-500 mb-4">
          <img 
            src={imageUrl} 
            alt={altText || "Generated AI image"} 
            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center">
              <a 
                href={imageUrl} 
                download={altText ? `${altText.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.jpeg` : `generated-image-${Date.now()}.jpeg`}
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 py-2 bg-sky-500 text-white text-sm font-medium rounded-md hover:bg-sky-600"
                aria-label="Download image"
              >
                Download Image
              </a>
          </div>
        </div>
      )}
      {videoScript && (
        <div>
          <div className="script-display mb-4" role="document" aria-label={`${title} content`}>
            {videoScript}
          </div>
          <button
            onClick={handleDownloadScript}
            className="px-4 py-2 bg-sky-500 text-white text-sm font-medium rounded-md hover:bg-sky-600 transition-colors"
            aria-label={`Download ${title}`}
          >
            Download Script
          </button>
        </div>
      )}
    </div>
  );
};
