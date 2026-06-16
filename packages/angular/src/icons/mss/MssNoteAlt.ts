import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-note-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssNoteAlt {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M286-289h60l255-255-59-61-256 256v60Zm333-273 55-55-61-59-53 53 59 61ZM120-120v-720h265q5-35 32-57.5t63-22.5q36 0 63 22.5t32 57.5h265v720H120Zm60-60h600v-600H180v600Zm300-617q14 0 24.5-10.5T515-832q0-14-10.5-24.5T480-867q-14 0-24.5 10.5T445-832q0 14 10.5 24.5T480-797ZM180-180v-600 600Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssNoteAlt;
