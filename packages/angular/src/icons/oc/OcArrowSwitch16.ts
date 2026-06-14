import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-arrow-switch-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcArrowSwitch16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.22 14.78a0.750.75 0 0 0 1.06-1.06L4.56 12h8.69a0.750.75 0 0 0 0-1.5H4.56l1.72-1.72a0.750.75 0 0 0-1.06-1.06l-3 3a0.750.75 0 0 0 0 1.06l3 3Zm5.56-6.5a0.750.75 0 1 1-1.06-1.06l1.72-1.72H2.75a0.750.75 0 0 1 0-1.5h8.69L9.72 2.28a0.750.75 0 0 1 1.06-1.06l3 3a0.750.75 0 0 1 0 1.06l-3 3Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcArrowSwitch16;
