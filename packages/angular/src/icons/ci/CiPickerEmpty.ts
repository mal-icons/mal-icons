import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-picker-empty",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiPickerEmpty {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["g",{"data-name":"Picker Empty"}],["path",{"d":"M20.94,5.88a2.81,2.81,0,0,0-0.84-2.01,2.86,2.86,0,0,0-3.97,0l-2.21,2.21-0.75-0.75a0.80.8,0,0,0-1.1,0,0.790.79,0,0,0,0,1.1l0.750.75-8.77,8.76a3.25,3.25,0,0,0-0.92,2.13l-0.07,1.52a1.31,1.31,0,0,0,0.380.97,1.33,1.33,0,0,0,0.910.38h0.06l1.52-0.07a3.25,3.25,0,0,0,2.13-0.92l8.76-8.770.750.75a0.80.8,0,0,0,1.1,0,0.790.79,0,0,0,0-1.1l-0.75-0.75L20.1,7.9A2.83,2.83,0,0,0,20.94,5.88ZM7.35,19.24a2.22,2.22,0,0,1-1.460.63l-1.530.07a0.240.24,0,0,1-0.21-0.090.30.3,0,0,1-0.09-0.21l0.07-1.53a2.22,2.22,0,0,1,0.63-1.46l8.77-8.76,2.59,2.59ZM19.4,7.2l-2.18,2.18-2.59-2.59,2.21-2.22a1.86,1.86,0,0,1,2.56,0,1.85,1.85,0,0,1,0.54,1.31A1.87,1.87,0,0,1,19.4,7.2Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiPickerEmpty;
