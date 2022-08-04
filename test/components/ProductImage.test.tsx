import * as React from 'react';
import renderer from 'react-test-renderer';

import ProductCard, { ProductImage } from '../../src/components';
import { produc2 } from '../data/products';

describe('ProductTitle', () => {
  test('should show not image component', () => {
    const wrapper = renderer.create(
      <ProductImage img="https://test.com" className="test-class" />
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should show a product image', () => {
    const wrapper = renderer.create(
      <ProductCard product={produc2}>{() => <ProductImage />}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
