import { LoadMoreBtn } from './Button.styled.js';

export const ButtonLoadMore = ({ onClick }) => {
  return (
    <div>
      <LoadMoreBtn type="button" onClick={onClick}>
        Load more
      </LoadMoreBtn>
    </div>
  );
};

export default ButtonLoadMore;