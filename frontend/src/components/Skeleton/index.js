import styled from 'styled-components';

export const Skeleton = styled.div`
  height: 90px;
  width: 90px;
  border-radius: 20px;

  background-image: linear-gradient(
    -90deg,
    #292A2D 0%,
    #333336 50%,
    #292A2D 100%
  );
  background-size: 400% 400%;
  animation: shimmer 1.2s ease-in-out infinite;

  @keyframes shimmer {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;
