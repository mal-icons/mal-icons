import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-math-symbols",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbMathSymbols {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 12l18 0"}],["path",{"d":"M12 3l0 18"}],["path",{"d":"M16.5 4.5l3 3"}],["path",{"d":"M19.5 4.5l-3 3"}],["path",{"d":"M6 4l0 4"}],["path",{"d":"M4 6l4 0"}],["path",{"d":"M18 16l0.01 0"}],["path",{"d":"M18 20l0.01 0"}],["path",{"d":"M4 18l4 0"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbMathSymbols;
