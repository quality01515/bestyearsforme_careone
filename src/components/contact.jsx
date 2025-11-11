export const Contact = () => {
  const scale = 2.05;

  return (
    <div className="h-[1500px]">
      <iframe
          src="https://fs11.formsite.com/nhsi3R/uxmmknexwq/index"
          title="Formsite form"
          style={{
            border: 0,
            display: "block",
            transform: `scale(${scale})`,
            transformOrigin: "0 0",
            width: `calc(100% / ${scale})`,
            height: `calc(100% / ${scale})`,
          }}
          loading="lazy"
      />
    </div>
  );
};
