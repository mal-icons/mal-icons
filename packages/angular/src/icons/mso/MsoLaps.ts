import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-laps",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoLaps {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m360-124-43-42 74-74h-33q-116 0-197-82T80-520q0-116 80.5-198T357-800h246q116 0 196.5 82T880-520q0 117-81.5 198.5T600-240v-60q92 0 156-64t64-156q0-91-62.5-155.5T604-740H356q-91 0-153.5 64.5T140-520q0 91 63.5 155.5T358-300l34-1-74-73 42-42 146 146-146 146Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoLaps;
