import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-eye-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcEye24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15.5 12a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"}],["path",{"d":"M12 3.5c3.43 0 6.12 1.53 8.05 3.24 1.93 1.7 3.13 3.61 3.62 4.46a1.6 1.6 0 0 1 0 1.6c-0.480.85-1.69 2.76-3.62 4.46-1.93 1.71-4.62 3.24-8.05 3.24-3.43 0-6.12-1.53-8.05-3.24C2.02 15.560.81 13.650.33 12.8a1.6 1.6 0 0 1 0-1.6c0.48-0.85 1.69-2.76 3.62-4.46C5.88 5.03 8.57 3.5 12 3.5ZM1.63 11.95a0.120.12 0 0 0-0.020.06c00.020.010.040.020.060.440.77 1.55 2.53 3.31 4.08C6.69 17.68 9.05 19 12 19c2.96 0 5.31-1.31 7.06-2.86 1.76-1.55 2.87-3.31 3.31-4.08a0.110.11 0 0 0 0.02-0.060.110.11 0 0 0-0.02-0.06c-0.44-0.77-1.55-2.53-3.31-4.08C17.31 6.32 14.96 5 12 5 9.05 5 6.69 6.31 4.94 7.87c-1.76 1.55-2.87 3.31-3.31 4.08Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcEye24;
