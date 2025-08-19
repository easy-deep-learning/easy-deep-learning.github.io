import * as Menubar from "@radix-ui/react-menubar";

import classes from "./GlobalMenu.module.css";

export function GlobalMenu() {
  return (
    <Menubar.Root className={classes.menubarRoot}>
      <Menubar.Menu>
        <Menubar.Trigger className={classes.menubarTrigger}>
          Home
        </Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Content className={classes.menubarContent}>
            <Menubar.Item className={classes.menubarItem}>
              <a href="/">Home</a>
            </Menubar.Item>
            <Menubar.Item className={classes.menubarItem}>
              <a href="/news">News</a>
            </Menubar.Item>
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>

      <Menubar.Menu>
        <Menubar.Trigger className={classes.menubarTrigger}>
          Education
        </Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Content className={classes.menubarContent}>
            <Menubar.Item className={classes.menubarItem}>
              <a href="/free-universities">Free Universities</a>
            </Menubar.Item>
            <Menubar.Item className={classes.menubarItem}>
              <a href="/courses">Courses</a>
            </Menubar.Item>
            <Menubar.Separator className={classes.menubarSeparator} />
            <Menubar.Item className={classes.menubarItem}>
              <a href="/books">Books</a>
            </Menubar.Item>
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>

      <Menubar.Menu>
        <Menubar.Trigger className={classes.menubarTrigger}>
          Technology
        </Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Content className={classes.menubarContent}>
            <Menubar.Item className={classes.menubarItem}>
              <a href="/companies">EduTech Companies</a>
            </Menubar.Item>
            <Menubar.Item className={classes.menubarItem}>
              <a href="/systems">Systems</a>
            </Menubar.Item>
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>
    </Menubar.Root>
  );
}
