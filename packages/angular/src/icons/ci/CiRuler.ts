import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-ruler",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiRuler {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9.48,3.5a1.5,1.5,0,0,0-2.12,0L3.5,7.35a1.52,1.52,0,0,0-0.44,1.06A1.5,1.5,0,0,0,3.5,9.47L14.52,20.5a1.51,1.51,0,0,0,2.13,0l3.85-3.86a1.49,1.49,0,0,0,0-2.12ZM8.36,7.08a0.50.5,0,0,0,0,0.710.520.52,0,0,0,0.71,0c0.55-0.56,1.09-1.1,1.65-1.64l1.25,1.25-0.90.9a0.480.48,0,0,0,0,0.70.50.5,0,0,0,0.71,0c0.29-0.30.6-0.60.9-0.89l1.25,1.25-1.64,1.65a0.50.5,0,0,0,0.70.7c0.56-0.55,1.1-1.09,1.65-1.64l1.25,1.25-0.90.9a0.520.52,0,0,0-0.140.360.50.5,0,0,0,0.140.350.510.51,0,0,0,0.71,0l0.9-0.9,1.26,1.26-1.65,1.64a0.50.5,0,0,0,0.710.71c0.55-0.56,1.09-1.1,1.65-1.64l1.23,1.23a0.50.5,0,0,1,0,0.7l-3.86,3.86a0.50.5,0,0,1-0.71,0L4.21,8.77a0.490.49,0,0,1-0.15-0.360.490.49,0,0,1,0.15-0.35L8.07,4.2a0.510.51,0,0,1,0.7,0l1.24,1.24Z"}],["path",{"d":"M18.94,12.96l-0.04-0.04c0.01,0,0.01,0,0.020.01S18.94,12.95,18.94,12.96Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiRuler;
