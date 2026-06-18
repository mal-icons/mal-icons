import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-volume-down-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaVolumeDownSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 15 4.59 L 13.28 6.28 L 8.56 11 L 4 11 L 4 21 L 8.56 21 L 13.28 25.72 L 15 27.41 Z M 13 9.44 L 13 22.56 L 9.72 19.28 L 9.41 19 L 6 19 L 6 13 L 9.41 13 L 9.72 12.72 Z M 18.5 12.03 L 17.06 13.47 C 17.64 14.16 18 15.03 18 16 C 18 16.97 17.64 17.84 17.06 18.53 L 18.5 19.97 C 19.44 18.91 20 17.52 20 16 C 20 14.48 19.44 13.09 18.5 12.03 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaVolumeDownSolid;
