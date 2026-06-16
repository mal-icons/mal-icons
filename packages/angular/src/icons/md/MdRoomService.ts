import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-room-service",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdRoomService {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.98 17H2v2h20v-2zM21 16c-0.27-4.07-3.25-7.4-7.16-8.21A2.01 2.01 0 0 0 12 5a2.01 2.01 0 0 0-1.84 2.79C6.25 8.6 3.27 11.93 3 16h18zm-9-6.42c2.95 0 5.47 1.83 6.5 4.41h-13A7 7 0 0 1 12 9.58z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdRoomService;
