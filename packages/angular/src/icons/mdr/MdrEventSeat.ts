import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-event-seat",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrEventSeat {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.5 21c0.83 0 1.5-0.67 1.5-1.5V18h10v1.5c0 0.830.67 1.5 1.5 1.5s1.5-0.67 1.5-1.5V17c0-1.1-0.9-2-2-2H6c-1.1 0-2 0.9-2 2v2.5c0 0.830.67 1.5 1.5 1.5zM20 10h1c0.55 0 1 0.45 1 1v1c0 0.55-0.45 1-1 1h-1c-0.55 0-1-0.45-1-1v-1c0-0.550.45-1 1-1zM3 10h1c0.55 0 1 0.45 1 1v1c0 0.55-0.45 1-1 1H3c-0.55 0-1-0.45-1-1v-1c0-0.550.45-1 1-1zm14 3H7V5c0-1.10.9-2 2-2h6c1.1 0 2 0.9 2 2v8z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrEventSeat;
