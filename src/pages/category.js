import { useDispatch, useSelector } from 'react-redux';
import { statusProperty } from '../components/redux/categories/categoriesSlice';
import StatusLoading from '../components/StatusLoading';

export default function Category() {
  const { currentStatus } = useSelector((store) => store.checkStatus);
  const dispatch = useDispatch();

  return (
    <div>
      <div>{currentStatus && <StatusLoading /> }</div>

      <button type="button" onClick={() => dispatch(statusProperty())}>Check status</button>
    </div>
  );
}