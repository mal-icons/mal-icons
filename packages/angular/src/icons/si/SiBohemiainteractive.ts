import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-bohemiainteractive",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiBohemiainteractive {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m18.23 12.830.04-0.11c0.68-2.230.41-4.3-0.77-5.82a5.67 5.67 0 0 0-3.51-2.07L15.88 0h-1.46s-0.7 2.26-1.53 4.73a8.16 8.16 0 0 0-0.86 0 12.17 12.17 0 0 0-6.74 2.69 11.31 11.31 0 0 0-3.49 4.08h1.21A10.38 10.38 0 0 1 5.84 8.12a11.31 11.31 0 0 1 6.23-2.5h0.51c-0.10.28-0.20.56-0.30.84-0.38 1.07-1.29 3.58-2.3 6.37H6.64l-1.51 2.13a22.66 22.66 0 0 1 4.41-0.87c-0.8 2.19-1.62 4.46-2.27 6.26-2.040.12-3.86-0.48-4.99-1.77a4.23 4.23 0 0 1-1.02-1.96l-0.49-0.46a5.24 5.24 0 0 0 1.06 2.95 6.16 6.16 0 0 0 4.98 2.17h0.09L5.94 24l0.6-0.470.9-2.27a12.28 12.28 0 0 0 6.56-2.66 12.53 12.53 0 0 0 3.96-5.08H22.77l0.47-0.67zm-4.58-7.13a4.9 4.9 0 0 1 3.14 1.75c1 1.29 1.21 3.070.61 5.01-0.040.12-0.080.25-0.120.37h-6.46zm-0.18 12.2a11.49 11.49 0 0 1-5.62 2.42l2.5-6.31c1.71-0.19 3.9-0.36 6.65-0.44a11.87 11.87 0 0 1-3.53 4.33z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiBohemiainteractive;
