import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-sort-desc-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcSortDesc24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.5 16.44V6.75a0.750.75 0 0 0-1.5 0v9.69l-2.22-2.22a0.750.75 0 1 0-1.06 1.06l3.5 3.5a0.750.75 0 0 0 1.06 0l3.5-3.5a0.750.75 0 1 0-1.06-1.06l-2.22 2.22ZM2 7.25a0.750.75 0 0 1 0.75-0.75h9.5a0.750.75 0 0 1 0 1.5h-9.5A0.750.75 0 0 1 2 7.25Zm0 5a0.750.75 0 0 1 0.75-0.75h5.5a0.750.75 0 0 1 0 1.5h-5.5a0.750.75 0 0 1-0.75-0.75Zm0 5a0.750.75 0 0 1 0.75-0.75h3.5a0.750.75 0 0 1 0 1.5h-3.5a0.750.75 0 0 1-0.75-0.75Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcSortDesc24;
