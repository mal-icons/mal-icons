import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-settings-star",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbSettingsStar {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.33 19.68a1.72 1.72 0 0 0 -2.57 -1.07c-1.54 0.94 -3.31 -0.83 -2.37 -2.37a1.72 1.72 0 0 0 -1.06 -2.57c-1.76 -0.43 -1.76 -2.92 0 -3.35a1.72 1.72 0 0 0 1.07 -2.57c-0.94 -1.54 0.83 -3.31 2.37 -2.37c1 0.61 2.3 0.07 2.57 -1.06c0.43 -1.76 2.92 -1.76 3.35 0a1.72 1.72 0 0 0 2.57 1.07c1.54 -0.94 3.31 0.83 2.37 2.37a1.72 1.72 0 0 0 1.07 2.57a1.67 1.67 0 0 1 1.11 0.83"}],["path",{"d":"M14.89 11.2a3 3 0 1 0 -4.46 3.36"}],["path",{"d":"M17.8 20.82l-2.17 1.14a0.39 0.39 0 0 1 -0.57 -0.41l0.42 -2.41l-1.76 -1.71a0.39 0.39 0 0 1 0.22 -0.66l2.43 -0.35l1.09 -2.19a0.39 0.39 0 0 1 0.7 0l1.09 2.19l2.43 0.35a0.39 0.39 0 0 1 0.22 0.67l-1.76 1.71l0.41 2.41a0.39 0.39 0 0 1 -0.57 0.41l-2.17 -1.14"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbSettingsStar;
