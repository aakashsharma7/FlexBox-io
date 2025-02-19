import { DiGhostSmall } from "react-icons/di";
import {
   LuAlignHorizontalJustifyStart,
   LuAlignVerticalJustifyEnd,
} from "react-icons/lu";
import { RxSpaceEvenlyHorizontally } from "react-icons/rx";
import { ContainerConfig } from "../dataTypes";

export const containerConfig: ContainerConfig[] = [
   {
      key: "display",
      title: "Display",
      description:
         "Defines the layout type of the container, such as grid or block.",
      icon: DiGhostSmall,
      type: "select",
      options: ["grid", "block"],
      defaultValue: "grid",
   },
   {
      itemType: "dropdown",
      dropDownType: "iteration",
      placeholder: "Grid Column",
      key: "gridTemplateColumns",
      title: "Grid Template Columns",
      description:
         "Specifies the column structure of the grid, including sizes and units.",
      icon: LuAlignHorizontalJustifyStart,
      type: "input",
      inputType: "unit",
      unitOptions: ["fr", "px", "%"],
      defaultValue: "1fr 1fr",
   },
   {
      itemType: "dropdown",
      dropDownType: "iteration",
      placeholder: "Grid Row",
      key: "gridTemplateRows",
      title: "Grid Template Rows",
      description:
         "Specifies the row structure of the grid, including sizes and units.",
      icon: LuAlignVerticalJustifyEnd,
      type: "input",
      inputType: "unit",
      unitOptions: ["fr", "px", "%"],
      defaultValue: "1fr 1fr",
   },
   {
      itemType: "dropdown",
      dropDownType: "combine",
      combineData: [
         {
            key: "rowGap",
            title: "Row Gap",
            description: "Defines the spacing between rows in the grid.",
            type: "input",
            inputType: "unit",
            unitOptions: ["px", "%"],
         },
         {
            key: "columnGap",
            title: "Column Gap",
            description: "Defines the spacing between columns in the grid.",
            type: "input",
            inputType: "unit",
            unitOptions: ["px", "%"],
         },
      ],
      key: "gap",
      title: "Gap",
      description:
         "Specifies the spacing between rows and columns in the grid.",
      icon: RxSpaceEvenlyHorizontally,
      type: "input",
      inputType: "unit",
      unitOptions: ["px", "%"],
      defaultValue: "10px 10px",
   },
   {
      key: "justifyItems",
      title: "Justify Items",
      description: "Aligns items horizontally within their grid cells.",
      icon: LuAlignHorizontalJustifyStart,
      type: "select",
      options: ["stretch", "start", "center", "end"],
      defaultValue: "stretch",
   },
   {
      key: "alignItems",
      title: "Align Items",
      description: "Aligns items vertically within their grid cells.",
      icon: LuAlignVerticalJustifyEnd,
      type: "select",
      options: ["stretch", "start", "center", "end"],
      defaultValue: "stretch",
   },
   {
      key: "justifyContent",
      title: "Justify Content",
      description: "Distributes items horizontally within the container.",
      icon: LuAlignHorizontalJustifyStart,
      type: "select",
      options: [
         "start",
         "center",
         "end",
         "space-around",
         "space-between",
         "space-evenly",
      ],
      defaultValue: "start",
   },
   {
      key: "alignContent",
      title: "Align Content",
      description: "Distributes items vertically within the container.",
      icon: LuAlignVerticalJustifyEnd,
      type: "select",
      options: [
         "start",
         "center",
         "end",
         "space-around",
         "space-between",
         "space-evenly",
      ],
      defaultValue: "start",
   },
   {
      key: "gridAutoColumns",
      title: "Grid Auto Columns",
      description:
         "Defines the width of columns automatically added to the grid.",
      icon: LuAlignHorizontalJustifyStart,
      type: "input",
      inputType: "unit",
      unitOptions: ["auto", "fr", "px", "%"],
      defaultValue: "auto",
   },
   {
      key: "gridAutoRows",
      title: "Grid Auto Rows",
      description:
         "Defines the height of rows automatically added to the grid.",
      icon: LuAlignVerticalJustifyEnd,
      type: "input",
      inputType: "unit",
      unitOptions: ["auto", "fr", "px", "%"],
      defaultValue: "auto",
   },
   {
      key: "gridAutoFlow",
      title: "Grid Auto Flow",
      description: "Controls how items are automatically placed in the grid.",
      icon: DiGhostSmall,
      type: "select",
      options: ["row", "column", "row dense", "column dense"],
      defaultValue: "row",
   },
];
