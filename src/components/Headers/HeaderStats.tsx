import { motion } from "framer-motion";
import React from "react";

// components

import CardStats from "src/components/Cards/CardStats";

export default function HeaderStats() {
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      top: -50,
    },
    visible: {
      opacity: 1,
      top: 0,
    },
  };

  return (
    <>
      {/* Header */}
      <div className="relative pt-12 pb-32 bg-blueGray-800 md:pt-32">
        <div className="w-full px-4 mx-auto md:px-10">
          <div>
            {/* Card stats */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap"
            >
              <motion.div
                variants={item}
                className="relative w-full px-4 lg:w-6/12 xl:w-3/12"
              >
                <CardStats
                  statSubtitle="TRAFFIC"
                  value={350_897}
                  statArrow="up"
                  statPercent="3.48"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
              </motion.div>
              <motion.div
                variants={item}
                className="relative w-full px-4 lg:w-6/12 xl:w-3/12"
              >
                <CardStats
                  statSubtitle="NEW USERS"
                  value={2_356}
                  statArrow="down"
                  statPercent="3.48"
                  statPercentColor="text-red-500"
                  statDescripiron="Since last week"
                  statIconName="fas fa-chart-pie"
                  statIconColor="bg-orange-500"
                />
              </motion.div>
              <motion.div
                variants={item}
                className="relative w-full px-4 lg:w-6/12 xl:w-3/12"
              >
                <CardStats
                  statSubtitle="SALES"
                  value={924}
                  statArrow="down"
                  statPercent="1.10"
                  statPercentColor="text-orange-500"
                  statDescripiron="Since yesterday"
                  statIconName="fas fa-users"
                  statIconColor="bg-pink-500"
                />
              </motion.div>
              <motion.div
                variants={item}
                className="relative w-full px-4 lg:w-6/12 xl:w-3/12"
              >
                <CardStats
                  statSubtitle="PERFORMANCE"
                  value={49.65}
                  statArrow="up"
                  statPercent="12"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
