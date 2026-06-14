import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-move-to-end-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcMoveToEnd16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"m10.78 8.53-3.75 3.75a0.750.75 0 1 1-1.06-1.06l2.47-2.47H1.75a0.750.75 0 0 1 0-1.5h6.69L5.97 4.78a0.750.75 0 1 1 1.06-1.06l3.75 3.75a0.750.75 0 0 1 0 1.06ZM13 12.25v-8.5a0.750.75 0 0 1 1.5 0v8.5a0.750.75 0 0 1-1.5 0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcMoveToEnd16;
