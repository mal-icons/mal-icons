import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-sl-control-pause",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SlControlPause {
  readonly viewBox = "0 0 1024 1024";
  readonly nodes: NodeTuple[] = [["path",{"d":"M416.27 0H192.06c-17.66 0-32 14.32-32 32v960c0 17.66 14.34 32 32 32h224.21c17.68 0 32-14.34 32-32V32c0-17.68-14.32-32-32-32zm-32 960H224.06V64h160.21v896zM831.94 0H608.88c-17.68 0-32 14.32-32 32v960c0 17.66 14.32 32 32 32h223.06c17.68 0 32-14.34 32-32V32c0-17.68-14.3-32-32-32zm-32 960H640.88V64h159.06v896z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SlControlPause;
