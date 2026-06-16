import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-table-rows",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrTableRows {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 8H5c-1.1 0-2-0.9-2-2s0.9-2 2-2h14c1.1 0 2 0.9 2 2s-0.9 2-2 2zm0 2H5c-1.1 0-2 0.9-2 2s0.9 2 2 2h14c1.1 0 2-0.9 2-2s-0.9-2-2-2zm0 6H5c-1.1 0-2 0.9-2 2s0.9 2 2 2h14c1.1 0 2-0.9 2-2s-0.9-2-2-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrTableRows;
