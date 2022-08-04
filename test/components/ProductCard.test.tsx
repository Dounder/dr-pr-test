import * as React from 'react';
import renderer from 'react-test-renderer';

import ProductCard, { ProductTitle } from '../../src/components';
import { produc2 } from '../data/products';

const { act } = renderer;

describe('ProductTitle', () => {
  test('should show the component correctly', () => {
    const wrapper = renderer.create(
      <ProductCard product={produc2}>{() => <ProductTitle />}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should increment counter', () => {
    const wrapper = renderer.create(
      <ProductCard product={produc2}>
        {({ count, increaseBy }) => (
          <>
            <h1>ProductCard</h1>
            <span>{count}</span>
            <button onClick={() => increaseBy(1)}></button>
          </>
        )}
      </ProductCard>
    );

    let tree = wrapper.toJSON();

    expect(tree).toMatchSnapshot();

    act(() => (tree as any).children[2].props.onClick());

    tree = wrapper.toJSON();

    expect((tree as any).children[1].children[0]).toBe('1');
  });
});
