import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-bathroom",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtBathroom {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 20h16V4H4v16zm5-2c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1zm0-3c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1zm3 3c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1zm0-3c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1zm3 3c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1zm0-3c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1zm-8-4c0-2.76 2.24-5 5-5s5 2.24 5 5v1H7v-1z","opacity":".3"}],["circle",{"cx":"15","cy":"14","r":"1"}],["circle",{"cx":"12","cy":"14","r":"1"}],["circle",{"cx":"15","cy":"17","r":"1"}],["path",{"d":"M20 2H4c-1.1 0-2 0.9-2 2v16c0 1.10.9 2 2 2h16c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2-2-2zm0 18H4V4h16v16z"}],["path",{"d":"M17 11c0-2.76-2.24-5-5-5s-5 2.24-5 5v1h10v-1zm-8.46-0.5c0.24-1.69 1.7-3 3.46-3s3.22 1.31 3.47 3H8.54z"}],["circle",{"cx":"9","cy":"17","r":"1"}],["circle",{"cx":"9","cy":"14","r":"1"}],["circle",{"cx":"12","cy":"17","r":"1"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtBathroom;
