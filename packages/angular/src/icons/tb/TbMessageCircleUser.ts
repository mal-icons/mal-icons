import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-message-circle-user",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbMessageCircleUser {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M22 22a2 2 0 0 0 -2 -2h-2a2 2 0 0 0 -2 2"}],["path",{"d":"M12.45 19.97a9.9 9.9 0 0 1 -4.75 -0.97l-4.7 1l1.3 -3.9c-2.32 -3.44 -1.43 -7.87 2.1 -10.37c3.53 -2.5 8.59 -2.3 11.85 0.48c1.67 1.42 2.6 3.29 2.75 5.22"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbMessageCircleUser;
