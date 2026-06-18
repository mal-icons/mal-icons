import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-gitconnected",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiGitconnected {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.73 5.42C2.87 5.42 0 8.4 0 12.04c0 3.61 2.84 6.55 6.69 6.55 3.86 0 6.71-2.94 6.76-6.58l0-0.08c0.03-2.19 1.5-3.97 3.8-3.97 2.27 0 3.87 1.84 3.87 4.08 0 2.22-1.48 4.04-3.82 4.04-1.33 0-2.43-0.66-3.11-1.66a7.56 7.56 0 0 1-1.41 2.53c1.16 1.01 2.71 1.63 4.47 1.63 3.89 0 6.76-2.99 6.76-6.59 0-3.63-2.84-6.57-6.71-6.57-3.83 0-6.67 2.92-6.73 6.5-0.010.04 0 0.1 0 0.12 0 2.22-1.48 4.04-3.82 4.04-2.24 0-3.84-1.84-3.84-4.08 0-2.22 1.48-4.03 3.8-4.03 1.23 0 2.250.55 2.94 1.41l1.39-2.45A6.75 6.75 0 0 0 6.73 5.42Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiGitconnected;
