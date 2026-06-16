import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-login",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrLogin {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.3 7.7a0.980.98 0 0 0 0 1.4l1.9 1.9H3c-0.55 0-1 0.45-1 1s0.45 1 1 1h9.2l-1.9 1.9a0.980.98 0 0 0 0 1.4c0.390.39 1.010.39 1.4 0l3.59-3.59a11 0 0 0 0-1.41L11.7 7.7a0.980.98 0 0 0-1.4 0zM20 19h-7c-0.55 0-1 0.45-1 1s0.45 1 1 1h7c1.1 0 2-0.9 2-2V5c0-1.1-0.9-2-2-2h-7c-0.55 0-1 0.45-1 1s0.45 1 1 1h7v14z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrLogin;
