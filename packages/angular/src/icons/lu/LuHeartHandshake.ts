import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-heart-handshake",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuHeartHandshake {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.41 14.41C21 12.83 22 11.5 22 9.5a5.5 5.5 0 0 0-9.59-3.680.60.6 0 0 1-0.820A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.54 5.36a2 2 0 0 0 2.880.05 2.12 2.12 0 0 00-3 2.12 2.12 0 1 0 3-3 2.12 2.12 0 0 0 3 0 2 2 0 0 0 0-2.83l-1.88-1.88a2.41 2.41 0 0 0-3.41 0l-1.71 1.71a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l2.82-2.76"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuHeartHandshake;
