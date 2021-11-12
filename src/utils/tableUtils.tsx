import paginationFactory from "react-bootstrap-table2-paginator";

export const pagination = paginationFactory({
  page: 1,
  alwaysShowAllBtns: true,
  showTotal: true,
  withFirstAndLast: false,
  sizePerPageRenderer: ({ onSizePerPageChange }) => {
    return (
      <div className="dataTables_length" id="datatable-basic_length">
        <label>
          Show
          {
            <select
              name="datatable-basic_length"
              aria-controls="datatable-basic"
              className="form-control form-control-sm"
              onChange={e => {
                // @todo find out why this is working
                onSizePerPageChange(parseInt(e.target.value), 1);
              }}
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          }
          entries.
        </label>
      </div>
    );
  },
});
