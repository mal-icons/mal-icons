import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-braille",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxBraille {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["circle",{"cx":"4","cy":"7","r":"2"}],["circle",{"cx":"9","cy":"12","r":"2"}],["circle",{"cx":"15","cy":"7","r":"2"}],["circle",{"cx":"15","cy":"12","r":"2"}],["circle",{"cx":"15","cy":"17","r":"2"}],["circle",{"cx":"20","cy":"7","r":"2"}],["circle",{"cx":"4","cy":"17","r":"2"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxBraille;
