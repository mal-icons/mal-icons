import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-bag-1",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiBag1 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["g",{"data-name":"Bag 1"}],["path",{"d":"M20.37,17.65a16.78,16.78,0,0,0-2.01-5.54,17.04,17.04,0,0,0-3.74-4.55l-0.1-0.08a0.120.12,0,0,1-0.02-0.15l1.49-2.59a1.12,1.12,0,0,0,0-1.12,1.09,1.09,0,0,0-0.97-0.55H8.98a1.1,1.1,0,0,0-0.970.55,1.12,1.12,0,0,0,0,1.12l1.5,2.59a0.120.12,0,0,1-0.030.15l-0.090.08A17.33,17.33,0,0,0,3.63,17.65a4.05,4.05,0,0,0-0.040.48,2.8,2.8,0,0,0,2.8,2.8H17.62a2.78,2.78,0,0,0,2.13-0.99A2.83,2.83,0,0,0,20.37,17.65ZM8.88,4.24a0.10.1,0,0,1,0-0.120.110.11,0,0,1,0.1-0.05h6.04a0.140.14,0,0,1,0.110.050.160.16,0,0,1,0,0.12l-1.59,2.8H10.46Zm5.09,4.08a16.44,16.44,0,0,1,5.42,9.5,1.82,1.82,0,0,1-0.4,1.47,1.79,1.79,0,0,1-1.370.64H6.39a1.81,1.81,0,0,1-1.8-1.8,1.63,1.63,0,0,1,0.03-0.31,16.29,16.29,0,0,1,5.42-9.5l0.32-0.28h3.28Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiBag1;
