import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-ufo",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbUfo {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.95 9.01c3.02 0.74 5.05 2.12 5.05 3.71c0 2.37 -4.48 4.28 -10 4.28s-10 -1.91 -10 -4.28c0 -1.59 2.04 -2.98 5.07 -3.72"}],["path",{"d":"M7 9c0 1.11 2.24 2 5 2s5 -0.89 5 -2v-0.04c0 -2.74 -2.24 -4.96 -5 -4.96s-5 2.22 -5 4.97v0.04"}],["path",{"d":"M15 17l2 3"}],["path",{"d":"M8.5 17l-1.5 3"}],["path",{"d":"M12 14h0.01"}],["path",{"d":"M7 13h0.01"}],["path",{"d":"M17 13h0.01"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbUfo;
