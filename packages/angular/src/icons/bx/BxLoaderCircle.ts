import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-loader-circle",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxLoaderCircle {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["circle",{"cx":"12","cy":"20","r":"2"}],["circle",{"cx":"12","cy":"4","r":"2"}],["circle",{"cx":"6.34","cy":"17.66","r":"2"}],["circle",{"cx":"17.66","cy":"6.34","r":"2"}],["circle",{"cx":"4","cy":"12","r":"2"}],["circle",{"cx":"20","cy":"12","r":"2"}],["circle",{"cx":"6.34","cy":"6.34","r":"2"}],["circle",{"cx":"17.66","cy":"17.66","r":"2"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxLoaderCircle;
