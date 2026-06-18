import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-capsule",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxCapsule {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9 20.13a4.97 4.97 0 0 0 3.54-1.46l7.13-7.13a5.01 5.01 0 0 00-7.07C18.72 3.52 17.47 3 16.13 3s-2.590.52-3.53 1.46l-7.13 7.13a5.01 5.01 0 0 0 0 7.07 4.97 4.97 0 0 0 3.54 1.46zm5.01-14.25A2.98 2.98 0 0 1 16.13 5c0.8 0 1.560.31 2.120.88a3 3 0 0 1 0 4.24l-2.89 2.89L11.12 8.77l2.89-2.89zm-7.13 7.13 2.83-2.83 4.24 4.24-2.83 2.83c-1.13 1.13-3.11 1.13-4.240a3.01 3.01 0 0 1 0-4.24z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxCapsule;
