import { Button } from "@/components/ui/button"

export default function SaveButton() {
  return (
    <div className="inline-flex items-center gap-2">
      <Button variant="ghost">Cancel</Button>
      <Button>Save</Button>
    </div>
  );
}
