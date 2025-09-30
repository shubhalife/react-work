const withPromotedCard = (RestCard) => {
  return (props) => (
    <div className="promoted-card">
      <h3>promoted</h3>
      <RestCard {...props} />
    </div>
  );
};

export default withPromotedCard;

//higher order component
