import styled from 'styled-components';

export const StyledCard = styled.li`
  width: 250px;
  height: 350px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    width: 100%;
    height: 60%;
    object-fit: cover;
  }

  .card-content {
    padding: 15px;

    h2 {
      margin: 0;
      font-size: 1.2rem;
      font-weight: bold;
      color: #333;
    }

    .card-details {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 10px;

      .card-meters {
        display: flex;
        align-items: center;

        svg {
          margin-right: 5px;
        }
      }

      .card-price {
        color: #2ecc71;
        font-weight: bold;
      }
    }
  }
`;