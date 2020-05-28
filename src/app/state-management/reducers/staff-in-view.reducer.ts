import { Staff, StaffState } from 'src/app/model/staff.model';
import * as StaffActions from '../actions/staff-in-view.action';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { environment } from 'src/environments/environment';

const initialStaff: StaffState = null;

export const currentStaffReducer = (
  staff = initialStaff,
  action: StaffActions.Actions
): StaffState => {
  switch (action.type) {
    case StaffActions.SET_STAFF:
      console.log('Setting staff');

      LocalStorageService.setSavedState(
        { ...staff, staff: action.staff },
        environment.currentStaffStateKey
      );
      return { ...staff, staff: action.staff };

    case StaffActions.CLEAR_STAFF:
      localStorage.removeItem(environment.currentStaffStateKey);
      return initialStaff;

    default:
      return initialStaff;
  }
};
