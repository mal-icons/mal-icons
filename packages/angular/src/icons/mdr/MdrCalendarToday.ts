import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-calendar-today",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrCalendarToday {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 3h-1V2c0-0.55-0.45-1-1-1s-1 0.45-1 1v1H7V2c0-0.55-0.45-1-1-1s-1 0.45-1 1v1H4c-1.1 0-2 0.9-2 2v16c0 1.10.9 2 2 2h16c1.1 0 2-0.9 2-2V5c0-1.1-0.9-2-2-2zm-1 18H5c-0.55 0-1-0.45-1-1V8h16v12c0 0.55-0.45 1-1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrCalendarToday;
