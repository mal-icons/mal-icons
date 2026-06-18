import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-wood",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbWood {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6 5.5a6 2.5 0 1 0 12 0a6 2.5 0 1 0 -12 0"}],["path",{"d":"M18 5.5v4.63a1.42 1.42 0 0 1 1.68 2.18l-0.1 0.11l-1.59 1.59v4c0 1.61 -2.54 2.93 -5.72 3l-0.28 0c-3.31 0 -6 -1.34 -6 -3v-2l-1.59 -1.59a1.41 1.41 0 0 1 1.59 -2.29v-6.63"}],["path",{"d":"M10 12.5v1.5"}],["path",{"d":"M14 16v1"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbWood;
