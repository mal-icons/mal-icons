import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-donut-large",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdDonutLarge {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13 5.08A7 7 0 0 1 18.92 11h3.03c-0.47-4.72-4.23-8.48-8.95-8.95v3.03zM18.92 13A7 7 0 0 1 13 18.92v3.03c4.72-0.47 8.48-4.23 8.95-8.95h-3.03zM11 18.92c-3.39-0.49-6-3.4-6-6.92s2.61-6.43 6-6.92V2.05c-5.050.5-9 4.76-9 9.95 0 5.19 3.95 9.45 9 9.95v-3.03z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdDonutLarge;
