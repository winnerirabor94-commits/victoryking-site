import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { ShoppingBag, Plus } from 'lucide-react';

const initialItems = [
  { id: 1, name: 'Engineering Drawing Board', price: 15000, seller: 'John Doe', image: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=400', category: 'Materials' },
  { id: 2, name: 'Used Mattress (6x4)', price: 12000, seller: 'Jane Smith', image: 'https://images.unsplash.com/photo-1505693416035-af85e56fa473?auto=format&fit=crop&q=80&w=400', category: 'Furniture' },
  { id: 3, name: 'MTH 101 Past Questions', price: 500, seller: 'Mike Tyson', image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=400', category: 'Books' },
];

const Marketplace = () => {
  const { user } = useAuth();
  const [items, setItems] = useState(initialItems);

  return (
    <div>
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1><ShoppingBag style={{ verticalAlign: 'middle', marginRight: '0.5rem' }} /> Student Marketplace</h1>
          <p>Buy and sell items within the UNIDEL community.</p>
        </div>
        {user?.role === 'student' && (
          <button className="btn">
            <Plus size={18} /> Post Ad
          </button>
        )}
      </div>

      <div className="grid">
        {items.map(item => (
          <div key={item.id} className="card marketplace-item" style={{ padding: '0', overflow: 'hidden' }}>
            <img src={item.image} alt={item.name} />
            <div style={{ padding: '1.5rem' }}>
              <span className="badge" style={{ marginBottom: '0.5rem', background: '#e0e0e0' }}>{item.category}</span>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{item.name}</h3>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>Seller: {item.seller}</p>
              <div className="price">₦{item.price.toLocaleString()}</div>
              <button className="btn btn-secondary" style={{ width: '100%', marginTop: '1rem' }}>
                Contact Seller
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
