// src/App.js
import { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import BackgroundImage from './assets/Assinatura.png'
import InputMask from 'react-input-mask';

function App() {
  const [nome, setNome] = useState('');
  const [area, setArea] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const signatureRef = useRef(null);

  const handleDownload = () => {
    if (signatureRef.current) {
      html2canvas(signatureRef.current).then(canvas => {
        const link = document.createElement('a');
        link.download = 'assinatura.png';
        link.href = canvas.toDataURL();
        link.click();
      });
    }
  };

  return (
    <div className="bg-[#12274B] W-screen h-screen flex flex-col items-center justify-center">
      <div className='flex flex-col gap-4 w-[400px]'>
        <h1 className='text-[#fff] font-bold text-xl' style={{ fontFamily: 'Montserrat, sans-serif' }}>Gerador de Assinatura de E-mail</h1>

        <label
          htmlFor="userName"
          className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 dark:border-gray-700 dark:bg-gray-800"
        >
          <input
            value={nome} onChange={e => setNome(e.target.value)}
            type="text"
            id="userName"
            placeholder="Name"
            className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm dark:text-white"
          />

          <span
            className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs dark:text-gray-200"
          >
            Nome
          </span>
        </label>

        <label
          htmlFor="userArea"
          className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 dark:border-gray-700 dark:bg-gray-800"
        >
          <input
            value={area} onChange={e => setArea(e.target.value)}
            type="text"
            id="userArea"
            placeholder="Área"
            className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm dark:text-white"
          />

          <span
            className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs dark:text-gray-200"
          >
            Área
          </span>
        </label>

        <label
          htmlFor="UserEmail"
          className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 dark:border-gray-700 dark:bg-gray-800"
        >
          <input
            value={email} onChange={e => setEmail(e.target.value)}
            type="email"
            id="UserEmail"
            placeholder="Email"
            className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm dark:text-white"
          />

          <span
            className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs dark:text-gray-200"
          >
            Email
          </span>
        </label>

        <label
          htmlFor="userPhone"
          className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 dark:border-gray-700 dark:bg-gray-800"
        >
          <InputMask
            mask="+99 (99) 99999-9999"
            value={telefone} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTelefone(e.target.value)}
            type="text"
            id="userPhone"
            placeholder="Telefone"
            className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm dark:text-white"
          />

          <span
            className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs dark:text-gray-200"
          >
            Telefone
          </span>
        </label>

      </div>
      <div ref={signatureRef} className='flex items-center w-fit h-[230px] bg-[#FFF] mt-10'>
        <div className='flex flex-col gap-4 mr-8'>
          <h1 className='font-["Montserrat", sans-serif] text-xl text-[#0360DC] font-bold' style={{ fontFamily: 'Montserrat, sans-serif' }}>{nome}</h1>
          <h1 className='font-mont text-xl text-[#12274B] font-bold' style={{ fontFamily: 'Montserrat, sans-serif' }}>{area}</h1>
          <h1 className='font-mont text-l text-[#0360DC] font-bold underline' style={{ fontFamily: 'Montserrat, sans-serif' }}>{email}</h1>
          <h1 className='font-mont text-l text-[#12274B font-bold' style={{ fontFamily: 'Montserrat, sans-serif' }}>{`Mobile: ${telefone}`}</h1>
          <h1 className='font-mont text-xl text-[#12274B] font-bold' style={{ fontFamily: 'Montserrat, sans-serif' }}>Site: https://v8.tech</h1>
        </div>
        <div className='h-[220px] w-[2px] bg-[#000] mr-8'></div>
        <img src={BackgroundImage} alt="" />
      </div>

      <button className='mt-10 rounded-lg py-4 px-8 bg-[#65c98D] hover:opacity-90 text-[#fff] font-bold text-xl' onClick={handleDownload}>Download da Assinatura</button>
    </div>
  );
}

export default App;