import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-solar-panel",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbSolarPanel {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.28 14h15.44a1 1 0 0 0 0.97 -1.24l-1.5 -6a1 1 0 0 0 -0.97 -0.76h-12.44a1 1 0 0 0 -0.97 0.76l-1.5 6a1 1 0 0 0 0.97 1.24"}],["path",{"d":"M4 10h16"}],["path",{"d":"M10 6l-1 8"}],["path",{"d":"M14 6l1 8"}],["path",{"d":"M12 14v4"}],["path",{"d":"M7 18h10"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbSolarPanel;
