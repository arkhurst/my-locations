import { TooltipWithoutIcon } from "../tool-tips";
import {
  EyeIcon,
  PencilIcon,
  PlusSmIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import { ActionButtonComponentProp } from "./types";
import { classNames } from "../../className";

function ActionButton({
  onActionClicked,
  icon,
  tooltipLabel,
  disabled,
}: ActionButtonComponentProp) {
  return (
    <>
      <TooltipWithoutIcon
        message={tooltipLabel}
        disabled={disabled}
        messageClassName={
          "absolute w-16  bg-gray-600 flex justify-center px-1 py-1 rounded-none -bottom-8 -right-5"
        }
      >
        <button
          type="button"
          disabled={disabled}
          onClick={onActionClicked}
          className={classNames(
            disabled
              ? "cursor-not-allowed opacity-60"
              : "hover:bg-gray-100 hover:text-gray-500",
            "flex h-7 w-7 items-center justify-center rounded-full bg-gray-50 text-gray-400  focus:outline-none"
          )}
        >
          {getIcon(icon)}
        </button>
      </TooltipWithoutIcon>
    </>
  );
}

function getIcon(icon: string) {
  switch (icon) {
    case "add":
      return (
        <>
          <PlusSmIcon className="h-4 w-4 " />
        </>
      );
    case "view":
      return (
        <>
          <EyeIcon className="h-4 w-4 " />
        </>
      );
    case "edit":
      return (
        <>
          <PencilIcon className="h-4 w-4 " />
        </>
      );
    case "remove":
      return (
        <>
          <TrashIcon className="h-4 w-4 " />
        </>
      );

    default:
      break;
  }
}

export { ActionButton };
