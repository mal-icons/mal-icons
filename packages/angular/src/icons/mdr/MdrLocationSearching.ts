import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-location-searching",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrLocationSearching {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20.94 11A8.99 8.99 0 0 0 13 3.06V2c0-0.55-0.45-1-1-1s-1 0.45-1 1v1.06A8.99 8.99 0 0 0 3.06 11H2c-0.55 0-1 0.45-1 1s0.45 1 1 1h1.06A8.99 8.99 0 0 0 11 20.94V22c0 0.550.45 1 1 1s1-0.45 1-1v-1.06A8.99 8.99 0 0 0 20.94 13H22c0.55 0 1-0.45 1-1s-0.45-1-1-1h-1.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrLocationSearching;
