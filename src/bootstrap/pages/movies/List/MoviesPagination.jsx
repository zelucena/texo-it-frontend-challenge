import { Pagination } from "react-bootstrap";

/**
 * follows the structure as provided by the backend API, assuming that is the correct source of truth
 * Edge-cases of this component which have not been agreed upon document have been assumed (but tested) as needed
 * @param page current page
 * @param setPage set current page
 * @param first is in the first page
 * @param last is in the last page
 * @param totalPages number of total pages
 * @returns {JSX.Element}
 * @constructor
 */
export default function MoviesPagination({ page, setPage, first, last, totalPages }) {
    const Links = ({ initialPage }) => {
        const items = [];
        for (let i = initialPage; i < initialPage + 5; i++) {
            if (i === totalPages) {
                break;
            }
            items.push(
                <Pagination.Item
                    onClick={() => setPage(i)}
                    active={i === initialPage}
                    key={i}
                    data-testid={`pagination-item-${i}`}
                >{i + 1}</Pagination.Item>);
        }
        return items;
    }
    return (
        <Pagination className="justify-content-center" data-testid="movies-pagination">
            <Pagination.First onClick={() => setPage(0)} disabled={first} data-testid="first-button"/>
            <Pagination.Prev onClick={() => setPage(page - 1)} disabled={first} data-testid="prev-button"/>

            <Links initialPage={page}/>

            <Pagination.Next disabled={last} onClick={() => setPage(page + 1)} data-testid="next-button"/>
            <Pagination.Last disabled={last} onClick={() => setPage(totalPages - 1)} data-testid="last-button"/>
        </Pagination>
    );
}