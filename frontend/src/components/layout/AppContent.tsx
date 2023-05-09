import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { routes } from '../../routes/route'
import { RouteType } from '../../types/route';

const AppContent = () => {
    return (
        <Routes>
            {routes.map((route: RouteType, idx: any) => {
                return (
                    route.element && (
                    <Route
                        key={idx}
                        path={route.path}
                        element={<route.element />}
                    />
                    )
                );
            })}
        </Routes>
    )
}

export default React.memo(AppContent)