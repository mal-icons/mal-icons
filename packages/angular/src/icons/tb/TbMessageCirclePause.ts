import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-message-circle-pause",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbMessageCirclePause {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.99 19.93a9.93 9.93 0 0 1 -5.29 -0.93l-4.7 1l1.3 -3.9c-2.32 -3.44 -1.43 -7.87 2.1 -10.37c3.53 -2.5 8.59 -2.3 11.85 0.48c2.13 1.82 3.06 4.37 2.69 6.82"}],["path",{"d":"M17 17v5"}],["path",{"d":"M21 17v5"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbMessageCirclePause;
