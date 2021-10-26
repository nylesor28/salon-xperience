import React from 'react';
import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

function OrderHistory() {
  const { data } = useQuery(QUERY_USER);
  let operator;

  if (data) {
    operator = data.operator;
  }

  return (
    <>
      <div className="container my-1">
        <Link to="/">← Back to Products</Link>

        {operator ? (
          <>
            <h2>
              Order History for {operator.firstName} {operator.lastName}
            </h2>
            {operator.orders.map((order) => (
              <div key={order._id} className="my-2">
                <h3>
                  {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
                </h3>
                <div className="flex-row">
                  {order.merchandise.map(({ _id, image, name, price }, index) => (
                    <div key={index} className="card px-1 py-1">
                      <Link to={`/merchandise/${_id}`}>
                        <img alt={name} src={`/images/${image}`} />
                        <p>{name}</p>
                      </Link>
                      <div>
                        <span>${price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        ) : null}
      </div>
    </>
  );
}

export default OrderHistory;
