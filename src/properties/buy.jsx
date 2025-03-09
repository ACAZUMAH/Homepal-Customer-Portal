import React, { useState } from "react";
import { useGetPropertiesWithPages } from "./hooks";
import { Properties } from "./properties";

export const Buy = () => {
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("Oldest");
  const [page, setPage] = useState(1);

  const search = (filters) => {
    setFilters({ ...filters });
  };

  const { pageInfo, properties, loading, error } = useGetPropertiesWithPages({
    ...filters,
    sort: sort,
    price: filters.price ? Number(filters.price) : null,
    mode: "SALE",
    limit: 16,
    page,
  });

  return (
    <>
      <Properties
        pageInfo={pageInfo}
        properties={properties}
        loading={loading}
        error={error}
        search={search}
        sort={sort}
        page={page}
        setSort={setSort}
        setPage={setPage}
        setFilters={setFilters}
      />
    </>
  );
};
