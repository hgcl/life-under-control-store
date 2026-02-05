"use client";

import styles from "./Carousel.module.css";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ALL_PRODUCTS_QUERY_RESULT } from "@/sanity.types";

import Image from "next/image";
import { useState } from "react";

// Accessible Carousel
// inspiration: https://www.a11y-collective.com/blog/accessible-carousel/
// MDN: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role
const Carousel = ({
  imageArray,
}: {
  imageArray: ALL_PRODUCTS_QUERY_RESULT[0]["imageGallery"];
}) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.Carousel}>
      {/* BUTTONS */}
      <div className={styles.Carousel__tabList} role="tablist">
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
              ),
          )}
      </div>

      {/* PANEL */}
      {imageArray &&
        imageArray.map(
          (image, index) =>
            image.asset && (
              <div
                className={styles.Carousel__panel}
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
            ),
        )}
    </div>
  );
};

export default Carousel;
