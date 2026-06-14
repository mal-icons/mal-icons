import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-move-to-start-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcMoveToStart16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.22 7.47a0.750.75 0 0 0 0 1.06l3.75 3.75a0.750.75 0 1 0 1.06-1.06L7.56 8.75h6.69a0.750.75 0 0 0 0-1.5H7.56l2.47-2.47a0.750.75 0 1 0-1.06-1.06L5.22 7.47ZM3 3.75a0.750.75 0 0 0-1.5 0v8.5a0.750.75 0 0 0 1.5 0v-8.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcMoveToStart16;
