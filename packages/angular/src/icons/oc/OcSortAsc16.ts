import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-sort-asc-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcSortAsc16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"m12.93 2.57 3 3A0.250.25 0 0 1 15.75 6H13.5v6.75a0.750.75 0 0 1-1.5 0V6H9.75a0.250.25 0 0 1-0.18-0.43l3-3a0.250.25 0 0 1 0.35 0ZM0 12.25a0.750.75 0 0 1 0.75-0.75h7.5a0.750.75 0 0 1 0 1.5H0.75a0.750.75 0 0 1-0.75-0.75Zm0-4a0.750.75 0 0 1 0.75-0.75h4.5a0.750.75 0 0 1 0 1.5H0.75A0.750.75 0 0 1 0 8.25Zm0-4a0.750.75 0 0 1 0.75-0.75h2.5a0.750.75 0 0 1 0 1.5H0.75A0.750.75 0 0 1 0 4.25Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcSortAsc16;
