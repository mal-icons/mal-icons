import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fi-volume-x",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FiVolumeX {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["polygon",{"points":"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}],["line",{"x1":"23","y1":"9","x2":"17","y2":"15"}],["line",{"x1":"17","y1":"9","x2":"23","y2":"15"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FiVolumeX;
