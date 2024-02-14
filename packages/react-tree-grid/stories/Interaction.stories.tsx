import * as React from 'react';
import {
  TreeGrid,
  TreeGridCell,
  TreeGridInteraction,
  TreeGridRow,
} from '@fluentui-contrib/react-tree-grid';
import {
  Button,
  Field,
  Input,
  Menu,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  Toolbar,
  ToolbarButton,
} from '@fluentui/react-components';

export const Interaction = () => {
  return (
    <TreeGrid aria-label="All meetings">
      <TreeGridRow
        subtree={
          <>
            <TreeGridRow>
              <TreeGridCell header>
                Monthly townhall, 10:00 AM to 11:00 AM
              </TreeGridCell>
              <TreeGridCell>
                <Menu>
                  <MenuTrigger disableButtonEnhancement>
                    <Button>Toggle menu</Button>
                  </MenuTrigger>

                  <MenuPopover>
                    <MenuList>
                      <MenuItem>New </MenuItem>
                      <MenuItem>New Window</MenuItem>
                      <MenuItem disabled>Open File</MenuItem>
                      <MenuItem>Open Folder</MenuItem>
                    </MenuList>
                  </MenuPopover>
                </Menu>
              </TreeGridCell>
              <TreeGridCell>
                <TreeGridInteraction
                  aria-roledescription="Interactive content"
                  aria-description="Interact with Enter, then leave with Escape"
                  aria-label="Type here"
                >
                  <Field label="Type here">
                    <Input />
                  </Field>
                </TreeGridInteraction>
              </TreeGridCell>
              <TreeGridCell>
                <Button>Agenda</Button>
                <Button>Notes</Button>
              </TreeGridCell>
            </TreeGridRow>
            <TreeGridRow>
              <TreeGridCell header>
                Monthly townhall, 10:00 AM to 11:00 AM
              </TreeGridCell>
              <TreeGridCell>
                <Menu>
                  <MenuTrigger disableButtonEnhancement>
                    <Button>Toggle menu</Button>
                  </MenuTrigger>

                  <MenuPopover>
                    <MenuList>
                      <MenuItem>New </MenuItem>
                      <MenuItem>New Window</MenuItem>
                      <MenuItem disabled>Open File</MenuItem>
                      <MenuItem>Open Folder</MenuItem>
                    </MenuList>
                  </MenuPopover>
                </Menu>
              </TreeGridCell>
              <TreeGridCell>
                <TreeGridInteraction
                  aria-roledescription="Interactive content"
                  aria-description="Interact with Enter, then leave with Escape"
                  aria-label="Type here"
                >
                  <Field label="Type here">
                    <Input />
                  </Field>
                </TreeGridInteraction>
              </TreeGridCell>
              <TreeGridCell>
                <TreeGridInteraction
                  aria-roledescription="Interactive content"
                  aria-description="Interact with Enter, then leave with Escape"
                  aria-label="Extra Actions"
                >
                  <Toolbar>
                    <ToolbarButton>Agenda</ToolbarButton>
                    <ToolbarButton>Notes</ToolbarButton>
                  </Toolbar>
                </TreeGridInteraction>
              </TreeGridCell>
            </TreeGridRow>
          </>
        }
      >
        <TreeGridCell header>Today</TreeGridCell>
        <TreeGridCell aria-colspan={3}>
          <Button>Header action</Button>
        </TreeGridCell>
      </TreeGridRow>
      <TreeGridRow
        subtree={
          <>
            <TreeGridRow>
              <TreeGridCell header>
                Weekly summary #2, 2:30 PM to 3:30 PM
              </TreeGridCell>
              <TreeGridCell>
                <Button>Chat with participants</Button>
              </TreeGridCell>
              <TreeGridCell>
                <Button>View recap</Button>
              </TreeGridCell>
              <TreeGridCell>
                <Button>Agenda and notes</Button>
              </TreeGridCell>
              <TreeGridCell>
                <Button>4 tasks</Button>
              </TreeGridCell>
            </TreeGridRow>
            <TreeGridRow>
              <TreeGridCell header>
                Mandatory training #1, 9:00 AM to 10:00 AM
              </TreeGridCell>
              <TreeGridCell>
                <Button>Chat with participants</Button>
              </TreeGridCell>
              <TreeGridCell>
                <Button>View recap</Button>
              </TreeGridCell>
              <TreeGridCell>
                <Button>Agenda and notes</Button>
              </TreeGridCell>
            </TreeGridRow>
            <TreeGridRow>
              <TreeGridCell header>
                Meeting with John, 10:15 AM to 11:15 AM
              </TreeGridCell>
              <TreeGridCell>
                <Button>Chat with participants</Button>
              </TreeGridCell>
              <TreeGridCell>
                <Button>View recap</Button>
              </TreeGridCell>
              <TreeGridCell>
                <Button>Agenda and notes</Button>
              </TreeGridCell>
              <TreeGridCell>
                <Button>2 tasks</Button>
              </TreeGridCell>
              <TreeGridCell>
                <Button>Transcript</Button>
              </TreeGridCell>
            </TreeGridRow>
          </>
        }
      >
        <TreeGridCell header>Last week</TreeGridCell>
        <TreeGridCell aria-colspan={5}>
          <Button>Header action</Button>
        </TreeGridCell>
      </TreeGridRow>
    </TreeGrid>
  );
};
