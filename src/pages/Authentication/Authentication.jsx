import React from 'react';
import background from '../../assets/images/background.png';
import './index.css';

const Authentication = () => {
  return (
    <div className="authentication-page">
      <header>
        <h1>
          E-commerce
        </h1>
        <section className="login">
          <h2>Login</h2>
          <form>
            <input
              type="email"
              placeholder="Digite seu email"
              required
            />

            <input
              type="password"
              placeholder="Digite sua senha"
              required
            />

            <button
              type="submit"
            >
              Entrar
            </button>
          </form>
        </section>
      </header>
      <div className="right">
        <section className="register">
          <h2>
            Cadastro
          </h2>

          <form>
            <input
              type="text"
              placeholder="Digite seu nome"
            />

            <input
              type="emal"
              placeholder="Digite seu email"
            />

            <input
              type="password"
              placeholder="iDigite sua senha"
            />

            <button
              type="submit"
            >
              Cadastrar
            </button>
          </form>
        </section>
      </div>

      <div className="left">
        {/* <img src={ background } alt="background" /> */}
      </div>
    </div>
  );
};

export default Authentication;
