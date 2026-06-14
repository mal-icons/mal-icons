import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-repo-template-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcRepoTemplate16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.25 8a0.750.75 0 0 1 0.750.75v4.5a0.750.75 0 0 1-0.750.75h-2.5a0.750.75 0 0 1 0-1.5h1.75v-2h-0.75a0.750.75 0 0 1 0-1.5h0.75v-0.25a0.750.75 0 0 1 0.75-0.75ZM5 12.25a0.250.25 0 0 1 0.25-0.25h3.5a0.250.25 0 0 1 0.250.25v3.25a0.250.25 0 0 1-0.40.2l-1.45-1.09a0.250.25 0 0 0-0.3 0L5.4 15.7a0.250.25 0 0 1-0.4-0.2ZM2.75 8a0.750.75 0 0 1 0.750.75v0.27c0.08-0.010.17-0.020.25-0.02h0.5a0.750.75 0 0 1 0 1.5h-0.5a0.250.25 0 0 0-0.250.25v0.75c0 0.280.110.530.30.71a0.750.75 0 1 1-1.05 1.07A2.5 2.5 0 0 1 2 11.5V8.75A0.750.75 0 0 1 2.75 8ZM11 0.75a0.750.75 0 0 1 0.75-0.75h1.5a0.750.75 0 0 1 0.750.75v1.5a0.750.75 0 0 1-1.5 0V1.5h-0.75A0.750.75 0 0 1 11 0.75Zm-5 0A0.750.75 0 0 1 6.75 0h2.5a0.750.75 0 0 1 0 1.5h-2.5A0.750.75 0 0 1 6 0.75Zm0 9A0.750.75 0 0 1 6.75 9h2.5a0.750.75 0 0 1 0 1.5h-2.5A0.750.75 0 0 1 6 9.75ZM4.990.66a0.750.75 0 0 1-0.640.85c-0.440.06-0.780.41-0.850.85a0.750.75 0 0 1-1.48-0.21A2.5 2.5 0 0 1 4.140.03a0.750.75 0 0 1 0.850.64ZM2.75 4a0.750.75 0 0 1 0.750.75v1.5a0.750.75 0 0 1-1.5 0v-1.5A0.750.75 0 0 1 2.75 4Zm10.5 0a0.750.75 0 0 1 0.750.75v1.5a0.750.75 0 0 1-1.5 0v-1.5a0.750.75 0 0 1 0.75-0.75Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcRepoTemplate16;
