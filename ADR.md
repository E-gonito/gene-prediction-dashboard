# Architecture Decision Record

## Data fetch location: Server sided
The page is a Server Component that fetches data during the server render. Interactivity (sort) is isolated to a Client Component marked 'use client'. The reason for server-side fetch is faster first paint on a constrained network. The reason the sort is a Client Component is that event handlers and state only exist in the browser.

With a server component, the fetch happens on the server, which lives cloer to the data source. The HTML to the client arrives populated so no need to wait for a fetch for the data to re-render.

Client Component fetching with useEffect was rejected due to there being more steps before the final HTML is shown (HTML shell from server, execute JS, then a fetch for the data to populate thr shell, then a re-render, slower first paint)

## GenePrediction: type vs interface
Data is object/contract shape, which is the conventional use for interface  (Interfaces are extendable via declaration merging and conventionally used for object/contract shapes; type aliases handle unions, intersections, and primitives that interfaces can't.)

