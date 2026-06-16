import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-settings-phone",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrSettingsPhone {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["circle",{"cx":"12","cy":"10","r":"1"}],["circle",{"cx":"16","cy":"10","r":"1"}],["circle",{"cx":"20","cy":"10","r":"1"}],["path",{"d":"m15.63 14.4-2.52 2.5c-2.5-1.43-4.57-3.5-6-6l2.5-2.52c0.23-0.240.33-0.570.27-0.9L9.13 3.8c-0.09-0.46-0.5-0.8-0.98-0.8H4c-0.56 0-1.030.47-1 1.030.17 2.89 1.05 5.6 2.43 7.97 1.58 2.73 3.85 4.99 6.57 6.57 2.37 1.37 5.08 2.26 7.97 2.430.560.03 1.03-0.44 1.03-1v-4.15c0-0.48-0.34-0.89-0.8-0.98l-3.67-0.73a0.990.99 0 0 0-0.90.26z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrSettingsPhone;
