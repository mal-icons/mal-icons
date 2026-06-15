import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-heart-filled",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxHeartFilled {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M1.35 4.91C1.35 2.94 2.94 1.35 4.89 1.35C6.26 1.35 6.86 1.92 7.5 2.94C8.14 1.92 8.74 1.35 10.11 1.35C12.06 1.35 13.65 2.94 13.65 4.91C13.65 6.74 12.6 8.51 11.4 9.97C10.26 11.36 8.92 12.55 8.01 13.37C7.95 13.42 7.89 13.47 7.83 13.52C7.64 13.69 7.36 13.69 7.17 13.52C7.11 13.47 7.05 13.42 6.99 13.37C6.08 12.55 4.74 11.36 3.6 9.97C2.4 8.51 1.35 6.74 1.35 4.91Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxHeartFilled;
