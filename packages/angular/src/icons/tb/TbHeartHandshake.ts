import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-heart-handshake",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbHeartHandshake {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.5 12.57l-7.5 7.43l-7.5 -7.43a5 5 0 1 1 7.5 -6.57a5 5 0 1 1 7.5 6.57"}],["path",{"d":"M12 6l-3.29 3.29a1 1 0 0 0 0 1.41l0.54 0.54c0.69 0.69 1.81 0.69 2.5 0l1 -1a3.18 3.18 0 0 1 4.5 0l2.25 2.25"}],["path",{"d":"M12.5 15.5l2 2"}],["path",{"d":"M15 13l2 2"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbHeartHandshake;
