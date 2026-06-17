import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-emoji-kiss",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsEmojiKiss {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M12.49 13.37a7 7 0 1 1 2.49-4.86c0.340.030.680.150.980.33a8 8 0 1 0-2.65 5.15 9 9 0 0 1-0.81-0.62m-3.73-3.22a13 13 0 0 0-1.110.320.50.5 0 1 1-0.31-0.95c0.38-0.120.8-0.25 1.19-0.340.37-0.090.78-0.15 1.1-0.110.160.020.390.090.560.290.190.230.190.50.130.71a1.9 1.9 0 0 1-0.310.59q-0.110.16-0.280.340.160.190.280.35c0.140.20.260.40.310.60.060.210.060.48-0.130.71-0.170.2-0.40.26-0.560.28-0.320.04-0.73-0.03-1.1-0.11a15 15 0 0 1-1.19-0.340.50.5 0 1 1 0.31-0.95c0.370.120.760.24 1.110.32q0.260.060.450.08a6 6 0 0 0-0.5-0.580.50.5 0 0 1 0-0.69 5.5 5.5 0 0 0 0.5-0.58 5 5 0 0 0-0.450.08Zm0.77-0.090000zm0 1.87-0.010zM6 8c0.55 0 1-0.67 1-1.5S6.55 5 6 5s-1 0.67-1 1.5S5.45 8 6 8m2.76-0.56a0.50.5 0 0 0 0.68-0.190.930.93 0 0 1 0.81-0.49c0.34 0 0.650.190.810.49a0.50.5 0 0 0 0.87-0.49A1.93 1.93 0 0 0 10.25 5.75c-0.73 0-1.360.41-1.69 1.01a0.50.5 0 0 0 0.190.68M14 9.83c1.11-1.14 3.880.86 0 3.42-3.88-2.57-1.11-4.56 0-3.42Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsEmojiKiss;
