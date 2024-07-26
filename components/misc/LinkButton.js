const LinkButton = ({ buttonName, hrefUrl, linkTipo, size }) => {
  const fileConfig = {
    web: {
      buttonClass: 'link link-info text-blue-400 hover:text-blue-400 transition-all',
      iconSrc: '',
    },
    email: {
      buttonClass: 'link link-info text-blue-500 hover:text-blue-300 transition-all',
      iconSrc: '/assets/Icon/email.png',
    },
    whatsapp: {
      buttonClass: 'link link-success text-green-500 hover:text-green-300 transition-all',
      iconSrc: '/assets/Icon/whatsapp.png',
    },
  };

  const currentFileConfig = fileConfig[linkTipo];
  const buttonClass = currentFileConfig.buttonClass;
  const txtStyle = { fontSize: `${size}px`, display: 'flex', alignItems: 'center' }; // Ajusta el tamaño del icono aquí
  const iconStyle = { height: `${size}px`, marginRight: '8px' }; // Ajusta el tamaño del icono aquí

  return (
      <a className={buttonClass} target="_blank" href={hrefUrl} style={{ ...txtStyle, display: 'inline-flex' }}>
        {currentFileConfig.iconSrc && (
          <img src={currentFileConfig.iconSrc} alt="Icono" style={iconStyle} />
        )}
        {buttonName}
      </a>
  );
};

export default LinkButton;
