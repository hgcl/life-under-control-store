import * as Icons from "react-feather";
// import type Icon as IconType from "react-feather";

function formatName(string: string) {
  // From `something-like-this` to `somethingLikeThis`
  string = string
    .toLowerCase()
    .replace(/-(.)/g, (match, group) => group.toUpperCase());
  // Capitalize first letter
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const FeatherIcon = ({ name }: { name: string }) => {
  const key = formatName(name);
  const Icon = (Icons as Record<string, React.ComponentType>)[key];

  return Icon ? <Icon /> : <Icons.AlertTriangle />;
};

export default FeatherIcon;
