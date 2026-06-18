import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-goland",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiGoland {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 0v24h24V0Zm6.76 3a5.45 5.45 0 0 1 3.89 1.36L9.28 6.01A3.65 3.65 0 0 0 6.7 5c-1.6 0-2.84 1.4-2.84 3.08v0.03c0 1.81 1.24 3.14 3 3.14a3.47 3.47 0 0 0 2.05-0.6V9.23H6.71v-1.88H11v4.3a6.43 6.43 0 0 1-4.23 1.57c-3.08 0-5.2-2.16-5.2-5.09v-0.03A5.08 5.08 0 0 1 6.76 3Zm10.43 0c3.05 0 5.24 2.28 5.24 5.09v0.03a5.12 5.12 0 0 1-5.27 5.12c-3.06-0.02-5.25-2.3-5.25-5.11v-0.03A5.12 5.12 0 0 1 17.2 3Zm-0.03 2A2.96 2.96 0 0 0 14.2 8.07v0.03a3.01 3.01 0 0 0 3 3.11 2.96 2.96 0 0 0 2.96-3.08v-0.03A3 3 0 0 0 17.17 5ZM2.25 19.5h9V21h-9z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiGoland;
