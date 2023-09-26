export default function Products() {
  return (
    <>
      <section className="bg-white text-black rounded-lg w-[30%] m-auto mt-5 p-9 my-10">
        <h1 className="text-3xl font-bold my-5">Your Shopping Cart</h1>
        <section className="flex justify-between">
          <h1 className="text-2xl font-bold">Test Item</h1>
          <h2 className="text-xl font-bold">$ total cost</h2>
        </section>

        <section className="flex justify-between">
          <h2 className="text-xl font-bold">xcount</h2>
          <section className="">
            <button className="px-3 mx-3 border-2 border-black">-</button>
            <button className="px-3 border-2 border-black">+</button>
          </section>
        </section>
      </section>
    </>
  );
}
