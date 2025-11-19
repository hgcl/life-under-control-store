import OrderItem from "@/src/components/OrderItem/OrderItem";
import { getMyOrders } from "@/sanity/lib/orders/getMyOrders";

// Imports: external libraries
import { auth } from "@clerk/nextjs/server";
import { Page } from "@hgcle/ui-library";
import { redirect } from "next/navigation";

const Orders = async () => {
  const { userId } = await auth();

  if (!userId) {
    console.log(">>> No Clerk user ID");
    return redirect("/");
  }

  const orders = await getMyOrders(userId);

  return (
    <Page title="My orders">
      {orders.length === 0 ? (
        <p>You have not placed any order yet.</p>
      ) : (
        orders.map((order) => <OrderItem key={order._id} order={order} />)
      )}
    </Page>
  );
};

export default Orders;
