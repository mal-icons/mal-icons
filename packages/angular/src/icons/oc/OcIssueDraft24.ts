import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-issue-draft-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcIssueDraft24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17.32 3.21a0.750.75 0 0 1 1.05-0.18 11.06 11.06 0 0 1 2.61 2.610.750.75 0 1 1-1.220.87 9.55 9.55 0 0 0-2.25-2.250.750.75 0 0 1-0.18-1.05Zm3.48 14.12a0.750.75 0 0 1 0.18 1.05 11.07 11.07 0 0 1-2.6 2.610.750.75 0 1 1-0.87-1.22 9.55 9.55 0 0 0 2.25-2.250.750.75 0 0 1 1.05-0.18ZM2.02 9.54a0.750.75 0 0 1 0.620.86 9.57 9.57 0 0 0 0 3.190.750.75 0 1 1-1.480.25 11.07 11.07 0 0 1 0-3.690.750.75 0 0 1 0.87-0.61Zm7.53 12.44a0.750.75 0 0 1 0.86-0.61 9.57 9.57 0 0 0 3.19 0 0.750.75 0 1 1 0.25 1.48 11.07 11.07 0 0 1-3.69 0 0.750.75 0 0 1-0.61-0.86ZM6.68 3.21a0.750.75 0 0 1-0.18 1.05A9.56 9.56 0 0 0 4.25 6.5a0.750.75 0 1 1-1.22-0.87 11.06 11.06 0 0 1 2.61-2.60.750.75 0 0 1 1.050.18ZM3.21 17.32a0.750.75 0 0 1 1.050.18 9.55 9.55 0 0 0 2.25 2.250.750.75 0 1 1-0.87 1.22 11.06 11.06 0 0 1-2.6-2.610.750.75 0 0 1 0.18-1.05Zm6.95-16.17a11.07 11.07 0 0 1 3.69 0 0.750.75 0 0 1-0.25 1.48 9.57 9.57 0 0 0-3.19 0 0.750.75 0 1 1-0.25-1.48Zm11.83 8.39a0.750.75 0 0 1 0.860.61 11.07 11.07 0 0 1 0 3.690.750.75 0 0 1-1.48-0.25 9.57 9.57 0 0 0 0-3.190.750.75 0 0 1 0.62-0.86Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcIssueDraft24;
