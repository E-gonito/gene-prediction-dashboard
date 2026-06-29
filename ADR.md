# Architecture Decision Record

## Data fetch location: Server sided
SSR is faster on slow hospital WiFi, as there is less round trips needed for the first paint.
### CSR
1) Client requests page, gets HTML shell and JS to execute
2) Browser parses, downloads and executes the JS
3) Then useEffect fires the fetch for the data source
4) Await response -> re-render -> paint data
### SSR
1) Client requests page, server fetches data, populates HTML with data and serves it to client
2) Browser paints data on first response

## GenePrediction: type vs interface
Data is object/contract shape, which is the conventional use for interface  (Interfaces are extendable via declaration merging and conventionally used for object/contract shapes; type aliases handle unions, intersections, and primitives that interfaces can't.)

