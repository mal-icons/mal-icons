import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-blood-pressure",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrBloodPressure {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M80-570v-170q0-24 18-42t42-18h680q24 0 42 18t18 42v230q0 12.75-8.68 21.38-8.68 8.63-21.5 8.63-12.82 0-21.32-8.62T820-510v-230H140v170H80Zm200 280q-9 0-16-4t-12-12l-71-144h-71q-12.75 0-21.37-8.68Q80-467.35 80-480.17 80-493 88.63-501.5T110-510h90q8.17 0 15.23 4.64Q222.29-500.73 226-493l54 106 133-266q4-8 11.38-11.5t15.5-3.5q8.12 0 15.62 3.5T467-653l80 161q-13 8-25 18.5T499-452l-59-120-134 266q-3.61 8-10.83 12-7.22 4-15.17 4Zm181 130H140q-24 0-42-18t-18-42v-170h60v170h297q4 16 10 31t14 29Zm19-320ZM679.89-90Q601-90 545.5-145.61t-55.5-134.5Q490-359 545.61-414.5t134.5-55.5Q759-470 814.5-414.39t55.5 134.5Q870-201 814.39-145.5T679.89-90ZM765-337q6-6 6-14t-6-14q-6-6-14-6t-14 6l-63 62q-6 6-6 14.5t6 14.5q6 6 14.5 6t14.5-6l62-63Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrBloodPressure;
