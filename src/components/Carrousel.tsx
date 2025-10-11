"use client";

import Image from "next/image";
import { imageUrl } from "@/sanity/lib/imageUrl";
import { useState } from "react";
import styles from "./Carrousel.module.css";

type imageArrayProps = {
  imageArray: { _key: string; asset?: { _ref: string } }[];
};

// Accessible carrousel
// inspiration: https://www.a11y-collective.com/blog/accessible-carousel/
// MDN: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role
const Carrousel = ({ imageArray }: imageArrayProps) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.Carrousel}>
      {/* BUTTONS */}
      <div className={styles.Carrousel_tabList} role="tablist">
        {imageArray.map((image, index) => (
          // This extra <div> wrapper is needed to make the tablist scrollable
          <div key={image._key}>
            <button
              role="tab"
              aria-controls={`tabpanel-${index}`}
              aria-selected={index === activeTab ? true : false}
              id={`tab-${index}`}
              onClick={() => setActiveTab(index)}
            >
              <Image
                src={`${image.asset && imageUrl(image.asset._ref).url()}`}
                alt=""
                fill
                sizes="72px"
              />
            </button>
          </div>
        ))}
      </div>

      {/* PANELS */}
      {imageArray.map((image, index) => (
        <div
          className={styles.Carrousel_panel}
          key={image._key}
          role="tabpanel"
          id={`tabpanel-${index}`} // `id` connects to button `aria-controls`
          aria-labelledby={`tab-${index}`} // `aria-labelledby` connects to button `id`
          hidden={index === activeTab ? false : true}
        >
          <Image
            src={`${image.asset && imageUrl(image.asset._ref).url()}`}
            alt=""
            fill
            sizes="200px"
          />
        </div>
      ))}
    </div>
  );
};

export default Carrousel;
