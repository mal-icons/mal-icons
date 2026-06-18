import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-home-eco",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbHomeEco {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 11l-8 -8l-9 9h2v7a2 2 0 0 0 2 2h5"}],["path",{"d":"M9 21v-6a2 2 0 0 1 2 -2h2c0.33 0 0.63 0.08 0.9 0.22"}],["path",{"d":"M16 22s0 -2 3 -4"}],["path",{"d":"M19 21a3 3 0 0 1 0 -6h3v3a3 3 0 0 1 -3 3"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbHomeEco;
