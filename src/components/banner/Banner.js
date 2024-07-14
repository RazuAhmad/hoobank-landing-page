import { ArrowUpIcon, DiscountIcon, Image, RobotHandImg } from "../exports";

function Banner() {
  return (
    <div className="flex items-center py-16">
      <div className="flex flex-col flex-1">
        <div className="discount-text-bg flex items-center max-w-96 py-[6px] px-4 rounded-[10px]">
          <Image src={DiscountIcon} width={32} height={32} />
          <p className="font-normal text-lg leading-7 text-[#ffffffb3]">
            <span className="text-white">20% </span>Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>
        <div className="flex">
          <h1 className="text-7xl font-semibold leading-[100px]">
            The Next <br />
            <span className="gradient-text">Generation</span>
          </h1>

          {/* Get Started circle */}
          <div className="text-lg font-medium leading-6 w-[140px] h-[140px] rounded-full flex flex-col justify-center items-center  border-gradient">
            <div className="flex items-center justify-center">
              <p>Get</p>
              <Image src={ArrowUpIcon} alt="arrow up icon" />
            </div>
            <p>Started</p>
          </div>
        </div>
        <h1 className="text-[68px] leading-[100px] font-semibold">
          Payment Method.
        </h1>
        <p className="text-lg text-[#ffffffb3] font-normal leading-7 max-w-[470px] mt-5">
          Our team of experts use a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
      <div className="flex-1">
        <Image
          src={RobotHandImg}
          alt="robot hand"
          className="flex-1 w-full h-full"
        />
      </div>
    </div>
  );
}

export default Banner;
