import React from 'react';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-yellow-500 to-black">
      {/* Navigation */}
      <nav className="bg-black bg-opacity-80 backdrop-blur-md fixed w-full z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src="https://i.postimg.cc/ncRNY8Yr/194-20250531164336.png" alt="Logo" className="h-12 w-12 mr-4" />
              <span className="text-white text-2xl font-bold">Karim</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-white hover:text-yellow-300 transition-colors">Services</a>
              <a href="#websites" className="text-white hover:text-yellow-300 transition-colors">Websites</a>
              <a href="#monetization" className="text-white hover:text-yellow-300 transition-colors">Monetization</a>
              <a href="#design" className="text-white hover:text-yellow-300 transition-colors">Design</a>
              <a href="#audio" className="text-white hover:text-yellow-300 transition-colors">Audio</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-20 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-4">Karim</h1>
            <p className="text-2xl mb-8">What can I do for you?</p>
            <a 
              href="https://t.me/konagy"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors inline-block"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </header>

      {/* Websites Section */}
      <section id="websites" className="py-20 text-white bg-black bg-opacity-80">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Websites</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-center mb-12 font-serif">
              🌐 Разработка личных сайтов<br />
              — Лендинги, интернет-магазины, портфолио, бизнес-сайты — под ключ<br />
              — Адаптивный дизайн, удобная структура, быстрая загрузка<br />
              — Размещение на GitHub Pages или по вашему хостингу
            </p>
            <div className="flex justify-center space-x-6">
              <a 
                href="https://nebuion.github.io/feyk-cofee/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 text-black px-6 py-3 rounded-lg transition-all transform hover:scale-105 hover:bg-yellow-300"
              >
                Coffee Shop Website
              </a>
              <a 
                href="https://nebuion.github.io/feyk-magaz-krossy/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 text-black px-6 py-3 rounded-lg transition-all transform hover:scale-105 hover:bg-yellow-300"
              >
                Sneakers Store
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Monetization Section */}
      <section id="monetization" className="py-20 text-white bg-black bg-opacity-70">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Monetization</h2>
          <p className="text-xl text-center font-serif max-w-2xl mx-auto">
            💰 Подключу монетизацию к вашим соцсетям или продам готовую!
          </p>
        </div>
      </section>

      {/* Design Section */}
      <section id="design" className="py-20 text-white bg-black bg-opacity-80">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Design</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-center font-serif">
              🎨 Личный стиль и бренд<br />
              — Логотипы, оформление соцсетей и страниц<br />
              — Дизайн товаров, обложек, баннеров, шапок<br /><br />
              QR-коды<br />
              — Генерация с вашими ссылками (сайт, соцсети, файлы)<br />
              — Загружу фото, видео или аудио и создам QR на нужный контент
            </p>
          </div>
        </div>
      </section>

      {/* Audio Section */}
      <section id="audio" className="py-20 text-white bg-black bg-opacity-70">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Audio</h2>
          <p className="text-xl text-center font-serif max-w-2xl mx-auto">
            🎵 Создание песен и текстов<br />
            — Напишу уникальный текст для вашей песни<br />
            — Поставлю музыку на ваши слова и создам полноценную композицию
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center items-center mb-4">
            <img src="https://i.postimg.cc/ncRNY8Yr/194-20250531164336.png" alt="Logo" className="h-10 w-10" />
          </div>
          <p>© 2025 Karim. All rights reserved.</p>
          <a 
            href="https://t.me/konagy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-yellow-300 mt-2 inline-block"
          >
            Contact on Telegram
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;