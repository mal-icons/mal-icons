import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-car-door",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbCarDoor {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13 14h2"}],["path",{"d":"M19 10h-16"}],["path",{"d":"M6.7 3.45l-3.7 5.55v3.08a1 1 0 0 0 0.85 1a6 6 0 0 1 5.15 5.92v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1 -1v-16a1 1 0 0 0 -1 -1h-10.46a1 1 0 0 0 -0.84 0.45"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbCarDoor;
