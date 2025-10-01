import { getMyOrders } from "@/sanity/lib/orders/getMyOrders";
import OrderItem from "@/src/components/OrderItem";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const Orders = async () => {
  const { userId } = await auth();

  if (!userId) {
    return redirect("/");
  }

  const orders = await getMyOrders(userId);

  return (
    <>
      <h1>My orders</h1>
      {orders.length === 0 ? (
        <p>You have not placed any order yet.</p>
      ) : (
        orders.map((order) => <OrderItem key={order._id} order={order} />)
      )}
    </>
  );
};

export default Orders;
