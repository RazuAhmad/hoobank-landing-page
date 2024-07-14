function StatisticSection() {
  return (
    <div className="flex items-center justify-between">
      {/* Active user */}
      <div className="flex items-center gap-3">
        <h2 className="font-semibold text-[41px] leading-10">3800+</h2>
        <h3 className="gradient-text text-xl leading-7 font-normal">
          User Active
        </h3>
      </div>
      <div className="w-[2px] h-5 bg-slate-50"></div>

      {/* Trusted by company */}
      <div className="flex items-center gap-3">
        <h2 className="font-semibold text-[41px] leading-10">230+</h2>
        <h3 className="gradient-text text-xl leading-7 font-normal">
          TRUSTED BY COMPANY
        </h3>
      </div>

      <div className="w-[2px] h-5 bg-slate-50"></div>

      {/* Transaction */}
      <div className="flex items-center gap-3">
        <h2 className="font-semibold text-[41px] leading-10">$230M+</h2>
        <h3 className="gradient-text text-xl leading-7 font-normal">
          TRANSACTION
        </h3>
      </div>
    </div>
  );
}

export default StatisticSection;
