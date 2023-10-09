const PriceBox = (props: {
  price: string;
  duration: string;
  packageName: string;
  children: React.ReactNode;
}) => {
  const { price, duration, packageName, children } = props;
  return (
    <>
      <div className="w-full">
        <div
          className="wow fadeInUp h-100% relative z-10 rounded-md bg-white px-8 py-10 shadow-signUp dark:bg-[#1D2144]"
          data-wow-delay=".1s"
          style={{ height: "100%" }}
        >
          <div className="flex h-full flex-col justify-between p-4">
            <div>
              <div className="flex justify-center">
                <h3 className="price mb-5 text-3xl font-bold text-black dark:text-white">
                  <span className="time text-center text-black dark:text-white">
                    {packageName}
                  </span>
                </h3>
              </div>
              <hr className="my-3 h-px w-full border-0 bg-gray-500 dark:bg-gray-100"></hr>
              <div>
                <div>{children}</div>
              </div>
            </div>
            <div>
              <div className="justify-left flex">
                <h6 className="price mb-2 text-2xl font-bold text-black dark:text-white">
                  $<span className="amount">{price}</span>
                  <span className="time text-body-color">/{duration}</span>
                </h6>
              </div>
              <div className="border-opacity-15 border-body-color dark:border-white dark:border-opacity-10">
                <button className="flex w-full items-center justify-center rounded-md bg-primary p-3 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceBox;
