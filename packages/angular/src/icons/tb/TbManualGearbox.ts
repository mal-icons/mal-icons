import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-manual-gearbox",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbManualGearbox {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M10 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M17 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M3 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M10 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M5 8l0 8"}],["path",{"d":"M12 8l0 8"}],["path",{"d":"M19 8v2a2 2 0 0 1 -2 2h-12"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbManualGearbox;
