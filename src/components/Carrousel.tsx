"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./Carrousel.module.css";
import { ALL_PRODUCTS_QUERYResult } from "@/sanity.types";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

// Accessible carrousel
// inspiration: https://www.a11y-collective.com/blog/accessible-carousel/
// MDN: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role
const Carrousel = ({
  imageArray,
}: {
  imageArray: ALL_PRODUCTS_QUERYResult[0]["imageGallery"];
}) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.Carrousel}>
      {/* BUTTONS */}
      <div className={styles.Carrousel_tabList} role="tablist">
        {imageArray &&
          imageArray.map(
            (image, index) =>
              image.asset && (
                // This extra <div> wrapper is needed to make the tablist scrollable
                <div key={image.asset._id}>
                  <button
                    role="tab"
                    aria-controls={`tabpanel-${index}`}
                    aria-selected={index === activeTab ? true : false}
                    id={`tab-${index}`}
                    onClick={() => setActiveTab(index)}
                  >
                    <Image
                      src={image.asset.url as string | StaticImport}
                      alt=""
                      fill
                      sizes="72px"
                      // Image loading optimizations
                      placeholder="blur"
                      blurDataURL={`${image.asset.metadata && image.asset.metadata.lqip}`}
                    />
                  </button>
                </div>
              )
          )}
      </div>

      {/* PANEL */}
      {imageArray &&
        imageArray.map(
          (image, index) =>
            image.asset && (
              <div
                className={styles.Carrousel_panel}
                key={image.asset._id}
                role="tabpanel"
                id={`tabpanel-${index}`} // `id` connects to button `aria-controls`
                aria-labelledby={`tab-${index}`} // `aria-labelledby` connects to button `id`
                hidden={index === activeTab ? false : true}
              >
                <Image
                  src={image.asset.url as string | StaticImport}
                  alt=""
                  fill
                  sizes="(max-width: 480px) 100vw, (max-width: 800px) 75vw, 50vw"
                  // Image loading optimizations
                  priority
                  placeholder="blur"
                  blurDataURL={`${image.asset.metadata && image.asset.metadata.lqip}`}
                />
              </div>
            )
        )}
    </div>
  );
};

export default Carrousel;
