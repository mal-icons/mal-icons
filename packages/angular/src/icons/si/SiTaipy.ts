import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-taipy",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiTaipy {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1.27 4.15a0.970.97 0 0 1 0.92-0.65h21.33a0.490.49 0 0 1 0.460.65l-1.25 3.56a0.970.97 0 0 1-0.920.65H0.49a0.490.49 0 0 1-0.46-0.65Zm4.86 6.07a0.970.97 0 0 1 0.92-0.65h8.34a0.490.49 0 0 1 0.460.65l-1.25 3.56a0.970.97 0 0 1-0.920.65H5.34a0.490.49 0 0 1-0.46-0.65Zm2.7 6.07a0.970.97 0 0 1 0.92-0.65h3.48a0.490.49 0 0 1 0.460.65l-1.25 3.56a0.970.97 0 0 1-0.920.65H8.04a0.490.49 0 0 1-0.46-0.65Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiTaipy;
