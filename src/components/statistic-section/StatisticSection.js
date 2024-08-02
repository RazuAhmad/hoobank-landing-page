function StatisticSection() {
  return (
    <div className="flex items-center justify-center flex-wrap px-6 sm:px-0">
      {/* Active user */}
      <div className="flex flex-1 items-center gap-2 sm:gap-3 m-3">
        <h2 className="font-semibold text-3xl md:text-[41px] leading-10">
          3800+
        </h2>
        <h3 className="gradient-text text-base md:text-xl leading-7 font-normal">
          User Active
        </h3>
      </div>

      {/* Trusted by company */}
      <div className="flex flex-1 items-center gap-2 sm:gap-3 m-3">
        <h2 className="font-semibold text-3xl md:text-[41px] leading-10">
          230+
        </h2>
        <h3 className="gradient-text text-base md:text-xl leading-7 font-normal">
          TRUSTED BY COMPANY
        </h3>
      </div>

      {/* Transaction */}
      <div className="flex flex-1 items-center gap-2 sm:gap-3 m-3">
        <h2 className="font-semibold text-3xl md:text-[41px] leading-10">
          $230M+
        </h2>
        <h3 className="gradient-text text-base md:text-xl leading-7 font-normal">
          TRANSACTION
        </h3>
      </div>
    </div>
  );
}

export default StatisticSection;
