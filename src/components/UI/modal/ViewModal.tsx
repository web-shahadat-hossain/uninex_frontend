import css from "@/styles/dashboard.module.css";
import Image from "next/image";

const ViewModal = ({ setOpen, products }: any) => {
  console.log(products);
  return (
    <>
      <section className="modal_container show ">
        <div className="add-new-address-modal_container">
          <div className="add-new-address-modal-box">
            <h2>Products</h2>

            <section className={css.all_order_container}>
              <div>
                <table>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>category</th>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Size</th>
                      <th>Created At</th>
                    </tr>
                  </thead>
                  {
                    <tbody>
                      {products.map((order: any, i: number) => (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          <td>{order?.category}</td>
                          <td>
                            <Image
                              src={order?.image}
                              alt=""
                              width={100}
                              height={50}
                            />
                          </td>
                          <td>{order?.title}</td>
                          <td>৳{order?.discountPrice}</td>
                          <td>
                            {order?.selectedSize
                              ? order?.selectedSize
                              : "No Size"}
                          </td>
                          <td>{new Date(order.createdAt).toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  }
                </table>
              </div>
            </section>

            <button className="close_button" onClick={() => setOpen(false)}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ViewModal;
