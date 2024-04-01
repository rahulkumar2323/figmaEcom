import { RxCross1 } from "react-icons/rx";
import { removeProduct } from "../redux/cartRedux";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";

export default function CartPage() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  // payment integration
  const makePayment = async () => {
    try {
      const stripe = await loadStripe(
        "pk_test_51OzLjHSJA1Gz1V0ib0yp7Y1U9r5rCshACYDr84g5raocgCvEX0E6494jrjQmCD4ai4nlfQWJwvAI0zseSxFVtn5P005KIN1H0U"
      );
      const response = await fetch("/api/checkout/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          products: cart,
        }),
      });
      const session = await response.json();

      const result = stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        console.log(result.error);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex flex-col py-16 px-8 md:px-36">
      <p className="font-semibold text-xl border-b-[3.25px] border-black leading-[4.5rem] mb-2">
        {cart.products.length} items in Cart
      </p>
      <p className="font-semibold text-xl border-b-2 border-black leading-[2.75rem] mb-6">
        Item
      </p>
      <div className="flex flex-col gap-4">
        {cart.products.map((product) => (
          <div
            className="flex flex-col gap-5 border-b-2 border-black pb-8"
            key={product._id}
          >
            <div className="flex justify-between items-center">
              <div className="flex gap-8 items-center">
                <img
                  className="w-24 h-24 object-cover rounded-3xl"
                  src={product.images[0]}
                  alt=""
                />
                <p className="text-2xl font-semibold">{product.title}</p>
              </div>
              <button
                onClick={() =>
                  dispatch(removeProduct({ productId: product._id }))
                }
                className="p-2 border-2 border-black rounded-full text-xl font-semibold hover:bg-black hover:text-white duration-200"
              >
                <RxCross1 />
              </button>
            </div>
            <div className="flex justify-end">
              <p className="font-semibold text-lg">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-5 w-1/2 md:w-2/5 self-end mt-3">
        <p className="font-semibold text-xl mr-24">Shipping</p>
        <div className="font-semibold text-xl flex justify-betweenw">
          <p className="mr-24">Total*</p>
          <p>${cart.total}</p>
        </div>
        <p className="font-semibold mr-24">UPDATE CART</p>

        <button
          onClick={makePayment}
          className="bg-black text-white hover:text-black font-semibold w-full rounded-full py-2 mb-6 md:py-2 border-2 border-white hover:bg-white hover:border-2 hover:border-black duration-300"
        >
          CHECKOUT
        </button>

        <div className="flex flex-col gap-2">
          <small>*Taxes and shipping collected at checkout</small>
          <div className="flex items-start gap-2">
            <input type="checkbox" />
            <small>
              By ticking this box, you confirm your agreement to our Figma Store
              Terms of Sale
            </small>
          </div>
          <div className="flex items-start gap-2">
            <input type="checkbox" />
            <small>By ticking this box, you agree to our Privacy Policy</small>
          </div>
          <small className="font-semibold">
            By clicking on the “Checkout” button you agree that you have read
            and accept our Terms of Sale.
          </small>
        </div>
      </div>
    </div>
  );
}
