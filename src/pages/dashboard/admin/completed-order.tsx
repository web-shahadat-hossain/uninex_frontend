import DashboardLayout from "@/components/Layouts/DashboardLayout";
import { useGetAllOrderQuery } from "@/redux/feature/order/orderApi";
import { ReactElement, useState } from "react";
import css from "@/styles/dashboard.module.css";
import Loading from "@/components/Share/Loading";
import ViewModal from "@/components/UI/modal/ViewModal";

const AllOrder = () => {
  const { data, isLoading } = useGetAllOrderQuery(undefined);
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([]);

  const orders =
    data?.data.filter((product: any) => product.status !== false) || [];

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
              <th>Shopping</th>
              <th>Product</th>
              <th>Status</th>
              <th>Delete</th>
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
                  <td>
                    <button className={css.status_success} disabled>
                      Success
                    </button>
                  </td>
                  <td>
                    <button className={css.order_delete}>
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
