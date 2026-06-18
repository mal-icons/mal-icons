import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-map-cog",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbMapCog {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v8"}],["path",{"d":"M9 4v13"}],["path",{"d":"M15 7v6.5"}],["path",{"d":"M17 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M19 15.5v1.5"}],["path",{"d":"M19 21v1.5"}],["path",{"d":"M22.03 17.25l-1.3 0.75"}],["path",{"d":"M17.27 20l-1.3 0.75"}],["path",{"d":"M15.97 17.25l1.3 0.75"}],["path",{"d":"M20.73 20l1.3 0.75"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbMapCog;
