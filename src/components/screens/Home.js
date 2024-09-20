import styled from "styled-components";
function App() {
  return (
    <Offer className="offer">
      <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
      <a>Shop Now</a>
    </Offer>
  );
}

export default App;

const Offer = styled.div`
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;
