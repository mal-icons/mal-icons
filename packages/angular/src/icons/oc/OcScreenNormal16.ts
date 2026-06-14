import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-screen-normal-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcScreenNormal16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.75 1a0.750.75 0 0 1 0.750.75v2.5c0 0.140.110.250.250.25h2.5a0.750.75 0 0 1 0 1.5h-2.5A1.75 1.75 0 0 1 10 4.25v-2.5a0.750.75 0 0 1 0.75-0.75Zm-5.5 0a0.750.75 0 0 1 0.750.75v2.5A1.75 1.75 0 0 1 4.25 6h-2.5a0.750.75 0 0 1 0-1.5h2.5a0.250.25 0 0 0 0.25-0.25v-2.5A0.750.75 0 0 1 5.25 1ZM1 10.75a0.750.75 0 0 1 0.75-0.75h2.5c0.97 0 1.750.78 1.75 1.75v2.5a0.750.75 0 0 1-1.5 0v-2.5a0.250.25 0 0 0-0.25-0.25h-2.5a0.750.75 0 0 1-0.75-0.75Zm9 1c0-0.970.78-1.75 1.75-1.75h2.5a0.750.75 0 0 1 0 1.5h-2.5a0.250.25 0 0 0-0.250.25v2.5a0.750.75 0 0 1-1.5 0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcScreenNormal16;
