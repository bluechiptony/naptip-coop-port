import { AdminContext } from 'src/app/model/authentication.model';
import * as AdminContextActions from '../actions/admin-context.action';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { environment } from 'src/environments/environment';

const initialAdmin: AdminContext = {
  context: 'HUMAN_RESOURCES',
};

export const adminContextReducer = (
  state: AdminContext = initialAdmin,
  action: AdminContextActions.Actions
) => {
  switch (action.type) {
    case AdminContextActions.SET_ADMIN_CONTEXT:
      console.log(action.adminContext);

      LocalStorageService.setSavedState(
        {
          ...state,
          context: action.adminContext,
        },
        environment.adminContextKey
      );

      return {
        ...state,
        context: action.adminContext,
      };

    case AdminContextActions.CLEAR_ADMIN_CONTEXT:
      LocalStorageService.clearState(environment.adminContextKey);

    default:
      return LocalStorageService.getSavedState(environment.adminContextKey);
  }
};
