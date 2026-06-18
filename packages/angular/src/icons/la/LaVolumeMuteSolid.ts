import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-volume-mute-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaVolumeMuteSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 15 4.59 L 13.28 6.28 L 8.56 11 L 4 11 L 4 21 L 8.56 21 L 13.28 25.72 L 15 27.41 Z M 13 9.44 L 13 22.56 L 9.72 19.28 L 9.41 19 L 6 19 L 6 13 L 9.41 13 L 9.72 12.72 Z M 20.22 11.78 L 18.78 13.22 L 21.56 16 L 18.78 18.78 L 20.22 20.22 L 23 17.44 L 25.78 20.22 L 27.22 18.78 L 24.44 16 L 27.22 13.22 L 25.78 11.78 L 23 14.56 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaVolumeMuteSolid;
