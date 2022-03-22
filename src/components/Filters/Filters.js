import React from 'react';

const Filters = () => {
  return (
    <div>
      Filtros

      <form>
        <label htmlFor="frete">
          Frete grátis
          <input
            id="frete"
            name="frete"
            type="checkbox"
          />
        </label>

        <label htmlFor="price">
          Preço
          <input
            id="price"
            placeholder="Min."
            type="number"
          />
        </label>
      </form>
    </div>
  )
};

export default Filters;
