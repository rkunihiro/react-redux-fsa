import { Action } from 'typescript-fsa';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { AppState } from '../store';
import { hogeActions } from '../actions/hogeActions';
import { HogeComponent } from '../components/hogeComponent';

export interface HogeActions {
    updateName: (v: string) => Action<string>;
    updateEmail: (v: string) => Action<string>;
}

function mapDispatchToProps(dispatch: Dispatch<Action<string>>) {
    return {
        updateName: (v: string) => {
            return dispatch(hogeActions.updateName(v));
        },
        updateEmail: (v: string) => {
            return dispatch(hogeActions.updateEmail(v));
        }
    };
}

function mapStateToProps(appState: AppState) {
    return Object.assign({}, appState.hoge);
}

export default connect(mapStateToProps, mapDispatchToProps)(HogeComponent);
