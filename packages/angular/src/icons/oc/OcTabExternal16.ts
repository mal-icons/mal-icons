import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-tab-external-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcTabExternal16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.25 4a0.250.25 0 0 0-0.250.25v9a0.750.75 0 0 1-0.750.75H0.75a0.750.75 0 0 1 0-1.5h0.75V4.25c0-0.970.78-1.75 1.75-1.75h9.5c0.97 0 1.750.78 1.75 1.75v8.25h0.75a0.750.75 0 0 1 0 1.5h-1.5a0.750.75 0 0 1-0.75-0.75v-9a0.250.25 0 0 0-0.25-0.25h-9.5Z"}],["path",{"d":"m7.97 7.97-2.75 2.75a0.750.75 0 1 0 1.06 1.06l2.75-2.75 1.54 1.54a0.250.25 0 0 0 0.43-0.18V6.25a0.250.25 0 0 0-0.25-0.25H6.6a0.250.25 0 0 0-0.180.43L7.97 7.97Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcTabExternal16;
