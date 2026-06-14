import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-candy-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuCandyOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10 10v7.9"}],["path",{"d":"M11.8 6.15a5 5 0 0 1 6.05 6.05"}],["path",{"d":"M14 6.1v2.24"}],["path",{"d":"m15.5 15.57-0.960.96a5 5 0 0 1-7.07 0 5 5 0 0 1 0-7.07l0.96-0.96"}],["path",{"d":"M16 7V3a1 1 0 0 1 1.71-0.71 2.5 2.5 0 0 0 2.150.72 1 1 0 0 1 1.13 1.13 2.5 2.5 0 0 0 0.72 2.15A1 1 0 0 1 21 8h-4"}],["path",{"d":"m2 2 20 20"}],["path",{"d":"M8 17v4a1 1 0 0 1-1.710.71 2.5 2.5 0 0 0-2.15-0.72 1 1 0 0 1-1.13-1.13 2.5 2.5 0 0 0-0.72-2.15A1 1 0 0 1 3 16h4"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuCandyOff;
