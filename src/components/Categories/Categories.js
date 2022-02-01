import React from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../../services/api';
import './index.css';

class Categories extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.getCategory();
  }

  getCategory = async () => {
    const categoryList = await getCategories();
    this.setState({ categories: [...categoryList] });
  }

  render() {
    const { categories } = this.state;
    const { searchProductsByCategory } = this.props;
    return (
      <aside className="categories">
        {
          categories.map(({ name, id }) => (
            <button
              type="button"
              key={ id }
              data-testid="category"
              className="category"
              id={ id }
              onClick={ searchProductsByCategory }
            >
              {name}
            </button>
          ))
        }
      </aside>
    );
  }
}

Categories.propTypes = {
  searchProductsByCategory: PropTypes.func.isRequired,
};

export default Categories;
