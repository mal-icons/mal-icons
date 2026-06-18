import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-dialpad-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxDialpadAlt {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["circle",{"cx":"12","cy":"6","r":"2"}],["circle",{"cx":"6","cy":"6","r":"2"}],["circle",{"cx":"18","cy":"6","r":"2"}],["circle",{"cx":"12","cy":"12","r":"2"}],["circle",{"cx":"6","cy":"12","r":"2"}],["circle",{"cx":"18","cy":"12","r":"2"}],["circle",{"cx":"12","cy":"18","r":"2"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxDialpadAlt;
