import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-9-circle-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class Bs_9CircleFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-8.22 4.15c2.1 0 3.12-1.46 3.12-4.3 0-3.15-1.46-4.01-2.97-4.01-1.63 0-2.87 1.02-2.87 2.73 0 1.71 1.17 2.67 2.57 2.67 1.06 0 1.7-0.56 1.93-1.18h0.08c0.05 1.67-0.47 3.02-1.83 3.02-0.71 0-1.15-0.36-1.25-0.72H5.26c0.090.910.93 1.8 2.52 1.8Zm0.12-3.97c0.81 0 1.54-0.53 1.54-1.59s-0.67-1.68-1.56-1.68c-0.84 0-1.520.62-1.52 1.66 0 1.070.71 1.61 1.54 1.61Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default Bs_9CircleFill;
