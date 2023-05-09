export type RouteType = {
    path: string
    name: string
    element: () => JSX.Element
}