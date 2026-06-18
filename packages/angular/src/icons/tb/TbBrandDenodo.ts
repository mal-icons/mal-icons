import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-denodo",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandDenodo {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11 11h2v2h-2l0 -2"}],["path",{"d":"M3.63 15.63l1.73 -1l1 1.73l-1.73 1l-1 -1.73"}],["path",{"d":"M11 19h2v2h-2l0 -2"}],["path",{"d":"M18.63 14.63l1.73 1l-1 1.73l-1.73 -1l1 -1.73"}],["path",{"d":"M17.63 7.63l1.73 -1l1 1.73l-1.73 1l-1 -1.73"}],["path",{"d":"M11 3h2v2h-2l0 -2"}],["path",{"d":"M3.63 8.37l1 -1.73l1.73 1l-1 1.73l-1.73 -1"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandDenodo;
