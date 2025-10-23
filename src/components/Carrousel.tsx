"use client";

import Image from "next/image";
import { imageUrl } from "@/sanity/lib/imageUrl";
import { useState } from "react";
import { ImageType } from "../types";
import styles from "./Carrousel.module.css";

// Accessible carrousel
// inspiration: https://www.a11y-collective.com/blog/accessible-carousel/
// MDN: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role
const Carrousel = ({ imageArray }: { imageArray: ImageType[] }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.Carrousel}>
      {/* BUTTONS */}
      <div className={styles.Carrousel_tabList} role="tablist">
        {imageArray &&
          imageArray.map((image, index) => (
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
                  src={`${image.asset && imageUrl(image.asset).url()}`}
                  alt=""
                  fill
                  sizes="72px"
                  // Image loading optimizations
                  placeholder="blur"
                  blurDataURL={`${image.asset?.metadata && image.asset.metadata.lqip}`}
                />
              </button>
            </div>
          ))}
      </div>

      {/* PANEL */}
      {imageArray &&
        imageArray.map((image, index) => (
          <div
            className={styles.Carrousel_panel}
            key={image._key}
            role="tabpanel"
            id={`tabpanel-${index}`} // `id` connects to button `aria-controls`
            aria-labelledby={`tab-${index}`} // `aria-labelledby` connects to button `id`
            hidden={index === activeTab ? false : true}
          >
            <Image
              src={`${image.asset && imageUrl(image.asset).url()}`}
              alt=""
              fill
              sizes="(max-width: 480px) 100vw, (max-width: 800px) 75vw, 50vw"
              // Image loading optimizations
              priority
              placeholder="blur"
              blurDataURL={`${image.asset?.metadata && image.asset.metadata.lqip}`}
            />
          </div>
        ))}
    </div>
  );
};

export default Carrousel;
