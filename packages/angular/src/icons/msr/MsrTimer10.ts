import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-timer-10",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrTimer10 {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M535-280h185v-400H535v400Zm0 80q-33.33 0-56.67-23.33Q455-246.67 455-280v-400q0-33.33 23.33-56.67Q501.67-760 535-760h185q33.33 0 56.67 23.33Q800-713.33 800-680v400q0 33.33-23.33 56.67Q753.33-200 720-200H535ZM255-680h-54q-16.67 0-28.33-11.73Q161-703.47 161-720.23 161-737 172.67-748.5 184.33-760 201-760h104q12.75 0 21.38 8.63T335-730v490q0 16.67-11.73 28.33Q311.53-200 294.77-200 278-200 266.5-211.67 255-223.33 255-240v-440Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrTimer10;
