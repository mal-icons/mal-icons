import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-arrow-switch-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcArrowSwitch24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.72 21.78a0.750.75 0 0 0 1.06-1.06L5.56 17.5h14.69a0.750.75 0 0 0 0-1.5H5.56l3.22-3.22a0.750.75 0 1 0-1.06-1.06l-4.5 4.5a0.750.75 0 0 0 0 1.06l4.5 4.5Zm8.56-9.5a0.750.75 0 1 1-1.06-1.06L18.44 8H3.75a0.750.75 0 0 1 0-1.5h14.69l-3.22-3.22a0.750.75 0 0 1 1.06-1.06l4.5 4.5a0.750.75 0 0 1 0 1.06l-4.5 4.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcArrowSwitch24;
