import DashboardLayout from "@/components/Layouts/DashboardLayout";
import {
  useBuyNowOrderStatusDeleteMutation,
  useBuyNowOrderStatusUpdateMutation,
  useGetAllOrderQuery,
} from "@/redux/feature/order/orderApi";
import { ReactElement, useState } from "react";
import css from "@/styles/dashboard.module.css";
import Loading from "@/components/Share/Loading";
import ViewModal from "@/components/UI/modal/ViewModal";

const AllOrder = () => {
  const { data, isLoading } = useGetAllOrderQuery(undefined);
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [updateOrder] = useBuyNowOrderStatusUpdateMutation();
  const [deleteOrder] = useBuyNowOrderStatusDeleteMutation();

  const orders = data?.data || [];

  // 🗑️ Delete Handler
  const deleteHandler = (id: string) => {
    if (confirm("Are you sure to delete this order?")) {
      deleteOrder(id);
    }
  };

  // 🔄 Update Handler (change status)
  const updateHandler = async (id: string, newStatus: string) => {
    if (confirm(`Change status to ${newStatus}?`)) {
      await updateOrder({ id, status: newStatus });
    }
  };

  return (
    <section className={css.all_order_container}>
      <div>
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Full Name</th>
              <th>Contact No</th>
              <th>Address</th>
              <th>Price</th>
              <th>Shipping</th>
              <th>Product</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          {isLoading ? (
            <Loading />
          ) : (
            <tbody>
              {[...orders].reverse().map((order: any, i: number) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{order?.fullName}</td>
                  <td>{order?.contactNo}</td>
                  <td>{order?.address}</td>
                  <td>৳{order?.totalPrice}</td>
                  <td>{order?.shippingMethod}</td>

                  <td>
                    <button
                      onClick={() => {
                        setOpen(true);
                        setItems(order?.products);
                      }}
                      className={css.status_success}
                    >
                      View
                    </button>
                  </td>

                  {/* 🟢 Status Control */}
                  <td>
                    <select
                      value={order?.status}
                      onChange={(e) => updateHandler(order._id, e.target.value)}
                      className={css.status_select}
                    >
                      <option value="pending">Pending</option>
                      <option value="assigned">Assigned</option>
                      <option value="delivered">Delivered</option>
                      <option value="cancelled">Cancelled</option>
                      <option value="returned">Returned</option>
                    </select>
                  </td>

                  <td>
                    <button
                      onClick={() => deleteHandler(order._id)}
                      className={css.order_delete}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
      {open && <ViewModal products={items} setOpen={setOpen} />}
    </section>
  );
};

export default AllOrder;

AllOrder.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout> {page} </DashboardLayout>;
};
