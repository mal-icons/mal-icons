import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-child-friendly",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrChildFriendly {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13 3.08V10h8a8 8 0 0 0-6.86-7.92c-0.6-0.09-1.140.39-1.14 1zm6.32 12.81A7.95 7.95 0 0 0 21 11H6.44l-0.68-1.43a0.990.99 0 0 0-0.9-0.57H3c-0.55 0-1 0.45-1 1s0.45 1 1 1h1.22s1.89 4.07 2.12 4.42a3.51 3.51 0 0 0-1.74 3.94c0.3 1.26 1.34 2.27 2.6 2.55 2.10.46 3.98-0.96 4.25-2.91h2.08a3.5 3.5 0 0 0 4.22 2.92 3.49 3.49 0 0 0 2.63-2.53c0.35-1.39-0.14-2.68-1.06-3.5zM8 20c-0.83 0-1.5-0.67-1.5-1.5S7.17 17 8 17s1.50.67 1.5 1.5S8.83 20 8 20zm9 0c-0.83 0-1.5-0.67-1.5-1.5S16.17 17 17 17s1.50.67 1.5 1.5S17.83 20 17 20z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrChildFriendly;
