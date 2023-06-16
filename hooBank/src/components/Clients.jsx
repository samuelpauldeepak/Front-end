import React from "react";
import styles from "../style";
import { clients } from "../constants";

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} mt-5 mb-24`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div
            key={client.id}
            className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[100px]`}
          >
            <img
              src={client.logo}
              alt="client logo"
              className="sm:w-[192px] w-[100px] object-contain "
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
