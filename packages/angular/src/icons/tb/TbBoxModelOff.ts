import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-box-model-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBoxModelOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 8h4v4m0 4h-8v-8"}],["path",{"d":"M8 4h10a2 2 0 0 1 2 2v10m-0.59 3.41a2 2 0 0 1 -1.41 0.59h-12a2 2 0 0 1 -2 -2v-12c0 -0.55 0.22 -1.04 0.58 -1.4"}],["path",{"d":"M16 16l3.3 3.3"}],["path",{"d":"M16 8l3.3 -3.3"}],["path",{"d":"M8 8l-3.3 -3.3"}],["path",{"d":"M8 16l-3.3 3.3"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBoxModelOff;
