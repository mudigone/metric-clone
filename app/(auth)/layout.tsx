import Image from "next/image";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col-reverse md:flex-row ">
      <section className="md:w-1/2  bg-metric   w-full hidden md:block ">
        <div className="flex justify-center items-center h-screen flex-col space-y-20">
          <span className="font-extrabold text-white text-3xl w-3/4 text-center">
            Manage Your Business{" "}
            <span className="text-[#FFDC4C]">Finances</span> in One App!
          </span>
          <div className="flex items-start space-x-10">
            <Image
              src="https://web.metricapp.co/assets/ArrowLogin-9b7ace17.svg"
              alt="arrow"
              width={100}
              height={100}
            />
            <Image
              src="https://web.metricapp.co/assets/MobilePic-34d12188.svg"
              alt="arrow"
              width={180}
              height={180}
            />
          </div>
          <div className="w-1/2 text-white text-xs flex flex-col text-center">
            <span>
              To make the most of your business account, please make sure that
              Metric is up to date.
            </span>
            <span className="font-bold">www.metricapp.co</span>
          </div>
        </div>
      </section>
      <section className="md:w-1/2  p-8 w-full ">{children}</section>
    </div>
  );
}
