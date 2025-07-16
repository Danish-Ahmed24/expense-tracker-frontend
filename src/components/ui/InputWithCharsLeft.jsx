import { useId } from "react"

import { useCharacterLimit } from "@/hooks/use-character-limit"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function InputWithCharsLeft(props) {
  const id = useId()
  const maxLength = props.left;
  const {
    value,
    characterCount,
    handleChange,
    maxLength: limit,
  } = useCharacterLimit({ maxLength })

  return (
    <div className="*:not-first:mt-2">
      <Input
        id={id}
        className="w-md"
        type="text"
        value={value}
        maxLength={maxLength}
        onChange={handleChange}
        aria-describedby={`${id}-description`} />
      <p
        id={`${id}-description`}
        className="text-muted-foreground mt-2 text-xs"
        role="status"
        aria-live="polite">
        <span className="tabular-nums">{limit - characterCount}</span>{" "}
        characters left
      </p>
    </div>
  );
}
