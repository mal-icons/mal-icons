import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-surrealdb",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiSurrealdb {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m12 6.31 5.71 3.17v-1.27L12 5.05c-0.850.47-4.96 2.74-5.71 3.160.70.39 8.09 4.47 12.57 6.95v1.26L12 20.21c-1.71-0.94-5.15-2.84-6.86-3.79v-3.79L12 16.42l1.14-0.63-9.15-5.05v6.32L12 21.47l8-4.42v-2.53L8.57 8.21Zm-80.63v2.53l11.43 6.32-3.43 1.9-5.71-3.16v1.27l5.71 3.16c0.85-0.47 4.96-2.74 5.71-3.16-0.7-0.39-8.08-4.47-12.57-6.95V7.58L12 3.79c1.710.95 5.15 2.85 6.86 3.79v3.79L12 7.58l-1.140.63L20 13.26V6.95L12 2.53c-0.790.44-7.42 4.1-8 4.42zM12 0 1.71 5.69v12.63L12 24l10.29-5.68V5.69Zm9.14 17.68L12 22.74l-9.14-5.05V6.32L12 1.26l9.14 5.05z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiSurrealdb;
