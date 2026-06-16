import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-text-rotation-angleup",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrTextRotationAngleup {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m17.61 9.850.560.56-8.48 8.49a11 0 1 0 1.41 1.41l8.49-8.490.560.56c0.310.320.850.10.85-0.34V9.5c0-0.28-0.22-0.5-0.5-0.5h-2.54a0.50.5 0 0 0-0.350.85zm-9.13 2.9 3.54-3.54 1.60.67c0.360.150.770.07 1.05-0.21a0.960.96 0 0 0-0.32-1.57L5.26 4.5c-0.43-0.16-0.91-0.06-1.230.26-0.320.32-0.420.8-0.25 1.23l3.61 9.09c0.250.64 1.080.81 1.570.320.28-0.280.36-0.690.21-1.05l-0.69-1.6zm-0.82-1.72L5.43 6.16l4.87 2.23-2.64 2.64z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrTextRotationAngleup;
