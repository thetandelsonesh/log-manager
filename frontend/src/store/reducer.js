import { combineReducers} from "redux";

import project from "../pages/Project/ProjectReducer";
import employee from "../pages/Employee/EmployeeReducer";
import {logsReducer as logs, logStatsReducer as logStats} from "../pages/Dashboard/DashboardReducer";
import filters from "../reducers/FilterReducer";

export default combineReducers({
    project,
    employee,
    logs,
    filters,
    logStats
});