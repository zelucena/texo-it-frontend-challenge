import { Pagination } from "react-bootstrap";

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
                >{i + 1}</Pagination.Item>);
        }
        return items;
    }
    return (
        <Pagination className="justify-content-center">
            <Pagination.First onClick={() => setPage(0)} disabled={first}/>
            <Pagination.Prev onClick={() => setPage(page - 1)} disabled={first}/>

            <Links initialPage={page}/>

            <Pagination.Next disabled={last} onClick={() => setPage(page + 1)}/>
            <Pagination.Last disabled={last} onClick={() => setPage(totalPages - 1)}/>
        </Pagination>
    );
}