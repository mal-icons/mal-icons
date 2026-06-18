import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-prism-light",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbPrismLight {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.73 19h11.54a1 1 0 0 0 0.87 -1.5l-5.77 -10a1 1 0 0 0 -1.73 0l-5.77 10a1 1 0 0 0 0.87 1.5"}],["path",{"d":"M2 13h4.45"}],["path",{"d":"M18 5l-4.5 6"}],["path",{"d":"M22 9l-7.75 3.25"}],["path",{"d":"M22 15l-7 -1.5"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbPrismLight;
