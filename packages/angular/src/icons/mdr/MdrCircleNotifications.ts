import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-circle-notifications",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrCircleNotifications {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16.5c-0.83 0-1.5-0.67-1.5-1.5h3c0 0.83-0.67 1.5-1.5 1.5zm4-2.5H8c-0.55 0-1-0.45-1-1s0.45-1 1-1v-3c0-1.86 1.28-3.41 3-3.86V6.5c0-0.550.45-1 1-1s1 0.45 1 1v0.64c1.720.45 3 2 3 3.86v3c0.55 0 1 0.45 1 1s-0.45 1-1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrCircleNotifications;
