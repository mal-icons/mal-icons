import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-person-fill-gear",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsPersonFillGear {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h5.26A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.54-3.39Q8.84 9 8 9c-5 0-6 3-6 4m9.89-3.54c0.18-0.61 1.05-0.61 1.23 0l0.040.15a0.640.64 0 0 0 0.920.38l0.14-0.07c0.56-0.31 1.180.310.870.87l-0.070.14a0.640.64 0 0 0 0.380.92l0.150.05c0.610.180.61 1.05 0 1.23l-0.150.04a0.640.64 0 0 0-0.380.92l0.070.14c0.310.56-0.31 1.18-0.870.87l-0.14-0.07a0.640.64 0 0 0-0.920.38l-0.040.15c-0.180.61-1.050.61-1.23 0l-0.04-0.15a0.640.64 0 0 0-0.92-0.38l-0.140.07c-0.560.31-1.17-0.31-0.87-0.87l0.08-0.14a0.640.64 0 0 0-0.38-0.92l-0.15-0.04c-0.61-0.18-0.61-1.05 0-1.23l0.15-0.04a0.640.64 0 0 0 0.38-0.92l-0.07-0.14c-0.31-0.560.31-1.170.87-0.87l0.140.08a0.640.64 0 0 0 0.92-0.38zM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsPersonFillGear;
