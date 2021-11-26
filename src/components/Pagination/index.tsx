import { PaginationWrapper } from "./styles";

type PaginationProps = {
  pages: number;
  handleNextPage: (number: number) => void;
};

export const Pagination = ({ pages, handleNextPage }: PaginationProps) => {
  return (
    <PaginationWrapper>
      {Array.from(Array(pages), (item, index) => {
        return (
          <button
            key={index}
            value={index}
            onClick={(event: any) => handleNextPage(Number(event.target.value))}
          >
            {index + 1}
          </button>
        );
      })}
    </PaginationWrapper>
  );
};
