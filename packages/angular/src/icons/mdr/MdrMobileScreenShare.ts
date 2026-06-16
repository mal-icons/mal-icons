import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-mobile-screen-share",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrMobileScreenShare {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17 1H7c-1.1 0-1.990.9-1.99 2v18c0 1.10.89 2 1.99 2h10c1.1 0 2-0.9 2-2V3c0-1.1-0.9-2-2-2zm0 18H7V5h10v14zm-4.2-5.78v1.75l2.81-2.62c0.21-0.20.21-0.53 0-0.73L12.8 9v1.7c-3.110.43-4.35 2.56-4.8 4.7 1.11-1.5 2.58-2.18 4.8-2.18z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrMobileScreenShare;
