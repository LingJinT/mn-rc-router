import React, { forwardRef } from "react";
import { useRouter } from "../hooks";

export interface LinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  to: string;
  state?: any;
  replace?: boolean;
  baseUrl?: string;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ to, state, replace = false, baseUrl, ...rest }, ref) => {
    const { push, replace: _replace } = useRouter();
    let href = to;
    if (baseUrl) {
      href = baseUrl + to;
    }
    const handleClick = (
      e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
      if (!e.defaultPrevented) {
        e.preventDefault();
        replace ? _replace(href) : push(href);
      }
    };
    return <a {...rest} href={href} onClick={handleClick} ref={ref} />;
  }
);
