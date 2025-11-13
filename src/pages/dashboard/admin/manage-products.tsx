import { useGetProductsQuery } from "@/redux/feature/product/ProductApi";
import css from "@/styles/dashboard.module.css";
import { ReactElement, useState } from "react";
import Loading from "@/components/Share/Loading";
import { IProduct } from "@/type/type";
import DashboardLayout from "@/components/Layouts/DashboardLayout";
import Image from "next/image";

const ManageProducts = () => {
  const { data, isLoading } = useGetProductsQuery(undefined);

  const products = data?.data || [];

  // const deleteHandler=(id:any)=>{
  // console.log(id);

  // const confirm= window.confirm("You want to delete")
  // if(confirm){
  // deleteProduct(id)
  // }
  // }

  return (
    <section className={css.all_order_container}>
      <div>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Images</th>
              <th>Title</th>
              <th>category</th>
              <th>Price</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          {isLoading ? (
            <Loading />
          ) : (
            <tbody>
              {[...products].reverse().map((product: IProduct, i: number) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>
                    <Image
                      src={product?.image}
                      alt=""
                      width={100}
                      height={50}
                    />
                  </td>
                  <td>{product?.title}</td>
                  <td>{product?.category}</td>
                  <td>{product?.price}</td>
                  <td>
                    <button className={css.status_pending}>Update</button>
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
      {/* {
            open && <ProductUpdatePopup setOpen={setOpen} data={productInfo} />
       }  */}
    </section>
  );
};

export default ManageProducts;

ManageProducts.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout> {page} </DashboardLayout>;
};
