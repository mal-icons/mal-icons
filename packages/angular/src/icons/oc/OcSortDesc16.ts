import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-sort-desc-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcSortDesc16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 4.25a0.750.75 0 0 1 0.75-0.75h7.5a0.750.75 0 0 1 0 1.5H0.75A0.750.75 0 0 1 0 4.25Zm0 4a0.750.75 0 0 1 0.75-0.75h4.5a0.750.75 0 0 1 0 1.5H0.75A0.750.75 0 0 1 0 8.25Zm0 4a0.750.75 0 0 1 0.75-0.75h2.5a0.750.75 0 0 1 0 1.5H0.75a0.750.75 0 0 1-0.75-0.75ZM13.5 10h2.25a0.250.25 0 0 1 0.180.43l-3 3a0.250.25 0 0 1-0.35 0l-3-3A0.250.25 0 0 1 9.75 10H12V3.75a0.750.75 0 0 1 1.5 0V10Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcSortDesc16;
