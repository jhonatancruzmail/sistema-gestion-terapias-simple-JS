class Tabla {
    constructor(selector, columns, data) {
        this.selector = selector;
        this.columns = columns;
        this.data = data;
    }

    render() {
        new gridjs.Grid({
            columns: this.columns,
            data: this.data,
            search: {
                enabled: true,
                selector: (cell) => cell.toString().toLowerCase(),
            },
            pagination: {
                limit: 5,
            },
            sort: true,
            className: {
                table: "w-full border border-gray-200 rounded-lg",
                thead: "bg-blue-500 text-white",
                th: "py-3 px-4 text-left font-semibold",
                tbody: "bg-white",
                td: "py-3 px-4 border-b text-gray-700",
                paginationButton:
                    "px-3 py-1 rounded-full text-sm font-medium border border-gray-300 mx-1 hover:bg-gray-100",
            },
        }).render(this.selector);
    }
}