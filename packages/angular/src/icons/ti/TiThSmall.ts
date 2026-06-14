import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-th-small",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiThSmall {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["circle",{"cx":"5","cy":"19","r":"2.5"}],["circle",{"cx":"5","cy":"12","r":"2.5"}],["circle",{"cx":"5","cy":"5","r":"2.5"}],["circle",{"cx":"12","cy":"19","r":"2.5"}],["circle",{"cx":"12","cy":"12","r":"2.5"}],["circle",{"cx":"12","cy":"5","r":"2.5"}],["circle",{"cx":"19","cy":"19","r":"2.5"}],["circle",{"cx":"19","cy":"12","r":"2.5"}],["circle",{"cx":"19","cy":"5","r":"2.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiThSmall;
