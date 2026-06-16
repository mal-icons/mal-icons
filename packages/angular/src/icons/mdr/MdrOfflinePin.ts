import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-offline-pin",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrOfflinePin {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4 16H8c-0.55 0-1-0.45-1-1s0.45-1 1-1h8c0.55 0 1 0.45 1 1s-0.45 1-1 1zm-6.41-4.71L7.7 11.4a0.980.98 0 0 1 0-1.40.980.98 0 0 1 1.4 0l1.2 1.2 4.6-4.6a0.980.98 0 0 1 1.4 0c0.390.390.39 1.01 0 1.4l-5.29 5.29c-0.390.39-1.030.39-1.42 0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrOfflinePin;
