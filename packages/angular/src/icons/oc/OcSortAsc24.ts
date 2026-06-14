import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-sort-asc-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcSortAsc24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.5 17.25a0.750.75 0 0 1-1.5 0V7.56l-2.22 2.22a0.750.75 0 1 1-1.06-1.06l3.5-3.5a0.750.75 0 0 1 1.06 0l3.5 3.5a0.750.75 0 0 1-1.06 1.06L18.5 7.56v9.69Zm-15.750.25a0.750.75 0 0 1 0-1.5h9.5a0.750.75 0 0 1 0 1.5h-9.5Zm0-5a0.750.75 0 0 1 0-1.5h5.5a0.750.75 0 0 1 0 1.5h-5.5Zm0-5a0.750.75 0 0 1 0-1.5h3.5a0.750.75 0 0 1 0 1.5h-3.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcSortAsc24;
