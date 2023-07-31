import { useRoutes } from "react-router-dom";
import ApplicationLayout from "../layouts";
import ColorsPage from "../pages/colors";
import TodosPage from "../pages/todos";

export default function Router() {
    return useRoutes([
        {
            path: '',
            element: <ApplicationLayout />,
            children: [
                {
                    path: 'todos',
                    element: <TodosPage />,
                },
                {
                    path: 'colors',
                    element: <ColorsPage />
                }
            ],
        },
    ])
}
