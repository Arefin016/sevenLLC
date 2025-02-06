export function UpArrowSvg({ variant }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="#07A0EC"
      className="transition duration-150 ease-in-out group-hover:fill-buttonColor"
    >
      <path
        d="M16.5054 9.6015L7.89838 18.2085L6.48438 16.7945L15.0904 8.1875H7.50538V6.1875H18.5054V17.1875H16.5054V9.6015Z"
        fill={variant=="transparent" ? "white" :"#07A0EC"}
        className={`${
          variant == "transparent"
            ? "group-hover:fill-buttonColor"
            : "group-hover:fill-[#FFF]"
        } transition duration-150`}
      />
    </svg>
  );
}
