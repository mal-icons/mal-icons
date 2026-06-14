import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-calendar",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiCalendar {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 6.18v-0.18c0-1.66-1.34-3-3-3s-3 1.34-3 3h-2c0-1.66-1.34-3-3-3s-3 1.34-3 3v0.18c-1.160.42-2 1.51-2 2.82v9c0 1.65 1.35 3 3 3h12c1.65 0 3-1.35 3-3v-9c0-1.3-0.84-2.4-2-2.82zm-4-0.18c0-0.550.45-1 1-1s1 0.45 1 1v2c0 0.55-0.45 1-1 1s-1-0.45-1-1v-2zm-8 0c0-0.550.45-1 1-1s1 0.45 1 1v2c0 0.55-0.45 1-1 1s-1-0.45-1-1v-2zm12 12c0 0.55-0.45 1-1 1h-12c-0.55 0-1-0.45-1-1v-6h14v6z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiCalendar;
