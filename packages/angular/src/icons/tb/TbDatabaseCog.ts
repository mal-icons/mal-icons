import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-database-cog",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbDatabaseCog {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 6c0 1.66 3.58 3 8 3s8 -1.34 8 -3s-3.58 -3 -8 -3s-8 1.34 -8 3"}],["path",{"d":"M4 6v6c0 1.66 3.58 3 8 3c0.21 0 0.42 0 0.63 -0.01"}],["path",{"d":"M20 11.5v-5.5"}],["path",{"d":"M4 12v6c0 1.66 3.58 3 8 3"}],["path",{"d":"M17 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M19 15.5v1.5"}],["path",{"d":"M19 21v1.5"}],["path",{"d":"M22.03 17.25l-1.3 0.75"}],["path",{"d":"M17.27 20l-1.3 0.75"}],["path",{"d":"M15.97 17.25l1.3 0.75"}],["path",{"d":"M20.73 20l1.3 0.75"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbDatabaseCog;
