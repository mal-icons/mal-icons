import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-calendar-event",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsCalendarEvent {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11 6.5a0.50.5 0 0 1 0.5-0.5h1a0.50.5 0 0 1 0.50.5v1a0.50.5 0 0 1-0.50.5h-1a0.50.5 0 0 1-0.5-0.5z"}],["path",{"d":"M3.5 0a0.50.5 0 0 1 0.50.5V1h8V0.5a0.50.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V0.5a0.50.5 0 0 1 0.5-0.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsCalendarEvent;
