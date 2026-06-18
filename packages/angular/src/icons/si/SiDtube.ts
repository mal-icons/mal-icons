import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-dtube",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiDtube {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 1.64v20.72h8.52c1.31 0 2.49-0.16 3.54-0.48 1.04-0.32 1.97-0.78 2.79-1.41 1.15-0.89 2.04-2.05 2.67-3.460.61-1.420.93-3.050.93-4.88-0.01-1.58-0.24-3.02-0.71-4.31-0.47-1.29-1.11-2.39-1.96-3.3-0.84-0.91-1.85-1.61-3.03-2.12-1.18-0.5-2.48-0.75-3.91-0.75zm5.2 5.71l8.04 4.66-8.04 4.65zm15.99 9.16c-1.49 0-2.71 1.22-2.71 2.71 0 1.49 1.22 2.71 2.71 2.71h0.1c1.49 0 2.71-1.22 2.71-2.71 0-1.49-1.22-2.71-2.71-2.71z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiDtube;
