import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-eye-table",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbEyeTable {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 18h-0.01"}],["path",{"d":"M12 18h-0.01"}],["path",{"d":"M16 18h-0.01"}],["path",{"d":"M4 3h16"}],["path",{"d":"M5 3v17a1 1 0 0 0 1 1h12a1 1 0 0 0 1 -1v-17"}],["path",{"d":"M14 7h-4"}],["path",{"d":"M9 15h1"}],["path",{"d":"M14 15h1"}],["path",{"d":"M12 11v-4"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbEyeTable;
