import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-list-unordered-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcListUnordered24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.75 5.5h11.5a0.750.75 0 0 1 0 1.5H8.75a0.750.75 0 0 1 0-1.5Zm0 6h11.5a0.750.75 0 0 1 0 1.5H8.75a0.750.75 0 0 1 0-1.5Zm0 6h11.5a0.750.75 0 0 1 0 1.5H8.75a0.750.75 0 0 1 0-1.5ZM5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM4 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcListUnordered24;
