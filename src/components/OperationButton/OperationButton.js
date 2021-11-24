import { ACTIONS } from '../../App';
import '../../style.css';

export default function OperationButton({ dispatch, operation }) {
  return (
    <button
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
      className="accent-color"
    >
      {operation}
    </button>
  );
}
