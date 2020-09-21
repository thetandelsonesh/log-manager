import { combineReducers} from "redux";

import project from "../pages/Projects/ProjectReducer";
import employee from "../pages/Employees/EmployeeReducer";
import {logsReducer as logs, logStatsReducer as logStats} from "../pages/Dashboard/DashboardReducer";

export default combineReducers({
    project,
    employee,
    logs,
    logStats
});