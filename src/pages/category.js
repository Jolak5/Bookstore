import { useDispatch, useSelector } from 'react-redux';
import { statusProperty } from '../components/redux/categories/categoriesSlice';
import StatusLoading from '../components/StatusLoading';
import '../styles/category.css';

export default function Category() {
  const { currentStatus } = useSelector((store) => store.checkStatus);
  const dispatch = useDispatch();

  return (
    <div className="StatusConstruction">
      <div>{currentStatus && <StatusLoading />}</div>

      <button className="checkStatus" type="button" onClick={() => dispatch(statusProperty())}>
        Check status
      </button>
    </div>
  );
}
