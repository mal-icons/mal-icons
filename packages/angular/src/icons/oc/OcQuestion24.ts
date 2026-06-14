import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-question-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcQuestion24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.97 8.27a1.45 1.45 0 0 0-0.490.570.750.75 0 0 1-1.34-0.67c0.2-0.40.51-0.831-1.15C10.63 6.69 11.24 6.5 12 6.5c0.66 0 1.370.2 1.930.62a2.45 2.45 0 0 1 1 2.01c0 1.03-0.51 1.72-1.03 2.22-0.190.18-0.40.36-0.580.51l-0.150.12a4.33 4.33 0 0 0-0.430.41v1.37a0.750.75 0 1 1-1.5 0v-1.47c0-0.240.07-0.50.25-0.740.22-0.280.49-0.520.72-0.71l0.18-0.1500c0.17-0.140.32-0.270.47-0.410.37-0.350.57-0.680.57-1.14a0.950.95 0 0 0-0.4-0.81C12.77 8.12 12.38 8 12 8c-0.49 0-0.810.12-1.030.27ZM13 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"}],["path",{"d":"M12 1c6.08 0 11 4.93 11 11s-4.92 11-11 11S1 18.08 1 12 5.93 1 12 1ZM2.5 12a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5 9.5 9.5 0 0 0 2.5 12Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcQuestion24;
