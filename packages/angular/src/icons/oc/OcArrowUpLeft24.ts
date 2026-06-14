import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-arrow-up-left-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcArrowUpLeft24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.75 15.5a0.750.75 0 0 1-0.75-0.75v-9A0.750.75 0 0 1 5.75 5h9a0.750.75 0 0 1 0 1.5H7.56l10.22 10.22a0.750.75 0 0 1-0.33 1.270.750.75 0 0 1-0.73-0.21L6.5 7.56v7.19a0.750.75 0 0 1-0.750.75Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcArrowUpLeft24;
