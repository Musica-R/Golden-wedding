import React, { useEffect, useState } from "react";
import ListingCard from "../ListingCard/ListingCard";

const PAGE_SIZE = 6;

export default function ListingGrid({ listings }) {
  const [visible, setVisible] = useState(PAGE_SIZE);

  // Reset pagination whenever the filtered/sorted list changes (new
  // search term, sort order, or category) so "Load More" starts fresh.
  useEffect(() => {
    setVisible(PAGE_SIZE);
  }, [listings]);

  if (!listings.length) {
    return (
      <p className="gw-listing-grid__empty">
        No listings match your search yet — try a different keyword or filter.
      </p>
    );
  }

  const shown = listings.slice(0, visible);
  const hasMore = visible < listings.length;

  return (
    <>
      <div className="gw-listing-grid">
        {shown.map((listing, i) => (
          <ListingCard listing={listing} index={i} key={listing.id} />
        ))}
      </div>
      {hasMore && (
        <div className="gw-listing-grid__more">
          <button
            type="button"
            className="gw-btn"
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
}
