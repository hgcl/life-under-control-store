type BannerProps = {
  message: string;
  disabled?: boolean;
};

const Banner = ({ message, disabled = false }: BannerProps) => {
  if (disabled) {
    return;
  }

  return (
    <section
      style={{
        backgroundColor: "black",
        color: "white",
        fontWeight: "bold",
        fontFamily: "sans-serif",
        padding: "16px",
        textAlign: "center",
      }}
    >
      {message}
    </section>
  );
};

export default Banner;
