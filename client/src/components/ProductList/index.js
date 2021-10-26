import React, { useEffect } from 'react';
import ProductItem from '../ProductItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_MERCHANDISES } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_MERCHANDISES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';

function ProductList() {
  const [state, dispatch] = useStoreContext();

  const { currentAmenity } = state;

  const { loading, data } = useQuery(QUERY_MERCHANDISES);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_MERCHANDISES,
        merchandises: data.merchandises,
      });
      data.merchandises.forEach((merchandise) => {
        idbPromise('merchandises', 'put', merchandise);
      });
    } else if (!loading) {
      idbPromise('merchandises', 'get').then((merchandises) => {
        dispatch({
          type: UPDATE_MERCHANDISES,
          merchandises: merchandises,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filtermerchandises() {
    if (!currentAmenity) {
      return state.merchandises;
    }

    return state.merchandises.filter(
      (merchandise) => merchandise.merchandise._id === currentAmenity
    );
  }

  return (
    <div className="my-2">
      {state.merchandises.length ? (
        <div className="flex-row">
          {filtermerchandises().map((merchandise) => (
            <ProductItem
              key={merchandise._id}
              _id={merchandise._id}
              image={merchandise.image}
              name={merchandise.name}
              price={merchandise.price}
              quantity={merchandise.quantity}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any merchandises yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default ProductList;
