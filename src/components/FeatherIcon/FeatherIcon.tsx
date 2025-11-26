import * as Icons from "react-feather";
// import type Icon as IconType from "react-feather";

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const FeatherIcon = ({ name }: { name: string }) => {
  const key = capitalizeFirstLetter(name);
  const Icon = (Icons as Record<string, React.ComponentType>)[key];

  return Icon ? <Icon /> : <Icons.AlertTriangle />;
};

export default FeatherIcon;
