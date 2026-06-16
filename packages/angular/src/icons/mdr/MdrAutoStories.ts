import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-auto-stories",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrAutoStories {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m18.15 1.35-4 4c-0.10.1-0.150.22-0.150.36v8.17c0 0.430.510.660.830.37l4-3.6a0.480.48 0 0 0 0.17-0.37V1.71a0.50.5 0 0 0-0.85-0.36zm4.32 3.85c-0.47-0.24-0.96-0.44-1.47-0.61v12.03c-1.14-0.41-2.31-0.62-3.5-0.62-1.9 0-3.780.54-5.5 1.58V5.48C10.38 4.55 8.51 4 6.5 4c-1.79 0-3.480.44-4.97 1.2-0.330.16-0.530.51-0.530.88v12.08c0 0.760.81 1.23 1.480.87C3.69 18.4 5.05 18 6.5 18c2.07 0 3.980.82 5.5 2 1.52-1.18 3.43-2 5.5-2 1.45 0 2.810.4 4.02 1.040.670.36 1.48-0.11 1.48-0.87V6.08c0-0.37-0.2-0.72-0.53-0.88z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrAutoStories;
