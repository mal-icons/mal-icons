import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-loader",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbLoader {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 6l0 -3"}],["path",{"d":"M16.25 7.75l2.15 -2.15"}],["path",{"d":"M18 12l3 0"}],["path",{"d":"M16.25 16.25l2.15 2.15"}],["path",{"d":"M12 18l0 3"}],["path",{"d":"M7.75 16.25l-2.15 2.15"}],["path",{"d":"M6 12l-3 0"}],["path",{"d":"M7.75 7.75l-2.15 -2.15"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbLoader;
