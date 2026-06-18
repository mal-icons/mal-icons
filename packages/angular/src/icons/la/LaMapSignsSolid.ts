import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-map-signs-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaMapSignsSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 15 5 L 15 7 L 5 7 L 5 16 L 25.47 16 L 25.75 15.66 L 29.31 11.5 L 25.75 7.34 L 25.47 7 L 17 7 L 17 5 Z M 7 9 L 24.53 9 L 26.69 11.5 L 24.53 14 L 7 14 Z M 15 17 L 15 27 L 17 27 L 17 17 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaMapSignsSolid;
