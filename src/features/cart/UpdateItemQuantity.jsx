import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItemQuantity,
  getCurrentQuantityById,
  increaseItemQuantity,
} from "./cartSlice";
import Button from "../../ui/Button";
// import { getCart } from "./cartSlice";

export default function UpdateItemQuantity({ id }) {
  const currentQuntity = useSelector(getCurrentQuantityById(id));
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button type="round" onClick={() => dispatch(decreaseItemQuantity(id))}>
        -
      </Button>
      <span className="text-sm font-medium">{currentQuntity}</span>
      <Button type="round" onClick={() => dispatch(increaseItemQuantity(id))}>
        +
      </Button>
    </div>
  );
}
