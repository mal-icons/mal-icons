import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-todoist",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiTodoist {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 0H3C1.35 0 0 1.35 0 3v3.86s3.85 2.24 4.1 2.38c0.310.180.690.18 1 0 0.26-0.15 8.02-4.61 8.14-4.670.28-0.160.58-0.110.75-0.010.160.10.610.350.840.480.230.130.220.50.010.62l-9.71 5.59c-0.350.2-0.690.2-1.050C3.48 10.911 9.46 0 8.88v2.02l4.1 2.38c0.310.180.690.18 1 0 0.26-0.15 8.02-4.61 8.14-4.680.28-0.160.58-0.110.75-0.010.160.10.610.350.840.480.230.130.220.50.010.62-0.210.12-9.29 5.35-9.71 5.59-0.350.2-0.690.21-1.050C3.48 14.951 13.51 0 12.93v2.02l4.1 2.38c0.310.180.690.18 1 0 0.26-0.15 8.02-4.61 8.14-4.680.28-0.160.58-0.110.75-0.010.160.10.610.350.840.480.230.130.220.50.010.62l-9.71 5.59c-0.350.2-0.690.2-1.050C3.48 18.991 17.55 0 16.97V21c0 1.65 1.35 3 3 3h18c1.65 0 3-1.35 3-3V3c0-1.65-1.35-3-3-3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiTodoist;
