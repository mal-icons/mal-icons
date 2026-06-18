import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-snowflake",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandSnowflake {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 21v-5.5l4.5 2.5"}],["path",{"d":"M10 21v-5.5l-4.5 2.5"}],["path",{"d":"M3.5 14.5l4.5 -2.5l-4.5 -2.5"}],["path",{"d":"M20.5 9.5l-4.5 2.5l4.5 2.5"}],["path",{"d":"M10 3v5.5l-4.5 -2.5"}],["path",{"d":"M14 3v5.5l4.5 -2.5"}],["path",{"d":"M12 11l1 1l-1 1l-1 -1l1 -1"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandSnowflake;
