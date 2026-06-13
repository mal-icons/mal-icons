import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-football",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiFootball {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20.28,4.76a1.64,1.64,0,0,0-1.03-1.04,12.25,12.25,0,0,0-15.53,15.53,1.64,1.64,0,0,0,1.04,1.03,12.31,12.31,0,0,0,3.950.66,12.26,12.26,0,0,0,11.57-16.18Zm-15.2,14.58a0.730.73,0,0,1-0.42-0.42,11.38,11.38,0,0,1-0.58-4.26l5.26,5.26A11.35,11.35,0,0,1,5.08,19.34Zm11.56-2.71a11.18,11.18,0,0,1-6.03,3.14l-6.38-6.38a11.08,11.08,0,0,1,3.14-6.02,11.19,11.19,0,0,1,6.03-3.15l6.38,6.38A11.25,11.25,0,0,1,16.64,16.63Zm3.29-7.3-5.26-5.26c0.21,0,0.41-0.010.62-0.01a11.15,11.15,0,0,1,3.630.610.680.68,0,0,1,0.420.41A11.54,11.54,0,0,1,19.93,9.33Z"}],["path",{"d":"M10.4,15.26a0.50.5,0,0,0,0.350.150.510.51,0,0,0,0.36-0.150.50.5,0,0,0,0-0.7l-0.48-0.48L12,12.71l0.480.48a0.520.52,0,0,0,0.350.140.540.54,0,0,0,0.36-0.140.510.51,0,0,0,0-0.71l-0.48-0.48,1.37-1.370.480.48a0.50.5,0,0,0,0.7-0.71L13.6,8.74a0.50.5,0,0,0-0.71,0,0.50.5,0,0,0,0,0.7l0.490.49L12,11.3l-0.48-0.48a0.50.5,0,1,0-0.70.7l0.480.48-1.37,1.38-0.49-0.49a0.50.5,0,0,0-0.7,0,0.50.5,0,0,0,0,0.71Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiFootball;
