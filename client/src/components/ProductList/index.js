// import React, { useEffect } from 'react';
// import ProductItem from '../ProductItem';
// import { useStoreContext } from '../../utils/GlobalState';
// import { UPDATE_PRODUCTS } from '../../utils/actions';
// import { useQuery } from '@apollo/client';
// import { QUERY_PRODUCTS } from '../../utils/queries';
// import { idbPromise } from '../../utils/helpers';
// import spinner from '../../assets/spinner.gif';

// function ProductList() {
//   const [state, dispatch] = useStoreContext();

//   const { currentService } = state;

//   const { loading, data } = useQuery(QUERY_PRODUCTS);

//   useEffect(() => {
//     if (data) {
//       dispatch({
//         type: UPDATE_PRODUCTS,
//         products: data.products,
//       });
//       data.products.forEach((product) => {
//         idbPromise('products', 'put', product);
//       });
//     } else if (!loading) {
//       idbPromise('products', 'get').then((products) => {
//         dispatch({
//           type: UPDATE_PRODUCTS,
//           products: products,
//         });
//       });
//     }
//   }, [data, loading, dispatch]);

//   function filterproducts() {
//     if (!currentService) {
//       return state.products;
//     }

//     return state.products.filter(
//       (product) => product.product._id === currentService
//     );
//   }

//   return (
//     <div className="my-2">
//       <h2>Our products:</h2>
//       {state.products.length ? (
//         <div className="flex-row">
//           {filterproducts().map((product) => (
//             <ProductItem
//               key={product._id}
//               _id={product._id}
//               image={product.image}
//               name={product.name}
//               price={product.price}
//               quantity={product.quantity}
//             />
//           ))}
//         </div>
//       ) : (
//         <h3>You haven't added any products yet!</h3>
//       )}
//       {loading ? <img src={spinner} alt="loading" /> : null}
//     </div>
//   );
// }

// export default ProductList;
