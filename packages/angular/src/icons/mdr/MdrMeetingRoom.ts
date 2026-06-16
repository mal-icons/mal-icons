import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-meeting-room",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrMeetingRoom {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 19h-1V5c0-0.55-0.45-1-1-1h-4c0-0.55-0.45-1-1-1H6c-0.55 0-1 0.45-1 1v15H4c-0.55 0-1 0.45-1 1s0.45 1 1 1h9c0.55 0 1-0.45 1-1V6h3v14c0 0.550.45 1 1 1h2c0.55 0 1-0.45 1-1s-0.45-1-1-1zm-9-6c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrMeetingRoom;
