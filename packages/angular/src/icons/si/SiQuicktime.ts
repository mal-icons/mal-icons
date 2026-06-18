import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-quicktime",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiQuicktime {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 0a12 12 0 106.63 22l1.98 1.97h3.14l0.25-0.25v-3.15l-2-1.98A11.94 11.94 0 24 12 12 12 0 12 0m0 4.2a7.8 7.8 0 16.95 11.33l-5.25-5.26a2.4 2.4 0 10-3.4 3.4l5.27 5.26a7.76 7.76 0 1-3.570.87 7.8 7.8 0 10-15.6z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiQuicktime;
