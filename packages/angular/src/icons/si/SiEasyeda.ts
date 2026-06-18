import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-easyeda",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiEasyeda {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.75 15.36c0.96 0 1.750.79 1.75 1.75 0 0.96-0.79 1.75-1.75 1.75s-1.75-0.79-1.75-1.750.79-1.75 1.75-1.75m12.59-7.34a7.68 7.68 0 0 0-10.02-4.39c-0.620.24-1.20.55-1.750.96A6.89 6.89 0 0 0 7 6.17c-0.24-0.03-0.51-0.03-0.75-0.03C2.78 6.1 0 8.91 0 12.34c0 2.68 1.72 5.04 4.15 5.90.48 1.54 1.92 2.68 3.6 2.68a3.76 3.76 0 0 0 3.77-3.77c0-0.17 0-0.31-0.03-0.48l5.32-2.670.52-0.27-1.03-2.23-0.580.27-5.32 2.68a3.71 3.71 0 0 0-2.64-1.1c-1.51 0-2.810.89-3.43 2.19-1.41-0.82-2.13-2.5-1.72-4.15a3.72 3.72 0 0 1 4.53-2.67c0.380.10.720.24 1.030.450.89-2.74 3.88-4.22 6.59-3.33 1.920.65 3.33 2.37 3.53 4.39h0.27a2.91 2.91 0 0 1 2.92 2.92 2.94 2.94 0 0 1-2.68 2.92h-2.13v2.5H19.04c2.98-0.24 5.18-2.88 4.94-5.86a4.85 4.85 0 0 0-1.51-3.36C21.89 8.74 21.17 8.26 20.35 8.02Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiEasyeda;
