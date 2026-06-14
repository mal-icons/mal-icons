import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-screen-full-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcScreenFull24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.75 15a0.750.75 0 0 1 0.750.75v3.5c0 0.140.110.250.250.25h3.5a0.750.75 0 0 1 0 1.5h-3.5A1.75 1.75 0 0 1 3 19.25v-3.5a0.750.75 0 0 1 0.75-0.75Zm16.5 0a0.750.75 0 0 1 0.750.75v3.5A1.75 1.75 0 0 1 19.25 21h-3.5a0.750.75 0 0 1 0-1.5h3.5a0.250.25 0 0 0 0.25-0.25v-3.5a0.750.75 0 0 1 0.75-0.75ZM4.75 4.5a0.250.25 0 0 0-0.250.25v3.5a0.750.75 0 0 1-1.5 0v-3.5C3 3.78 3.78 3 4.75 3h3.5a0.750.75 0 0 1 0 1.5ZM15 3.75a0.750.75 0 0 1 0.75-0.75h3.5c0.97 0 1.750.78 1.75 1.75v3.5a0.750.75 0 0 1-1.5 0v-3.5a0.250.25 0 0 0-0.25-0.25h-3.5a0.750.75 0 0 1-0.75-0.75Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcScreenFull24;
