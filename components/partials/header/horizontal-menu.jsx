import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { menusConfig } from "@/config/menus";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import image from "@/public/images/all-img/man-with-laptop.png";
import Image from "next/image";
export default function MainMenu() {
  const menus = menusConfig.mainNav || [];

  const [offset, setOffset] = React.useState();
  const [list, setList] = React.useState();
  const [value, setValue] = React.useState();

  const onNodeUpdate = (trigger, itemValue) => {
    if (trigger && list && value === itemValue) {
      const triggerOffsetLeft = trigger.offsetLeft + trigger.offsetWidth / 6;

      setOffset(Math.round(triggerOffsetLeft));
    } else if (value === "") {
      setOffset(null);
    }
    return trigger;
  };

  return (
    <div>
      <NavigationMenu.Root
        onValueChange={setValue}
        className=" flex relative  justify-start group"
      >
        <NavigationMenu.List
          ref={setList}
          className="group flex list-none gap-5"
        >
          {menus?.map((item, index) => (
            <NavigationMenu.Item key={`item-${index}`}>
              <NavigationMenu.Link asChild>
                <Link
                  href={item.href}
                  className="flex items-center py-4 cursor-pointer group hover:text-primary transition-colors"
                >
                  <item.icon className="h-5 w-5 mr-2" />
                  <span className="text-sm font-medium text-default-700">
                    {item.title}
                  </span>
                </Link>
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          ))}
        </NavigationMenu.List>

        <div className=" absolute  top-full ">
          <NavigationMenu.Viewport
            style={{
              display: !offset ? "none" : undefined,
              transform: `translateX(${offset}px)`,
              top: "100%",
              transition: "all 0.5s ease",
            }}
          />
        </div>
      </NavigationMenu.Root>
    </div>
  );
}

const ListItem = React.forwardRef(
  ({ className, children, title, childItem, ...props }, forwardedRef) => (
    <NavigationMenu.Link asChild>
      <Link
        className={cn(
          " select-none   text-sm  text-default-700 rounded-md flex  items-center gap-2 mb-4 last:mb-0  leading-none no-underline outline-none transition-colors  hover:text-primary  focus:text-primary",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        <div>{children}</div>
        <div className=" capitalize">{title}</div>
      </Link>
    </NavigationMenu.Link>
  )
);
