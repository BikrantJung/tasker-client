"use client";
import { ActionButton, Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ActionInput } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";
import { DeadlinePicker } from "./date-picker";
import { AddPeople } from "./add-people";
import { ComboboxDemo } from "@/components/ui/combobox";
import { Autocomplete } from "@/components/ui/autocomplete";

export const CreateProjectModal = () => {
  const [showDescription, setShowDescription] = useState(false);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Create</Button>
      </DialogTrigger>
      <DialogContent className="border border-input shadow-none">
        <DialogHeader>
          <DialogTitle>Create a project</DialogTitle>
          <DialogDescription>
            Create new project to start grouping your tasks together
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="title">Title</Label>
            <ActionInput id="title">
              <ActionButton
                disabled={showDescription}
                onClick={() => setShowDescription(true)}
              >
                <PlusIcon className="icon h-3 w-3 text-muted-foreground" />
                <span>Description</span>
              </ActionButton>
            </ActionInput>
            {/* <Input  /> */}
          </div>
          {showDescription && (
            <div className="flex flex-col gap-2">
              <Label htmlFor="description">Description</Label>
              <ActionInput id="description">
                <ActionButton onClick={() => setShowDescription(false)}>
                  <MinusIcon className="icon h-3 w-3 text-muted-foreground" />
                  <span>Remove</span>
                </ActionButton>
              </ActionInput>
              {/* <Input  /> */}
            </div>
          )}
          <div className="flex  flex-col gap-2">
            <Label htmlFor="add-people">Add people</Label>
            <AddPeople />
          </div>
          <DeadlinePicker />
        </div>
      </DialogContent>
    </Dialog>
  );
};
