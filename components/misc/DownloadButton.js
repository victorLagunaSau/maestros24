import { useState } from 'react';

const DownloadButton = ({ buttonName, fileUrl, fileName, fileTipo }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const fileConfig = {
    PDF: {
      buttonClass: 'btn btn-outline py-2 px-5 sm:px-8 bg-white-100 border-red-500 text-red-500 bg-white-500 hover:bg-red-200 hover:border-red-500 hover:text-red-500 transition-all hover:shadow-red-200',
      iconSrc: '/assets/Icon/pdf.png',
    },
    Excel: {
      buttonClass: 'btn btn-outline py-2 px-5 sm:px-8 bg-white-100 border-green-500 text-green-500 bg-white-500 hover:bg-green-200 hover:border-green-500 hover:text-green-500 transition-all hover:shadow-green-200',
      iconSrc: '/assets/Icon/excel.png',
    },
    Word: {
      buttonClass: 'btn btn-outline btn-primary',
      iconSrc: '/assets/Icon/word-icon.png',
    },
    Imagen: {
      buttonClass: 'btn btn-outline py-2 px-5 sm:px-8 bg-white-100 border-warning text-warning bg-white-500 hover:bg-orange-100 hover:border-warning hover:text-warning transition-all hover:shadow-orange-100',
      iconSrc: '/assets/Icon/imagen.png',
    },
    PowerPoint: {
      buttonClass: 'btn btn-outline py-2 px-5 sm:px-8 bg-white-100 border-orange-600 text-orange-600 bg-white-500 hover:bg-orange-200 hover:border-orange-600 hover:text-orange-600 transition-all hover:shadow-orange-100',
      iconSrc: '/assets/Icon/powerpoint.png',
    },
  };

  const currentFileConfig = fileConfig[fileTipo] || { buttonClass: 'btn btn-outline btn-secondary', iconSrc: '' };
  const buttonClass = currentFileConfig.buttonClass;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  return (
    <div>
      <button
        onClick={handleDownload}
        className={buttonClass}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={currentFileConfig.iconSrc}
          alt="Icono"
          className={`mr-2 ${isHovered ? 'filter-invert' : ''}`}
        />
        {buttonName}
      </button>
      {showAlert && (
        <div>
          <p>Descargado con éxito.</p>
        </div>
      )}
    </div>
  );
};

export default DownloadButton;
