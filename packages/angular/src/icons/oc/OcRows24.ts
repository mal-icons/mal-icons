import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-rows-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcRows24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22 3.75v5.5A1.75 1.75 0 0 1 20.25 11H3.75A1.75 1.75 0 0 1 2 9.25v-5.5C2 2.78 2.78 2 3.75 2h16.5c0.97 0 1.750.78 1.75 1.75Zm0 11v5.5A1.75 1.75 0 0 1 20.25 22H3.75A1.75 1.75 0 0 1 2 20.25v-5.5c0-0.970.78-1.75 1.75-1.75h16.5c0.97 0 1.750.78 1.75 1.75ZM20.25 3.5H3.75a0.250.25 0 0 0-0.250.25v5.5c0 0.140.110.250.250.25h16.5a0.250.25 0 0 0 0.25-0.25v-5.5a0.250.25 0 0 0-0.25-0.25Zm0 11H3.75a0.250.25 0 0 0-0.250.25v5.5c0 0.140.110.250.250.25h16.5a0.250.25 0 0 0 0.25-0.25v-5.5a0.250.25 0 0 0-0.25-0.25Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcRows24;
