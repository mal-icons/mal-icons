import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-statuspage",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiStatuspage {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.01 9.6a5.62 5.62 0 1 1 0 11.25 5.62 5.62 0 0 1 0-11.24zM0.15 8.72l3.02 3.57a0.640.64 0 0 0 0.910.07c4.89-4.38 10.97-4.38 15.84 0a0.640.64 0 0 0 0.92-0.07l3.01-3.57a0.650.65 0 0 0-0.07-0.91c-7.1-6.2-16.46-6.2-23.55 0a0.650.65 0 0 0-0.060.91z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiStatuspage;
