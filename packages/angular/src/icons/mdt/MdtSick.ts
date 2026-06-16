import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-sick",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtSick {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.32 10.56 8.38 9.5 7.32 8.44l1.06-1.06L10.5 9.5l-2.12 2.12-1.06-1.06zM4.5 9c0.03 0 0.050.010.080.01A8 8 0 0 1 12 4c2.19 0 4.160.88 5.61 2.30.15-0.60.45-1.290.81-1.96A9.97 9.97 0 0 0 11.99 2c-4.88 0-8.94 3.51-9.81 8.14C2.74 9.44 3.59 9 4.5 9zM21 10.5c-0.42 0-0.82-0.09-1.19-0.220.120.550.19 1.130.19 1.72 0 4.42-3.58 8-8 8-3.36 0-6.23-2.07-7.42-5.01-0.03 0-0.050.01-0.080.01-0.52 0-1.04-0.14-1.5-0.4-0.32-0.18-0.59-0.42-0.82-0.70.89 4.61 4.93 8.1 9.8 8.1C17.52 22 22 17.52 22 12c0-0.55-0.06-1.09-0.14-1.62a3.5 3.5 0 0 1-0.860.12zM21 3s-2 2.9-2 4 0.9 2 2 2 2-0.9 2-2-2-4-2-4zm-5.38 4.38L13.5 9.5l2.12 2.12 1.06-1.06-1.06-1.06 1.06-1.06-1.06-1.06zM8.56 17c0.69-1.19 1.97-2 3.44-2s2.750.81 3.44 2h1.68c-0.8-2.05-2.79-3.5-5.12-3.5-0.87 0-1.70.2-2.430.57L5.99 12c0-0.52-0.26-1.02-0.74-1.29-0.72-0.41-1.63-0.17-2.050.55-0.410.72-0.17 1.630.55 2.050.480.28 1.050.25 1.49 0l2.97 1.72c-0.570.53-1.03 1.21-1.33 1.97h1.68z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtSick;
