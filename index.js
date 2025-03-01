// src/main.tsx
import { createRoot } from "react-dom/client";

// ../xlib/.build/lib/tsx/kds/dist/index.js
import { useEffect as useEffect2, useState } from "react";
import { v4 } from "uuid";
import { useEffect } from "react";
import React, { useContext } from "react";
import React2 from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { jsx as jsx2 } from "react/jsx-runtime";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
import { useContext as useContext5 } from "react";
import { useContext as useContext2 } from "react";
import { useContext as useContext3 } from "react";
import { jsx as jsx4 } from "react/jsx-runtime";
import { jsx as jsx5 } from "react/jsx-runtime";
import { useContext as useContext4 } from "react";
import { jsx as jsx6 } from "react/jsx-runtime";
import { jsx as jsx7 } from "react/jsx-runtime";
import { useRef as useRef3, useState as useState3 } from "react";
import { jsx as jsx8 } from "react/jsx-runtime";
import { useEffect as useEffect3, useState as useState2 } from "react";
import { jsx as jsx9 } from "react/jsx-runtime";
import { Fragment, jsx as jsx10 } from "react/jsx-runtime";
import { useRef } from "react";
import { jsx as jsx11, jsxs as jsxs3 } from "react/jsx-runtime";
import { jsx as jsx12 } from "react/jsx-runtime";
import { useRef as useRef2 } from "react";
import { jsx as jsx13 } from "react/jsx-runtime";
import { jsx as jsx14, jsxs as jsxs4 } from "react/jsx-runtime";
import { jsx as jsx15 } from "react/jsx-runtime";
import { useState as useState4 } from "react";
import { jsx as jsx16 } from "react/jsx-runtime";
import { jsx as jsx17 } from "react/jsx-runtime";
import { useState as useState5, useEffect as useEffect4, useRef as useRef4 } from "react";
import { useState as useState6, useEffect as useEffect5, useRef as useRef5 } from "react";
import { jsx as jsx18, jsxs as jsxs5 } from "react/jsx-runtime";
import { jsx as jsx19, jsxs as jsxs6 } from "react/jsx-runtime";
import { useState as useState7 } from "react";
import { jsx as jsx20, jsxs as jsxs7 } from "react/jsx-runtime";
import { jsx as jsx21, jsxs as jsxs8 } from "react/jsx-runtime";
import { useState as useState8 } from "react";
import { jsx as jsx22, jsxs as jsxs9 } from "react/jsx-runtime";
import { jsx as jsx23 } from "react/jsx-runtime";
import React12, { useEffect as useEffect6, useState as useState9 } from "react";
import { jsx as jsx24, jsxs as jsxs10 } from "react/jsx-runtime";
import { jsx as jsx25 } from "react/jsx-runtime";
import { jsx as jsx26 } from "react/jsx-runtime";
import { jsx as jsx27 } from "react/jsx-runtime";
import { jsx as jsx28 } from "react/jsx-runtime";
import { Fragment as Fragment2, jsx as jsx29 } from "react/jsx-runtime";
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
function KDSGoogleFontLink({}) {
  useEffect(() => {
    const iconLinks = [
      "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined",
      "https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded",
      "https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp",
      "https://fonts.googleapis.com/css2?family=Roboto"
    ];
    const links = iconLinks.map((href) => {
      const link = document.createElement("link");
      link.href = href;
      link.rel = "stylesheet";
      document.head.appendChild(link);
      return link;
    });
    return () => {
      links.forEach((link) => document.head.removeChild(link));
    };
  }, []);
  return null;
}
function useKDSRouter() {
  const { base, path, setPath } = useContext(RouterContext);
  const goToRoute = (path2, replace = false) => {
    const uri = path2.startsWith("/") ? path2 : (base + path2).replace("//", "/");
    if (replace && window?.history?.replaceState) {
      window.history.replaceState(window.history.state, document.title, uri);
    } else if (!replace && window?.history?.pushState && window.location.pathname + window.location.search !== uri) {
      window.history.pushState(window.history.state, document.title, uri);
    } else {
      window.location.assign(uri);
    }
    setPath(uri);
  };
  const setHash = (hash) => {
    window.location.hash = `#${hash}`;
  };
  return {
    path: path.length > 0 ? path : window.location.pathname.replace(base, "/"),
    goToRoute,
    setHash,
    base,
    host: window.location.host
  };
}
var RouterContext = React.createContext({
  base: "/",
  path: "",
  setPath: () => {
  }
});
var KDSLightTheme = {
  name: "KDSLightTheme",
  primary: "#00000000",
  secondary: "#00000000",
  active: "#00000000",
  background: "#00000000",
  foreground: "#00000000",
  shadow: "#00000000",
  border: "black",
  font: {
    primary: "black",
    secondary: "black",
    active: "blue",
    disabled: "grey",
    header: "black"
  },
  button: {
    default: "rgb(194,192,175, 1)",
    primary: "blue",
    negative: "red",
    pressed: {
      default: "rgb(214, 212, 212, 1)",
      primary: "rgb(136, 148, 227, 1)",
      negative: "rgb(255, 148, 148, 1)"
    },
    disabled: {
      default: "rgb(214, 212, 212, 1)",
      primary: "rgb(136, 148, 227, 1)",
      negative: "rgb(255, 148, 148, 1)"
    }
  },
  icon: {
    primary: "rgba(0, 0, 0, 1)",
    active: "rgba(0, 0, 125, 1)",
    disabled: "rgba(125, 125, 125, 1)",
    negative: "rgba(255, 0, 0, 1)"
  }
};
var KDSLightTheme_default = KDSLightTheme;
var AppContext = React2.createContext({
  theme: KDSLightTheme_default,
  title: "",
  setTheme: () => {
  },
  layout: 0,
  leftToRight: true,
  icon: {
    name: "",
    color: "primary"
  },
  actions: [],
  nav: [],
  sidebarIsCollapsed: false,
  sidebarToggle: () => {
  },
  session: ""
});
function InternalKDSLoaderStatus({
  text
}) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px"
      },
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            style: {
              width: "24px",
              height: "24px",
              border: "4px solid #d1d5db",
              borderTop: "4px solid #6b7280",
              borderRadius: "50%",
              animation: "spin 1s linear infinite"
            }
          }
        ),
        /* @__PURE__ */ jsx(
          "span",
          {
            style: {
              color: "#374151",
              fontSize: "14px",
              marginTop: "8px"
            },
            children: text
          }
        ),
        /* @__PURE__ */ jsx("style", { children: "@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }" })
      ]
    }
  );
}
function KDSLoaderStatus({
  text
}) {
  return /* @__PURE__ */ jsx2(InternalKDSLoaderStatus, { text });
}
var RouteTrie = class {
  constructor(routes) {
    __publicField(this, "root");
    __publicField(this, "routes");
    __publicField(this, "constructed");
    __publicField(this, "__construct", () => {
      if (this.constructed || !this.routes) {
        return;
      }
      for (const [path, component] of Object.entries(this.routes)) {
        let node = this.root;
        const parts = this.__tokenizePath(path);
        for (const part of parts) {
          if (!node[part]) node[part] = {};
          node = node[part];
        }
        node.render = component;
      }
    });
    __publicField(this, "__tokenizePath", (path) => {
      return path.split("/").filter(Boolean);
    });
    __publicField(this, "resolve", (path) => {
      this.__construct();
      const parts = this.__tokenizePath(path);
      let wildcard = null;
      let node = this.root;
      for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        if (!(part in node)) {
          return (node["*"] ?? wildcard ?? null)?.render();
        }
        if ("*" in node) {
          wildcard = node["*"];
        }
        node = node[part];
      }
      return "render" in node ? node.render() : wildcard?.render();
    });
    this.root = {};
    this.routes = routes ?? {};
    this.constructed = false;
  }
};
function KDSApp({
  actions,
  icon,
  layout,
  leftToRight,
  nav,
  route,
  sidebarIsCollapsed,
  title,
  theme
}) {
  const [isLoading, setIsLoading] = useState(
    !document.fonts.check("1em Material Icons")
  );
  const themeState = useState(theme ?? KDSLightTheme_default);
  const sidebarToggleState = useState(sidebarIsCollapsed ?? false);
  const [path, setPath] = useState("");
  _useAppSetup(themeState[0], title);
  useEffect2(() => {
    document.fonts.ready.then(() => setIsLoading(false));
    const handlePopState = () => {
      setPath(window.location.pathname);
    };
    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);
  return /* @__PURE__ */ jsxs2(
    "div",
    {
      style: {
        width: "100%",
        height: "100%"
      },
      children: [
        /* @__PURE__ */ jsx3(KDSGoogleFontLink, {}),
        /* @__PURE__ */ jsx3(
          AppContext.Provider,
          {
            value: _setupAppConfig(
              themeState,
              sidebarToggleState,
              title,
              icon,
              nav,
              layout,
              leftToRight,
              actions
            ),
            children: /* @__PURE__ */ jsx3(
              RouterContext.Provider,
              {
                value: {
                  base: "/",
                  path,
                  setPath
                },
                children: isLoading ? /* @__PURE__ */ jsx3(
                  "div",
                  {
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "fixed",
                      top: "0",
                      left: "0",
                      width: "100vw",
                      height: "100vh"
                    },
                    children: /* @__PURE__ */ jsx3(KDSLoaderStatus, {})
                  }
                ) : /* @__PURE__ */ jsx3(RenderedPage, { routes: new RouteTrie(route) })
              }
            )
          }
        )
      ]
    }
  );
}
var RenderedPage = (props) => {
  const { routes } = props;
  const { path } = useKDSRouter();
  return routes?.resolve(path);
};
var _useAppSetup = (theme, title) => {
  useEffect2(() => {
    document.title = title;
  }, [title]);
  useEffect2(() => {
    document.body.style = `background: ${theme.background}; color: ${theme.font.primary}; margin: 0px;`;
  }, [theme]);
};
var _setupAppConfig = (themeState, sidebarToggleState, title, icon, nav = [], layout = 0, leftToRight = true, actions = []) => {
  const [theme, setTheme] = themeState;
  const [sidebarIsCollapsed, sidebarToggle] = sidebarToggleState;
  return {
    actions,
    title,
    theme,
    setTheme,
    layout,
    leftToRight,
    icon,
    nav,
    sidebarIsCollapsed,
    sidebarToggle,
    session: v4().toUpperCase()
  };
};
var FULL_SCREEN_LAYOUT = {
  rows: "1fr",
  columns: "1fr",
  areas: `
    'main'
    `
};
var PageConfigurations = {
  [
    0
    /* APPBAR */
  ]: {
    [
      0
      /* LEFT_TO_RIGHT */
    ]: {
      rows: "48px 1fr",
      columns: "1fr",
      areas: `
            'appbar appbar'
            'main main'
            `
    },
    [
      1
      /* RIGHT_TO_LEFT */
    ]: {
      rows: "48px 1fr",
      columns: "1fr",
      areas: `
            'appbar appbar'
            'main main'
            `
    }
  },
  [
    1
    /* APPBAR_WITH_SIDEBAR */
  ]: {
    [
      0
      /* LEFT_TO_RIGHT */
    ]: {
      rows: "48px 1fr",
      columns: "256px 1fr",
      areas: `
            'appbar appbar'
            'sidebar main'
            `
    },
    [
      1
      /* RIGHT_TO_LEFT */
    ]: {
      rows: "48px 1fr",
      columns: "1fr 256px",
      areas: `
            'appbar appbar'
            'main sidebar'
            `
    }
  },
  [
    2
    /* SIDEBAR */
  ]: {
    [
      0
      /* LEFT_TO_RIGHT */
    ]: {
      rows: "1fr",
      columns: "256px 1fr",
      areas: `
            'sidebar main'
            `
    },
    [
      1
      /* RIGHT_TO_LEFT */
    ]: {
      rows: "1fr",
      columns: "1fr 256px",
      areas: `
            'main sidebar'
            `
    }
  },
  [
    3
    /* FULL_SCREEN */
  ]: {
    [
      0
      /* LEFT_TO_RIGHT */
    ]: {
      ...FULL_SCREEN_LAYOUT
    },
    [
      1
      /* RIGHT_TO_LEFT */
    ]: {
      ...FULL_SCREEN_LAYOUT
    }
  }
};
function usePageConfiguration(layout) {
  const { leftToRight } = useContext2(AppContext);
  const configs = PageConfigurations[layout];
  return configs[
    leftToRight ? 0 : 1
    /* RIGHT_TO_LEFT */
  ];
}
function useKDSTheme() {
  const { theme, setTheme } = useContext3(AppContext);
  return [theme, setTheme];
}
function KDSGridLayout({
  children,
  gridTemplateRows,
  gridTemplateColumns,
  gridTemplateAreas,
  columnGap,
  rowGap,
  justifyItems,
  alignItems,
  justifyContent,
  alignContent,
  gridAutoColumns,
  gridAutoRows,
  gridAutoFlow,
  height,
  width,
  backgroundColor,
  style
}) {
  return /* @__PURE__ */ jsx4("div", { style: {
    display: "grid",
    gridTemplateRows,
    gridTemplateColumns,
    gridTemplateAreas,
    columnGap,
    rowGap,
    justifyItems,
    alignItems,
    justifyContent,
    alignContent,
    gridAutoColumns,
    gridAutoRows,
    gridAutoFlow,
    height,
    width,
    backgroundColor,
    overflow: "hidden",
    ...style
  }, children });
}
function KDSGridItem({
  children,
  gridRowStart,
  gridRowEnd,
  gridColumnStart,
  gridColumnEnd,
  gridArea,
  justifySelf,
  alignSelf,
  style
}) {
  return /* @__PURE__ */ jsx5("div", { style: {
    gridRowStart,
    gridRowEnd,
    gridColumnStart,
    gridColumnEnd,
    gridArea,
    justifySelf,
    alignSelf,
    overflow: "hidden",
    ...style
  }, children });
}
function KDSFlexLayout({
  alignItems,
  alignContent,
  backgroundColor,
  children,
  direction,
  height,
  justifyContent,
  margin,
  overflow,
  padding,
  ref,
  style,
  width
}) {
  return /* @__PURE__ */ jsx6(
    "div",
    {
      ref,
      style: {
        alignItems,
        alignContent,
        backgroundColor,
        display: "flex",
        flex: 1,
        flexDirection: direction,
        height,
        justifyContent,
        margin,
        overflow: overflow ?? "hidden",
        padding,
        width,
        ...style
      },
      children
    }
  );
}
function KDSFlexItem({
  children,
  order,
  grow,
  shrink,
  basis,
  alignSelf,
  direction,
  justifyContent,
  alignItems,
  alignContent,
  height,
  width,
  backgroundColor,
  margin,
  style
}) {
  return /* @__PURE__ */ jsx7("div", { style: {
    order,
    display: "flex",
    flex: `${grow ?? 1} ${shrink ?? 1} ${basis ?? 0}`,
    alignSelf: alignSelf ?? "stretch",
    flexDirection: direction,
    justifyContent,
    alignItems,
    alignContent,
    backgroundColor,
    margin,
    height,
    width,
    ...style
  }, children });
}
function InternalKDSText(props) {
  const {
    size,
    weight,
    selectable,
    children,
    style,
    tooltip
  } = props;
  const [theme] = useKDSTheme();
  return /* @__PURE__ */ jsx8(
    "p",
    {
      title: tooltip,
      style: {
        fontFamily: "BlinkMacSystemFont, Roboto",
        // TODO allow this to be configured
        fontSize: size ?? "medium",
        fontWeight: weight ?? "normal",
        color: theme.font.primary,
        userSelect: selectable ? "text" : "none",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        margin: 0,
        ...props,
        ...style
      },
      children
    }
  );
}
function useKDSHover(ref, onChange) {
  const [isHovered, setIsHovered] = useState2(false);
  useEffect3(() => {
    const element = ref?.current;
    if (!element) return;
    const handleMouseEnter = () => {
      setIsHovered(true);
      onChange && onChange(true);
    };
    const handleMouseLeave = () => {
      setIsHovered(false);
      onChange && onChange(false);
    };
    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [ref, onChange]);
  return isHovered;
}
function InternalKDSLink({
  to,
  href,
  target,
  onClick,
  children,
  height,
  width,
  ref,
  style
}) {
  const { goToRoute } = useKDSRouter();
  const onClickOrGoTo = () => {
    if (onClick) {
      onClick();
    }
    if (to) {
      goToRoute(to);
    }
  };
  return /* @__PURE__ */ jsx9(
    "a",
    {
      ref,
      href,
      target,
      onClick: onClickOrGoTo,
      style: {
        color: "inherit",
        display: "inline-block",
        textDecoration: "inherit",
        cursor: "pointer",
        height: height ?? "auto",
        lineHeight: "1",
        verticalAlign: "top",
        width,
        ...style
      },
      children
    }
  );
}
function KDSIcon({ icon, color, size, type, svg, ico }) {
  const [theme] = useKDSTheme();
  const pixelSize = size === "small" ? "18px" : size === "large" ? "36px" : size === "x-large" ? "48px" : "24px";
  const iconColor = theme.icon[color];
  if (svg != null) {
    return /* @__PURE__ */ jsx10("svg", { style: {
      height: pixelSize,
      width: pixelSize,
      fill: iconColor,
      userSelect: "none"
    }, children: /* @__PURE__ */ jsx10("use", { xlinkHref: svg }) });
  }
  if (ico != null) {
    return /* @__PURE__ */ jsx10("img", { src: ico, alt: "Icon", height: pixelSize });
  }
  const materialType = (type ?? "filled") === "filled" ? "-outlined" : `-${type}`;
  return /* @__PURE__ */ jsx10(Fragment, { children: /* @__PURE__ */ jsx10(
    "i",
    {
      "aria-label": `Material Icon: ${icon}`,
      style: {
        fontSize: pixelSize,
        color: iconColor,
        userSelect: "none",
        width: pixelSize
      },
      className: `material-symbols${materialType}`,
      children: icon
    }
  ) });
}
function InternalKDSHoverContent({
  children,
  style
}) {
  const ref = useRef(null);
  const isHovered = useKDSHover(ref);
  return /* @__PURE__ */ jsxs3(
    "div",
    {
      ref,
      style: {
        position: "relative"
      },
      children: [
        /* @__PURE__ */ jsx11("div", { children: children[0] }),
        /* @__PURE__ */ jsx11(
          "div",
          {
            style: {
              backgroundColor: "white",
              borderEndStartRadius: "24px",
              borderEndEndRadius: "24px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              position: "fixed",
              zIndex: 999,
              // TODO Make KDSLayer.background / KDSLayer.tooltip / etc
              ...style
            },
            children: isHovered ? children[1] : null
          }
        )
      ]
    }
  );
}
function KDSText(props) {
  return /* @__PURE__ */ jsx12(InternalKDSText, { ...props });
}
function KDSHoverable({
  children,
  onHover,
  style
}) {
  const ref = useRef2(null);
  useKDSHover(ref, onHover);
  return /* @__PURE__ */ jsx13(
    "div",
    {
      ref,
      style: {
        ...style
      },
      children
    }
  );
}
function InternalKDSAppbarNav({
  label,
  path,
  nav
}) {
  const [theme] = useKDSTheme();
  const labelToPath = () => {
    return label.toLowerCase().replace(/\s+/g, "-");
  };
  const url = path ?? labelToPath();
  const router = useKDSRouter();
  const isSelected = router.path.startsWith(
    url.startsWith("/") ? url : "/" + url
  );
  const container = useRef3(null);
  const isHovered = useKDSHover(container);
  const navIcon = nav == null ? null : /* @__PURE__ */ jsx14(KDSIcon, { icon: "keyboard_arrow_down", color: "primary", size: "small" });
  const subNav = nav == null ? null : /* @__PURE__ */ jsx14(
    KDSFlexLayout,
    {
      direction: "column",
      style: {
        padding: "8px 0"
        /* vert_8 */
      },
      children: nav?.map((n, index) => /* @__PURE__ */ jsx14(MenuItem, { ...n }, index))
    }
  );
  return /* @__PURE__ */ jsxs4(InternalKDSHoverContent, { children: [
    /* @__PURE__ */ jsx14(InternalKDSLink, { ref: container, to: url, style: {}, children: /* @__PURE__ */ jsxs4("div", { style: {
      padding: "4px 12px",
      borderRadius: "8px",
      margin: "8px 0 0 0",
      boxShadow: isHovered && !isSelected ? "inset 0 4px 10px rgba(0, 0, 0, 0.2)" : ""
    }, children: [
      /* @__PURE__ */ jsx14(
        InternalKDSText,
        {
          size: "large",
          color: isSelected ? theme.font.active : theme.font.header,
          style: {
            display: "inline-block",
            padding: "4px 0",
            borderBottom: isSelected ? `2px solid ${theme.font.active}` : ""
          },
          children: label
        }
      ),
      navIcon
    ] }) }),
    subNav
  ] });
}
var MenuItem = (props) => {
  const { label, tooltip } = props;
  const [isHovered, setIsHovered] = useState3(false);
  return /* @__PURE__ */ jsx14(KDSHoverable, { onHover: (hoverState) => setIsHovered(hoverState), children: /* @__PURE__ */ jsx14(
    InternalKDSLink,
    {
      to: props.path ?? void 0,
      onClick: props.onClick ?? void 0,
      href: props.href ?? void 0,
      target: "_blank",
      style: {
        margin: "0 0 4px 0",
        width: "100%"
      },
      children: /* @__PURE__ */ jsx14(
        KDSFlexItem,
        {
          style: {
            borderRadius: "8px",
            boxShadow: isHovered ? "inset 0 4px 10px rgba(0, 0, 0, 0.2)" : void 0,
            padding: "8px 24px",
            margin: "0 4px 0 4px"
            /* horiz_4 */
          },
          children: /* @__PURE__ */ jsx14(KDSText, { width: "100%", tooltip, children: label })
        }
      )
    }
  ) });
};
function InternalKDSAppbarMenuIcon(props) {
  const {
    config,
    size,
    style
  } = props;
  return /* @__PURE__ */ jsx15(InternalKDSLink, { ...props, style: {
    ...style,
    padding: "0 24px"
    /* horiz_24 */
  }, children: /* @__PURE__ */ jsx15(
    "div",
    {
      style: {
        ...style,
        borderRadius: "12px",
        overflow: "hidden"
      },
      children: /* @__PURE__ */ jsx15(KDSIcon, { size, icon: config.name, ...config })
    }
  ) });
}
function InternalKDSButton({
  disabled,
  label,
  labelIsHidden,
  type,
  use,
  onClick,
  children,
  href,
  target,
  isCircular,
  to,
  textStyle,
  style
}) {
  const [theme] = useKDSTheme();
  const { goToRoute } = useKDSRouter();
  const [isPressed, setIsPressed] = useState4(false);
  const pickButtonColor = () => {
    const colorPicker = disabled ? theme.button.disabled : isPressed ? theme.button.pressed : use === "flat" ? null : theme.button;
    return colorPicker == null ? "transparent" : colorPicker[type === "submit" ? "primary" : type === "reset" ? "negative" : "default"];
  };
  const onClickOrGoTo = () => {
    if (onClick) {
      onClick();
    }
    if (to) {
      goToRoute(to);
    }
  };
  const button = /* @__PURE__ */ jsx16(
    "button",
    {
      "aria-label": label,
      disabled,
      type: href != null ? "submit" : type ?? "button",
      onClick: disabled ? void 0 : onClickOrGoTo,
      onMouseDown: () => setIsPressed(true),
      onMouseUp: () => setIsPressed(false),
      onMouseLeave: () => setIsPressed(false),
      style: {
        borderRadius: isCircular ? "50%" : "20px",
        cursor: disabled ? "not-allowed" : "pointer",
        color: theme.font.primary,
        backgroundColor: pickButtonColor(),
        padding: isCircular ? void 0 : "4px 8px 4px 8px",
        border: "none",
        userSelect: "none",
        boxSizing: "content-box",
        fontWeight: "bold",
        minHeight: "20px",
        ...style
      },
      formAction: href,
      formTarget: target ?? href == null ? void 0 : "_blank",
      children: children == null ? labelIsHidden ? null : /* @__PURE__ */ jsx16(KDSText, { style: { ...textStyle }, children: label }) : children
    }
  );
  return href == null ? button : /* @__PURE__ */ jsx16("form", { children: button });
}
function InternalKDSAppbarAction(props) {
  return /* @__PURE__ */ jsx17(
    "div",
    {
      style: {
        margin: "24px 0 24px 0"
        /* vert_24 */
      },
      children: /* @__PURE__ */ jsx17(
        InternalKDSButton,
        {
          ...props,
          textStyle: {
            ...props.textStyle,
            color: "white",
            fontSize: "1em",
            fontWeight: "bold",
            display: "inline-block",
            padding: "8px 8px"
            /* vert_8_horiz_8 */
          }
        }
      )
    }
  );
}
function useIsVisible() {
  const [isVisible, setIsVisible] = useState5(false);
  const ref = useRef4(null);
  useEffect4(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    });
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return [ref, isVisible];
}
function useKDSResize() {
  const [width, setWidth] = useState6(0);
  const ref = useRef5(null);
  useEffect5(() => {
    const observer = new ResizeObserver(([entry]) => {
      setWidth(entry.contentRect.width);
    });
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);
  return [ref, width];
}
function InternalKDSAppbar({}) {
  const { actions, icon, leftToRight, nav, theme } = useContext4(AppContext);
  const [visibleRef, isVisible] = useIsVisible();
  const [resizeRef, containerWidth] = useKDSResize();
  const fullView = isVisible && containerWidth > 860;
  return /* @__PURE__ */ jsxs5(
    KDSFlexLayout,
    {
      ref: resizeRef,
      backgroundColor: theme.override?.appbar ?? theme.app?.primary,
      direction: leftToRight ? "row" : "row-reverse",
      height: "100%",
      width: "100%",
      justifyContent: "space-evenly",
      children: [
        /* @__PURE__ */ jsx18(
          KDSFlexItem,
          {
            alignItems: "center",
            grow: 0,
            shrink: 0,
            children: fullView ? /* @__PURE__ */ jsx18(
              InternalKDSAppbarMenuIcon,
              {
                to: "/",
                size: "x-large",
                config: icon
              }
            ) : /* @__PURE__ */ jsx18(
              InternalKDSAppbarMenuIcon,
              {
                onClick: () => {
                },
                size: "default",
                config: {
                  ...icon,
                  svg: void 0,
                  ico: void 0,
                  name: "menu"
                }
              }
            )
          }
        ),
        /* @__PURE__ */ jsx18(
          KDSFlexItem,
          {
            justifyContent: "left",
            grow: 1,
            style: {
              // transition: "opacity 0.5s ease-in-out, visibility 0.5s ease-in-out", TODO figure out transitions and handle it gracefully with menu and icon
              visibility: fullView ? void 0 : "hidden"
            },
            children: nav.map((n) => {
              if (typeof n == "string") {
                return /* @__PURE__ */ jsx18(
                  InternalKDSAppbarNav,
                  {
                    label: n
                  },
                  n
                );
              }
              return /* @__PURE__ */ jsx18(
                InternalKDSAppbarNav,
                {
                  ...n
                },
                n.label
              );
            })
          }
        ),
        /* @__PURE__ */ jsx18(
          KDSFlexItem,
          {
            grow: 0,
            shrink: 0,
            alignItems: "center",
            justifyContent: "right",
            margin: "0 8px 0 8px",
            style: {
              // transition: "opacity 0.5s ease-in-out, visibility 0.5s ease-in-out",
              visibility: fullView ? void 0 : "hidden"
            },
            children: actions.map((a) => /* @__PURE__ */ jsx18(
              InternalKDSAppbarAction,
              {
                ...a
              },
              a.label
            ))
          }
        ),
        /* @__PURE__ */ jsx18("div", { ref: visibleRef })
      ]
    }
  );
}
function InternalKDSPageWithAppbar({
  appbar,
  children
}) {
  const [theme] = useKDSTheme();
  const page_config = usePageConfiguration(
    0
    /* APPBAR */
  );
  return /* @__PURE__ */ jsxs6(
    KDSGridLayout,
    {
      gridTemplateRows: page_config.rows,
      gridTemplateColumns: page_config.columns,
      gridTemplateAreas: page_config.areas,
      style: {
        width: "100%",
        height: "100%"
      },
      children: [
        /* @__PURE__ */ jsx19(KDSGridItem, { gridArea: "appbar", style: {
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          position: "relative"
        }, children: appbar ?? /* @__PURE__ */ jsx19(InternalKDSAppbar, {}) }),
        /* @__PURE__ */ jsx19(KDSGridItem, { gridArea: "main", style: {
          // @ts-expect-error override exists for debug theme
          backgroundColor: theme.override?.main,
          height: "100%",
          width: "100%",
          overflow: "auto"
        }, children })
      ]
    }
  );
}
function InternalKDSFooter({}) {
  const privacyPolicy = /* @__PURE__ */ jsx20(InternalKDSLink, { to: "/privacy-policy", children: "Privacy Policy" });
  const accessibilityStatement = /* @__PURE__ */ jsx20(InternalKDSLink, { to: "accessibility-statement", children: "Accessibility Statement" });
  const FacebookIcon = () => /* @__PURE__ */ jsx20(
    InternalKDSLink,
    {
      style: {
        padding: "0 4px"
        /* horiz_4 */
      },
      href: "https://www.facebook.com/countrycreaturesveterinarycare",
      target: "_blank",
      children: /* @__PURE__ */ jsxs7("svg", { fill: "none", width: "24", height: "24", viewBox: "0 0 500 500", children: [
        /* @__PURE__ */ jsx20("title", { id: "fb-app-logo", children: "Facebook app logo" }),
        /* @__PURE__ */ jsxs7("g", { children: [
          /* @__PURE__ */ jsx20("path", { fill: "none", d: "m500,250C500,111.93,388.07,0,250,0S0,111.93,0,250c0,117.24,80.72,215.62,189.61,242.64v-166.24h-51.55v-76.4h51.55v-32.92c0-85.09,38.51-124.53,122.05-124.53,15.84,0,43.17,3.11,54.35,6.21v69.25c-5.9-.62-16.15-.93-28.88-.93-40.99,0-56.83,15.53-56.83,55.9v27.02h81.66l-14.03,76.4h-67.63v171.77c123.77-14.95,219.7-120.35,219.7-248.17Z" }),
          /* @__PURE__ */ jsx20("path", { fill: "white", d: "m347.92,326.4l14.03-76.4h-81.66v-27.02c0-40.37,15.84-55.9,56.83-55.9,12.73,0,22.98.31,28.88.93v-69.25c-11.18-3.11-38.51-6.21-54.35-6.21-83.54,0-122.05,39.44-122.05,124.53v32.92h-51.55v76.4h51.55v166.24c19.34,4.8,39.57,7.36,60.39,7.36,10.25,0,20.36-.63,30.29-1.83v-171.77h67.64Z" })
        ] })
      ] })
    }
  );
  const InstagramIcon = () => /* @__PURE__ */ jsx20(
    InternalKDSLink,
    {
      href: "http://instagram.com/country_creatures.vet",
      target: "_blank",
      style: {
        margin: "4px 0 0 0",
        padding: "0 4px"
        /* horiz_4 */
      },
      children: /* @__PURE__ */ jsxs7("svg", { width: "24", height: "24", viewBox: "0 0 240 240", children: [
        /* @__PURE__ */ jsx20("defs", {}),
        /* @__PURE__ */ jsx20("g", { transform: "scale(.20)", children: /* @__PURE__ */ jsx20("path", { fill: "white", d: "M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34" }) })
      ] })
    }
  );
  const [showFooter, setShowFooter] = useState7(false);
  return /* @__PURE__ */ jsxs7(
    KDSHoverable,
    {
      onHover: (isHovered) => setShowFooter(isHovered),
      children: [
        /* @__PURE__ */ jsx20(
          "div",
          {
            style: {
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              position: "absolute",
              bottom: 0,
              height: "36px",
              width: "100%",
              backgroundColor: "rgb(99, 35, 37)",
              visibility: showFooter ? void 0 : "hidden"
            },
            children: /* @__PURE__ */ jsxs7(
              KDSText,
              {
                color: "white",
                size: "small",
                alignSelf: "center",
                children: [
                  "\xA9 2025 Country Creatures Veterinary Care | Ser Software | ",
                  privacyPolicy,
                  " | ",
                  accessibilityStatement
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ jsxs7(
          "div",
          {
            style: {
              height: "36px",
              backgroundColor: "rgb(99, 35, 37)",
              position: "absolute",
              right: 0,
              bottom: 0,
              alignContent: "center",
              paddingRight: "4px",
              paddingLeft: "16px",
              borderTopLeftRadius: "24px"
            },
            children: [
              /* @__PURE__ */ jsx20(FacebookIcon, {}),
              /* @__PURE__ */ jsx20(InstagramIcon, {})
            ]
          }
        )
      ]
    }
  );
}
function KDSPage(props) {
  const { layout } = useContext5(AppContext);
  const [theme] = useKDSTheme();
  let content = null;
  switch (layout) {
    case 0:
      content = /* @__PURE__ */ jsx21(InternalKDSPageWithAppbar, { ...props });
      break;
    default:
      throw new Error(`Layout ${layout} not implemented for KDSPage.`);
  }
  return /* @__PURE__ */ jsxs8(
    "div",
    {
      style: {
        // @ts-expect-error override exists for debug theme
        backgroundColor: theme.override?.page ?? theme.background,
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        height: "100%",
        width: "100%",
        overflow: "hidden"
      },
      children: [
        content,
        props.footer ?? /* @__PURE__ */ jsx21(InternalKDSFooter, {})
      ]
    }
  );
}

// src/App.react.tsx
import AboutPage from "about/AboutPage.react";
import HomePage from "HomePage.react";
import { app_nav } from "app_nav";
import { app_actions } from "app_actions";
import { jsx as jsx30 } from "react/jsx-runtime";
function App() {
  return /* @__PURE__ */ jsx30(
    KDSApp,
    {
      title: "Mobile Veterinary Hospital In Pendleton, SC | Country Creatures Veterinary Care",
      icon: {
        name: "Pets",
        color: "primary",
        ico: "/assets/menu.ico"
      },
      actions: app_actions,
      nav: app_nav,
      theme: {
        ...KDSLightTheme_default,
        font: {
          active: "rgba(234, 162, 47, 1)",
          primary: "black",
          secondary: "white",
          disabled: "grey",
          header: "white"
        },
        icon: {
          primary: "white",
          active: "white",
          disabled: "white",
          negative: "white"
        },
        app: {
          primary: "rgba(99, 35, 37, 1)",
          secondary: "rgba(234, 162, 47, 1)"
        }
      },
      route: {
        "/": HomePage,
        "/about": AboutPage,
        "/*": () => /* @__PURE__ */ jsx30(KDSPage, { children: "Not yet implemented!" }),
        "/it/is/a/me": () => /* @__PURE__ */ jsx30(KDSPage, { children: "A Mario!" })
      }
    }
  );
}

// src/main.tsx
import { jsx as jsx31 } from "react/jsx-runtime";
createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsx31(App, {})
);
//# sourceMappingURL=index.js.map