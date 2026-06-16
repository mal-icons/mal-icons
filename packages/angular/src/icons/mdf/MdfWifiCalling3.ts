import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-wifi-calling-3",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfWifiCalling3 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.49 3c-2.21 0-4.210.9-5.66 2.34l1.06 1.06a6.47 6.47 0 0 1 9.18 0l1.06-1.06A7.93 7.93 0 0 0 16.49 3z"}],["path",{"d":"M20.03 7.46a5.02 5.02 0 0 0-7.08 0l1.06 1.06c0.63-0.63 1.51-1.03 2.47-1.03s1.840.39 2.47 1.03l1.08-1.06zm-4.95 2.13L16.49 11l1.41-1.41c-0.36-0.37-0.86-0.59-1.41-0.59s-1.050.22-1.410.59z"}],["path",{"d":"m15.63 14.4-2.52 2.5c-2.5-1.43-4.57-3.5-6-6l2.5-2.52c0.23-0.240.33-0.570.27-0.9L9.13 3.8c-0.09-0.46-0.5-0.8-0.98-0.8H4c-0.56 0-1.030.47-1 1.030.17 2.89 1.05 5.6 2.43 7.97 1.58 2.73 3.85 4.99 6.57 6.57 2.37 1.37 5.08 2.26 7.97 2.430.560.03 1.03-0.44 1.03-1v-4.15c0-0.48-0.34-0.89-0.8-0.98l-3.67-0.73a0.990.99 0 0 0-0.90.26z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfWifiCalling3;
