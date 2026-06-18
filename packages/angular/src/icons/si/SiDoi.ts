import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-doi",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiDoi {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M24 12c0 6.63-5.37 12-12 12S0 18.63 0 12 5.37 0 12 0s12 5.37 12 12ZM7.59 6.1v4.47c-0.66-0.92-1.4-1.37-2.41-1.37-2.05 0-3.24 1.44-3.24 3.85 0 2.36 1.33 3.85 3.17 3.85 1.12 0 1.88-0.4 2.44-1.32l-0.04 1.04h2.05V6.1Zm-1.76 8.94c-1.12 0-1.8-0.76-1.8-2.04 0-1.320.68-2.08 1.8-2.08 1.08 0 1.80.76 1.8 2.09 0 1.29-0.67 2.05-1.8 2.05Zm12.25-1.95c0-2.17-1.58-3.79-3.91-3.79-2.33 0-3.94 1.7-3.94 3.79 0 2.13 1.58 3.79 3.95 3.79 2.29 0 3.91-1.66 3.91-3.79Zm-2.09-0.01c0 1.14-0.71 1.89-1.85 1.89-1.14 0-1.85-0.75-1.85-1.89 0-1.140.71-1.89 1.85-1.89 1.15 0 1.860.75 1.85 1.89Zm2.6-5.79c0 0.630.52 1.23 1.19 1.230.63 0 1.19-0.56 1.19-1.23a1.17 1.17 0 0 0-1.19-1.19c-0.67 0-1.180.56-1.19 1.19Zm0.17 9.34h2.06V9.6H18.75Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiDoi;
