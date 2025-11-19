import React from "react";

type SidebarCtx = {
  open: boolean;
  setOpen: (v: boolean | ((p: boolean) => boolean)) => void;
  toggleSidebar: () => void;
};
const SidebarContext = React.createContext<SidebarCtx | null>(null);
export const useSidebar = () => {
  const ctx = React.useContext(SidebarContext);
  if (!ctx) throw new Error("useSidebar must be used within a SidebarProvider.");
  return ctx;
};

type ProviderProps = React.PropsWithChildren<{
  defaultOpen?: boolean;
  style?: React.CSSProperties & {
    ["--sidebar-width"]?: string;
    ["--sidebar-width-mobile"]?: string;
  };
}>;

export const SidebarProvider: React.FC<ProviderProps> = ({ children, defaultOpen = true, style }) => {
  const [open, _setOpen] = React.useState(defaultOpen);
  const setOpen = React.useCallback(
    (value: boolean | ((v: boolean) => boolean)) => {
      const next = typeof value === "function" ? (value as any)(open) : value;
      _setOpen(next);
    },
    [open]
  );
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const isMac = navigator.platform.toLowerCase().includes("mac");
      if ((isMac ? e.metaKey : e.ctrlKey) && e.key.toLowerCase() === "b") {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setOpen]);

  return (
    <SidebarContext.Provider value={{ open, setOpen, toggleSidebar: () => setOpen((v) => !v) }}>
      <div className="sidebar-provider" style={style}>{children}</div>
    </SidebarContext.Provider>
  );
};

type SidebarProps = React.HTMLAttributes<HTMLElement> & {
  side?: "left" | "right";
  collapsible?: "icon" | "offcanvas" | "none";
  variant?: "sidebar" | "floating" | "inset";
};
export const Sidebar: React.FC<SidebarProps> = ({ side = "left", collapsible = "icon", variant = "sidebar", className, children, ...rest }) => {
  const { open } = useSidebar();
  return (
    <aside
      {...rest}
      className={["sidebar", className].filter(Boolean).join(" ")}
      data-side={side}
      data-variant={variant}
      data-collapsible={collapsible}
      data-state={open ? "expanded" : "collapsed"}
    >
      {children}
    </aside>
  );
};

export const SidebarHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...p }) => (
  <div {...p} className={["sidebar-header", className].filter(Boolean).join(" ")} />
);
export const SidebarFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...p }) => (
  <div {...p} className={["sidebar-footer", className].filter(Boolean).join(" ")} />
);
export const SidebarContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...p }) => (
  <div {...p} className={["sidebar-content", className].filter(Boolean).join(" ")} />
);

export const SidebarGroup: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...p }) => (
  <div {...p} className={["sidebar-group", className].filter(Boolean).join(" ")} />
);
export const SidebarGroupLabel: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...p }) => (
  <div {...p} className={["sidebar-group-label", className].filter(Boolean).join(" ")} />
);
export const SidebarGroupContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...p }) => (
  <div {...p} className={["sidebar-group-content", className].filter(Boolean).join(" ")} />
);

export const SidebarMenu: React.FC<React.HTMLAttributes<HTMLUListElement>> = ({ className, ...p }) => (
  <ul {...p} className={["sidebar-menu", className].filter(Boolean).join(" ")} />
);
export const SidebarMenuItem: React.FC<React.LiHTMLAttributes<HTMLLIElement>> = ({ className, ...p }) => (
  <li {...p} className={["sidebar-menu-item", className].filter(Boolean).join(" ")} />
);
export const SidebarMenuButton: React.FC<React.HTMLAttributes<HTMLDivElement> & { asChild?: boolean; isActive?: boolean }> = ({
  className,
  isActive,
  children,
  ...p
}) => (
  <div {...p} data-active={isActive ? "true" : "false"} className={["menu-button", className].filter(Boolean).join(" ")}>
    {children}
  </div>
);

export const SidebarTrigger: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ className, ...p }) => {
  const { toggleSidebar } = useSidebar();
  return (
    <button
      type="button"
      aria-label="Toggle sidebar"
      onClick={toggleSidebar}
      className={["sidebar-trigger", className].filter(Boolean).join(" ")}
      {...p}
    >
      ☰
    </button>
  );
};

export const SidebarInset: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...p }) => (
  <div {...p} className={["sidebar-inset", className].filter(Boolean).join(" ")} />
);
