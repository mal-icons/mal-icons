import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-summarize",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtSummarize {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 5H5v14h14v-9h-5V5zM8 17c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1zm0-4c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1zm0-4c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1z","opacity":".3"}],["circle",{"cx":"8","cy":"8","r":"1"}],["path",{"d":"M15 3H5c-1.1 0-1.990.9-1.99 2L3 19c0 1.10.89 2 1.99 2H19c1.1 0 2-0.9 2-2V9l-6-6zm4 16H5V5h9v5h5v9z"}],["circle",{"cx":"8","cy":"12","r":"1"}],["circle",{"cx":"8","cy":"16","r":"1"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtSummarize;
