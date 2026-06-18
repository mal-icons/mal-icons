import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-wondershare",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiWondershare {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.22 17.81 7.7 9.37l0.02-0.02c0.390.240.910.19 1.25-0.15l3.04-3.02 7.24 7.18c0.40.390.4 1.030.01 1.43l-3.04 3.02Zm-5.25-3.02-3.03 3.02L0 9.91l3.75-3.73 7.22 7.19a1 1 0 0 1 0 1.43ZM24 9.91l-3.72 3.73L16 9.37l0.02-0.02c0.390.240.90.19 1.24-0.15l3.01-3.01L24 9.91Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiWondershare;
