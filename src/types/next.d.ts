import type {
  NextComponentType,
  NextPageContext,
  NextLayoutComponentType,
} from "next";
import type { AppProps } from "next/app";

declare module "next" {
  type NextLayoutComponentType<P = {}> = NextComponentType<
    NextPageContext,
    any,
    P
  > & {
    layout?: () => JSX.Element;
  };

  type NextLayoutPage<P = {}, IP = P> = NextComponentType<
    NextPageContext,
    IP,
    P
  > & {
    layout: () => JSX.Element;
  };
}

declare module "next/app" {
  type AppLayoutProps = AppProps & {
    Component: NextLayoutComponentType;
  };
}
