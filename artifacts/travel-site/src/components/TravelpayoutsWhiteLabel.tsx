import { Helmet } from "react-helmet-async";

const SCRIPT_ID = "travelpayouts-white-label";

export function TravelpayoutsWhiteLabel() {
  return (
    <>
      <Helmet>
        <script id={SCRIPT_ID} type="module">
          {`
            if (!document.getElementById("${SCRIPT_ID}-loader")) {
              const script = document.createElement("script");
              script.id = "${SCRIPT_ID}-loader";
              script.async = true;
              script.type = "module";
              script.src = "https://tpwgt.com/wl_web/main.js?wl_id=16502";
              document.head.appendChild(script);
            }
          `}
        </script>
      </Helmet>

      <div
        id="tpwl-search"
        className="w-full rounded-2xl bg-white shadow-2xl ring-1 ring-black/5"
      />
    </>
  );
}

export function TravelpayoutsResults() {
  return (
    <div
      id="tpwl-tickets"
      className="w-full min-h-[320px] rounded-2xl border bg-card p-4 shadow-sm"
    />
  );
}
