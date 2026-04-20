const WIDGET_PAGE = `${import.meta.env.BASE_URL}travelpayouts-white-label.html`;

export function TravelpayoutsWhiteLabel() {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5">
      <iframe
        title="Travelpayouts White Label"
        src={WIDGET_PAGE}
        className="block h-[1700px] w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export function TravelpayoutsResults() {
  return null;
}
