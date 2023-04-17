import React, { useState } from "react";
import { AWG_VALUES, MM_VALUES } from "../constants/awg";
import classNames from "classnames";
import Header from "./Header";
// import img from "../assets/undraw_calculator_re_alsc.svg"
import img from "../assets/Group1.svg";

const VoltageDrop = () => {
  const [voltage, setVoltage] = useState();
  const [current, setCurrent] = useState();
  const [wiregauge, setWireGauge] = useState();
  const [metricCross, setMetricCross] = useState();
  const [length, setLength] = useState();
  const [drop, setDrop] = useState();
  const [isDrop, setIsDrop] = useState(false);
  const [awg, setAwg] = useState(true);

  const title1 = "VOLTAGE DROP CALCULATOR";
  // specific resistance for copper (ohmm2/m)
  const ro = 0.0175;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (awg) {
      if (wiregauge >= 0) {
        let mm2 = 0.012668 * 92 ** ((36 - wiregauge) / 19.5);
        setMetricCross(mm2);
        let res = ro;
        let r = ro * ((2 * length * 0.3048) / mm2);
        let u = (current * r).toFixed(2);
        setDrop(u);
        setIsDrop(true);
      } else {
        if (wiregauge === "4 / 0") {
          let mm2 = 0.012668 * 92 ** ((36 + 3) / 19.5);
          setMetricCross(mm2);
          let res = ro;
          let r = ro * ((2 * length * 0.3048) / mm2);
          let u = (current * r).toFixed(2);
          setDrop(u);
          setIsDrop(true);
        } else if (wiregauge === "3 / 0") {
          let mm2 = 0.012668 * 92 ** ((36 + 2) / 19.5);
          setMetricCross(mm2);
          let res = ro;
          let r = ro * ((2 * length * 0.3048) / mm2);
          let u = (current * r).toFixed(2);
          setDrop(u);
          setIsDrop(true);
        } else if (wiregauge === "2 / 0") {
          let mm2 = 0.012668 * 92 ** ((36 + 1) / 19.5);
          setMetricCross(mm2);
          let res = ro;
          let r = ro * ((2 * length * 0.3048) / mm2);
          let u = (current * r).toFixed(2);
          setDrop(u);
          setIsDrop(true);
        } else if (wiregauge === "1 / 0") {
          let mm2 = 0.012668 * 92 ** (36 / 19.5);
          setMetricCross(mm2);
          let res = ro;
          let r = ro * ((2 * length * 0.3048) / mm2);
          let u = (current * r).toFixed(2);
          setDrop(u);
          setIsDrop(true);
        }
      }
    } else {
      let res = ro;
      let r = ro * ((2 * length) / wiregauge);
      let u = (current * r).toFixed(2);
      setDrop(u);
      setIsDrop(true);
    }
  };

  const resetForm = () => {
    setCurrent("");
    setLength("");
    setVoltage("");
    setDrop("");
    setIsDrop(false);
  };

  return (
    <>
      <div className="md:p-5">
        <Header title={title1} />
        <form
          className="flex flex-col gap-2 md:w-full w-4/5"
          onSubmit={handleSubmit}
        >
          {/* <label htmlFor="voltage">Input Voltage (V)</label> */}
          <input
            type="number"
            id="voltage"
            name="voltage"
            value={voltage}
            // onChange={(e)=>console.log(e)}
            onChange={(e) => setVoltage(e.target.value)}
            required
            placeholder="Input Voltage (V)"
            className=" md:w-1/2 py-2 px-4 border border-[#e2e2e2] placeholder-gray-400  "
          />

          {/* <label htmlFor="current">Input Current (A)</label> */}
          <input
            type="number"
            id="current"
            name="current"
            value={current}
            step="0.01"
            onChange={(e) => setCurrent(e.target.value)}
            required
            placeholder="Input Current (A)"
            className="md:w-1/2 py-2 px-4 border border-[#e2e2e2] placeholder-gray-400  "
          />
          <div className="flex flex-col gap-2 items-left">
            {/* <label htmlFor="length">Wire Length (One Way)</label> */}
            <input
              type="number"
              id="length"
              name="length"
              onChange={(e) => setLength(e.target.value)}
              required
              placeholder="Wire Length (One Way)"
              className="md:w-1/2 py-2 px-4 border border-[#e2e2e2] placeholder-gray-400 "
            />
            <div>
              <input
                type="radio"
                id="feet"
                name="measure1"
                checked={awg}
                onClick={(e) => setAwg(true)}
                className="radio-custom"
              />
              <label
                htmlFor="feet"
                className="ml-1 mr-6 pr-8 font-semibold text-[#808080] text-[14px] m radio-custom-label"
              >
                Feet
              </label>
              <input
                type="radio"
                id="meter"
                name="measure1"
                checked={!awg}
                onClick={(e) => setAwg(false)}
                className="radio-custom"
              />
              <label
                htmlFor="meter"
                className="ml-1 font-semibold text-[#808080] text-[14px] radio-custom-label"
              >
                Meters
              </label>
            </div>
            {/* <button
            onClick={(e) => setAwg(true)}
            className={classNames(
              awg
                ? "text-sm rounded-full bg-slate-200 py-1 px-2 flex hover:bg-slate-300 border border-gray-500 items-center"
                : "text-sm rounded-full bg-slate-200 py-1 px-2 flex  hover:bg-slate-300 items-center"
            )}
          >
            feet
          </button>
          <button
            onClick={(e) => setAwg(false)}
            className={classNames(
              !awg
                ? "text-sm rounded-full bg-slate-200 py-1 px-2 flex hover:bg-slate-300 border border-gray-500 items-center"
                : "text-sm rounded-full bg-slate-200 py-1 px-2 flex  hover:bg-slate-300 items-center"
            )}
          >
            m
          </button> */}
          </div>

          <div className="flex flex-col gap-2 items-left">
            <div>
              {/* <label
              htmlFor="wiregauge"
              className="pr-3 font-semibold text-[#808080] text-[14px] m radio-custom-label"
            >
              Wire Gauge
            </label> */}
              <select
                className="md:w-1/2 py-3 px-4 border border-[#e2e2e2] text-[14px] text-gray-400  "
                type="number"
                id="wiregauge"
                name="wiregauge"
                value={wiregauge}
                onChange={(e) => setWireGauge(e.target.value)}
                required
              >
                {awg
                  ? AWG_VALUES.map((val) => {
                      return <option>{val}</option>;
                    })
                  : MM_VALUES.map((val) => {
                      return <option>{val}</option>;
                    })}
              </select>
            </div>

            <div>
              <input
                type="radio"
                id="awg"
                name="measure"
                checked={awg}
                onClick={(e) => setAwg(true)}
                className="radio-custom"
              />
              <label
                htmlFor="awg"
                className="ml-1 mr-6 pr-8  font-semibold text-[#808080] text-[14px] m radio-custom-label"
              >
                AWG
              </label>
              <input
                type="radio"
                id="mm"
                name="measure"
                checked={!awg}
                onClick={(e) => setAwg(false)}
                className="radio-custom"
              />
              <label
                htmlFor="mm"
                className="ml-1 font-semibold text-[#808080] text-[14px] radio-custom-label"
              >
                mm<sup>2</sup>
              </label>
            </div>
          </div>
          <div className="flex gap-4">
            <button
              type="submit"
              className="md:w-[122px] text-[14px] mt-1 py-2 px-4 border border-[#29abe0] text-[#29abe0] font-semibold "
            >
              CALCULATE
            </button>
            <button
              className="md:w-[122px] text-[14px] mt-1 py-2 px-4 border border-gray-500 text-gray-500 font-semibold "
              type="reset"
              onClick={() => resetForm()}
            >
              RESET
            </button>
          </div>
        </form>
        {/* <div>{voltage}</div> */}
        {/* <div>{current ** voltage}</div> */}
        {/* <div>{wiregauge}</div> */}
        {/* <div>{length}</div> */}
        <div className=" flex gap-4 mt-6">
          <div className="flex w-1/2 flex-col h-20 text-white font-semibold h-[134px] items-center justify-center	align-middle bg-[#29abe0]">
            <p>VOLTAGE DROP</p>
            {!isDrop ? (
              <p className="text-4xl font-mono font-extrabold">0.0</p>
            ) : (
              <p className="text-4xl font-mono font-extrabold">{drop}V</p>
            )}
          </div>
          <div className="flex w-1/2 h-20 flex-col text-white font-semibold items-center justify-center	align-middle bg-[#29abe0]">
            <p>VOLTAGE DROP</p>
            {!isDrop ? (
              <p className="text-4xl font-mono font-extrabold">0.0</p>
            ) : (
              <p className="text-4xl font-mono font-extrabold">{drop}V</p>
            )}
          </div>
        </div>
      </div>
      <div className="flex">
        <img src={img} />
      </div>
    </>
  );
};

export default VoltageDrop;
