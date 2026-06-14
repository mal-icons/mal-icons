import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-filter-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcFilter16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0.75 3h14.5a0.750.75 0 0 1 0 1.5H0.75a0.750.75 0 0 1 0-1.5ZM3 7.75A0.750.75 0 0 1 3.75 7h8.5a0.750.75 0 0 1 0 1.5h-8.5A0.750.75 0 0 1 3 7.75Zm3 4a0.750.75 0 0 1 0.75-0.75h2.5a0.750.75 0 0 1 0 1.5h-2.5a0.750.75 0 0 1-0.75-0.75Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcFilter16;
