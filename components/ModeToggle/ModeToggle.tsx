"use client";

import { useState } from "react";

import { Icon, Toggle } from "components";

export default function ModeToggle() {
  const [mode, setMode] = useState(false);
  return (
    <div role="group" tabIndex={0} className="flex">
      <Toggle className="w-1/2 rounded-r-none border-r-0" isChecked={mode}>
        <Icon name="trophy" className="mr-1 h-5" />
        Play
      </Toggle>
      <Toggle className="border-l-1 w-1/2 rounded-l-none" isChecked={mode}>
        <Icon name="creation_mode" className="mr-1 h-5" />
        Create
      </Toggle>
    </div>
  );
}
