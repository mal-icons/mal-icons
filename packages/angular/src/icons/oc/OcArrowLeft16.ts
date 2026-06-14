import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-arrow-left-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcArrowLeft16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.78 12.53a0.750.75 0 0 1-1.06 0L2.47 8.28a0.750.75 0 0 1 0-1.06l4.25-4.25a0.750.75 0 0 1 1.040.020.750.75 0 0 1 0.02 1.04L4.81 7h7.44a0.750.75 0 0 1 0 1.5H4.81l2.97 2.97a0.750.75 0 0 1 0 1.06Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcArrowLeft16;
