
function SubscriptionCard({ title, description, features, price, buttonText }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '20px',
      maxWidth: '300px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    }}>
      <h2>{title}</h2>
      <p>{description}</p>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <h3>{price}</h3>
      <button>{buttonText}</button>
    </div>
  );
}

export default SubscriptionCard;
