import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-paloaltonetworks",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiPaloaltonetworks {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m10.28 15.44 1.71 1.71-3.43 3.43-3.43-3.43 8.59-8.59-1.7-1.7 3.43-3.43 3.43 3.43-8.59 8.59zM0 12.02l3.43 3.43 8.59-8.59-3.43-3.43L0 12.02zm11.98 5.13 3.43 3.43L24 11.98l-3.43-3.43-8.59 8.59z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiPaloaltonetworks;
