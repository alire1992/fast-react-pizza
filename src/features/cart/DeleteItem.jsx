import { useDispatch } from "react-redux";

import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";

export default function DeleteItem({ id }) {
  const dispatch = useDispatch();

  return (
    <Button type="delete" onClick={() => dispatch(deleteItem(id))}>
      Delete
    </Button>
  );
}
