import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-move-to-top-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcMoveToTop16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 2.25a0.750.75 0 0 1 0.75-0.75h8.5a0.750.75 0 0 1 0 1.5h-8.5A0.750.75 0 0 1 3 2.25Zm5.53 2.97 3.75 3.75a0.750.75 0 1 1-1.06 1.06L8.75 7.56v6.69a0.750.75 0 0 1-1.5 0V7.56L4.78 10.03a0.750.75 0 1 1-1.06-1.06l3.75-3.75a0.750.75 0 0 1 1.06 0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcMoveToTop16;
