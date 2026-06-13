import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-calculator-2",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiCalculator2 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["g",{"data-name":"Calculator 2"}],["path",{"d":"M20.45,7.83h-2.8v2.81a0.50.5,0,0,1-1,0V7.83H13.84a0.50.5,0,0,1,0-1h2.81V4.02a0.50.5,0,0,1,1,0V6.83h2.8A0.50.5,0,0,1,20.45,7.83Z"}],["path",{"d":"M3.55,7.83a0.50.5,0,0,1,0-1h6.62a0.50.5,0,0,1,0,1Z"}],["path",{"d":"M13.84,16.05a0.50.5,0,0,1,0-1h6.62a0.50.5,0,0,1,0,1Z"}],["path",{"d":"M13.84,20.19a0.50.5,0,0,1,0-1h6.62a0.50.5,0,0,1,0,1Z"}],["path",{"d":"M9.55,19.61a0.50.5,0,0,1-0.710.7L6.86,18.33c-0.660.65-1.33,1.32-1.99,1.98a0.50.5,0,0,1-0.71-0.7l1.99-1.99L4.16,15.63a0.50.5,0,0,1,0.71-0.7l0.580.58,1.4,1.4c0.67-0.66,1.33-1.32,1.99-1.98a0.50.5,0,0,1,0.710.7L7.56,17.62Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiCalculator2;
