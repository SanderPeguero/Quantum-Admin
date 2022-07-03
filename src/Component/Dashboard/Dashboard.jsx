import { useState, useEffect, useMemo } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

const Dashboard = () => { 
    return(
        <ThemeProvider theme={darkMode ? themeDark : theme}>
        <CssBaseline />
        {layout === "dashboard" && (
            <>
            <Sidenav
                color={sidenavColor}
                brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
                brandName="Material Dashboard 2"
                routes={routes}
                onMouseEnter={handleOnMouseEnter}
                onMouseLeave={handleOnMouseLeave}
            />
            <Configurator />
            {configsButton}
            </>
        )}
        {layout === "vr" && <Configurator />}
        <Routes>
            {getRoutes(routes)}
            <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
        </ThemeProvider>
    )
}

export default Dashboard