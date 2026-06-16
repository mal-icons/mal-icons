import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-local-car-wash",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsLocalCarWash {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.58 7H5.43L3 14v9h3v-2h12v2h3v-9l-2.42-7zM6.5 18c-0.83 0-1.5-0.67-1.5-1.5S5.67 15 6.5 15s1.50.67 1.5 1.5S7.33 18 6.5 18zm11 0c-0.83 0-1.5-0.67-1.5-1.5s0.67-1.5 1.5-1.5 1.50.67 1.5 1.5-0.67 1.5-1.5 1.5zM5 13l1.5-4.5h11L19 13H5zm12-8c0.83 0 1.5-0.67 1.5-1.5 0-1-1.5-2.7-1.5-2.7s-1.5 1.7-1.5 2.7c0 0.830.67 1.5 1.5 1.5zm-5 0c0.83 0 1.5-0.67 1.5-1.5 0-1-1.5-2.7-1.5-2.7s-1.5 1.7-1.5 2.7c0 0.830.67 1.5 1.5 1.5zM7 5c0.83 0 1.5-0.67 1.5-1.5C8.5 2.5 7 0.8 7 0.8S5.5 2.5 5.5 3.5C5.5 4.33 6.17 5 7 5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsLocalCarWash;
