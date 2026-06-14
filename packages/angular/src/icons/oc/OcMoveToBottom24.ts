import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-move-to-bottom-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcMoveToBottom24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 21.25a0.750.75 0 0 1 0.75-0.75h14.5a0.750.75 0 0 1 0 1.5H4.75a0.750.75 0 0 1-0.75-0.75ZM5.22 9.97a0.750.75 0 0 1 1.06 0l4.97 4.97V2.75a0.750.75 0 0 1 1.5 0v12.19l4.97-4.97a0.750.75 0 1 1 1.06 1.06l-6.25 6.25a0.750.75 0 0 1-1.06 0l-6.25-6.25a0.750.75 0 0 1 0-1.06Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcMoveToBottom24;
