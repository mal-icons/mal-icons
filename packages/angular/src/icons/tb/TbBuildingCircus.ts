import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-building-circus",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBuildingCircus {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 11h16"}],["path",{"d":"M12 6.5c0 1 -5 4.5 -8 4.5"}],["path",{"d":"M12 6.5c0 1 5 4.5 8 4.5"}],["path",{"d":"M6 11c-0.33 5.33 -1 8.67 -2 10h4c1 0 4 -4 4 -9v-1"}],["path",{"d":"M18 11c0.33 5.33 1 8.67 2 10h-4c-1 0 -4 -4 -4 -9v-1"}],["path",{"d":"M12 7v-4l2 1h-2"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBuildingCircus;
