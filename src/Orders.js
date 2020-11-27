import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import Order from './Order';
import "./orders.css";
import { useStatevalue } from './StateProvider';
import "./orders.css"
    
function Orders() {
    const [{ basket, user }, dispatch] = useStatevalue();
    const [orders, setOrders] = useState([]);
    
    useEffect(() => {
        if(user) {
            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .orderBy('created', "desc")
            .onSnapshot(snapshot => (
                setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                    })))
                ))
  
  
      } else {
          setOrders([])
      }
  
    }, [user])
  
      return (
          <div className='orders'>
              <h1>Your Orders</h1>
  
              <div className='orders_order'>
                  {orders?.map(order => (
                      <Order order={order} />
                  ))}
              </div>
          </div>
      )
  }


export default Orders
