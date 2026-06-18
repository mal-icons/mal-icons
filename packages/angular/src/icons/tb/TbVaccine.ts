import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-vaccine",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbVaccine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17 3l4 4"}],["path",{"d":"M19 5l-4.5 4.5"}],["path",{"d":"M11.5 6.5l6 6"}],["path",{"d":"M16.5 11.5l-6.5 6.5h-4v-4l6.5 -6.5"}],["path",{"d":"M7.5 12.5l1.5 1.5"}],["path",{"d":"M10.5 9.5l1.5 1.5"}],["path",{"d":"M3 21l3 -3"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbVaccine;
