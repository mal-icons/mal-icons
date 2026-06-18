import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-wprocket",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiWprocket {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.720.67c-0.08-0.280.08-0.470.36-0.47h2.28c0.16 0 0.310.140.360.27L8.39 7.07h0.08L11.490.22A0.370.37 0 111.82 0h0.36c0.17 0 0.290.090.330.22l3.02 6.85h0.08L17.290.47a0.40.4 0 1.36-0.28h2.28c0.28 0 0.420.20.360.47l-3.68 13.08a0.370.37 0 1-0.360.28h-0.31a0.380.38 0 1-0.33-0.22l-3.57-7.96h-0.06l-3.54 7.96a0.40.4 0 1-0.330.22h-0.31a0.380.38 0 1-0.36-0.28L3.720.67m8.31 7.92l-2.59 5.82a1.66 1.66 0 1-0.340.45v0a1.47 1.47 0 1-0.690.34l1.4 8.69c0.090.160.260.160.37 0l1.79-2.72 1.64 2.71c0.10.160.270.160.37 0l1.58-8.7a1.5 1.5 0 1-0.83-0.62l-0.02-0.03a1.41 1.41 0 1-0.07-0.12l-0.61-1.37h0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiWprocket;
