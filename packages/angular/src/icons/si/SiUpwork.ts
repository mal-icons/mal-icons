import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-upwork",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiUpwork {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.56 13.16c-1.1 0-2.13-0.47-3.07-1.23l0.23-1.080.01-0.04c0.21-1.140.85-3.06 2.84-3.06 1.49 0 2.7 1.21 2.7 2.70 1.49-1.21 2.7-2.7 2.7zm0-8.14c-2.54 0-4.51 1.65-5.31 4.37-1.22-1.83-2.15-4.04-2.69-5.89H7.83v7.11c0 1.41-1.14 2.55-2.55 2.55-1.40-2.54-1.14-2.54-2.55V3.49H0v7.11c0 2.91 2.37 5.3 5.28 5.3 2.91 0 5.28-2.39 5.28-5.3v-1.19c0.53 1.11 1.18 2.23 1.97 3.22l-1.67 7.87h2.8l1.21-5.71c1.060.68 2.29 1.11 3.69 1.11 3 0 5.44-2.45 5.44-5.45 0-3-2.44-5.44-5.44-5.44z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiUpwork;
