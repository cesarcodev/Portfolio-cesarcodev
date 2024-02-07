import React, { useRef, useState } from 'react';
import MailFast from './icons/Mail-fast';
import ClipboardCheck from './icons/clipboardCheck';
import ClipboardList from './icons/clipboardList';

const EmailSection = () => {
  const emailRef = useRef();
  const [buttonText, setButtonText] = useState('Copiar correo');
  const [icon, setIcon] = useState(false);

  const copyEmailToClipboard = () => {
    const email = emailRef.current;
    email.select();
    document.execCommand('copy');
    setIcon(!icon);
    setButtonText('Correo Copiado');
    setTimeout(() => setButtonText('Copiar correo'), 3000);
  };

  return (

    <div className="md:justify-center h-full ">
      <div>
        <div className="border-b-4 border-sky-900 pb-2 flex items-center gap-x-2">
          <MailFast className="w-9 h-9 dark:text-white" />
          <p className="dark:text-white text-3xl font-bold">
            Contacto
          </p>
        </div>
        <div className="mt-6">
          <h2 className='text-xl lg:text-2xl text-balance max-w-[700px] text-black dark:text-white mb-10'>¿Quieres dar vida a tu proyecto con un sistema web único? Mándame un email y conversemos.</h2>
          <div className="flex flex-col md:flex-row items-center justify-center space-x-4 space-y-2 pt-2">
            <input
              ref={emailRef}
              value="cesarce735@gmail.com"
              readOnly="readonly"
              className="border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500 w-full md:w-96"
              aria-label="Dirección de correo electrónico"
            />
            <button
              onClick={copyEmailToClipboard}
              className="bg-sky-900 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition-colors duration-300 flex flex-row gap-x-1 items-center"
            >
              {icon ? <ClipboardCheck className="w-6 h-6 dark:text-white" /> : <ClipboardList className="w-6 h-6 dark:text-white" />}
         
              {buttonText}
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSection;


