import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-c-circle-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsCCircleFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.15 4.99c0.96 0 1.640.63 1.73 1.51h1.3v-0.09c-0.09-1.52-1.35-2.57-3.03-2.57-2.07 0-3.27 1.38-3.27 3.64v1.07c0 2.27 1.18 3.6 3.27 3.6 1.68 0 2.93-1.02 3.03-2.47v-0.09H9.88c-0.090.83-0.75 1.42-1.73 1.42-1.22 0-1.93-0.89-1.93-2.46v-1.06c0-1.580.72-2.5 1.93-2.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsCCircleFill;
