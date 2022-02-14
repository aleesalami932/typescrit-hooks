import React, { useState, useEffect, useMemo } from "react";

interface Beverage {
  name: string;
  producerName: string;
  beverageName: string;
  beverageColor: string;
  beverageStyle: string;
  producerLocation: string;
  abv?: number;
  ibu?: number;
  logo: string;
  level: number;
}

function useFetchData<payload>(url: string): {
  data: payload | null;
  done: boolean;
} {
  const [data, setData] = useState<payload | null>(null);
  const [done, setDone] = useState<boolean>(false);

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((d: payload) => {
        setData(d);
        setDone(true);
      });
  }, [url]);
  return {
    data,
    done,
  };
}

const CustomHookComponent = () => {
  const { data, done } = useFetchData<Beverage[]>("/hv-taplist.json");
  const portlandTaps = useMemo(
    () =>
      (data || []).filter((bev) => bev.producerLocation.includes("Portland")),
    [data]
  );

  return (
    <div>
      {portlandTaps.length && <img alt="bev img" src={portlandTaps![4].logo} />}
    </div>
  );
};

export default CustomHookComponent;
