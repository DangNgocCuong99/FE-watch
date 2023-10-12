import { ReactNode } from "react";
import { Route } from "react-router-dom";

import appRoutes from "./appRouter";

export interface IRoute {
  path: string;
  element: ReactNode;
  child?: IRoute[];
  parent?: string;
  displayText: string;
}

export const flattenArrayAndModifyPath = (arr: IRoute[], parentPath = "") => {
  // sử dụng đệ quy để lặp mảng router
  let flattenedArray: IRoute[] = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const elementPath = !!parentPath
      ? parentPath + "/" + element.path
      : element.path;
    if (Array.isArray(element.child)) {
      flattenedArray = flattenedArray.concat(
        flattenArrayAndModifyPath(element.child, elementPath)
      );
    }
    const modifiedElement = { ...element };
    modifiedElement.path = elementPath;
    !!parentPath ? (modifiedElement.parent = parentPath) : null;
    delete modifiedElement.child;
    flattenedArray.push(modifiedElement);
  }
  return flattenedArray;
};

export const transformRoute = () => {
  return flattenArrayAndModifyPath(appRoutes).map((i) => (
    <Route {...i} key={i.path} />
  ));
};
