import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-camera-retro-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaCameraRetroSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 11.5 6 L 11.19 6.41 L 10 8 L 9 8 L 9 7 L 5 7 L 5 8 L 3 8 L 3 26 L 29 26 L 29 8 L 22 8 L 20.81 6.41 L 20.5 6 Z M 12.5 8 L 19.5 8 L 20.69 9.59 L 21 10 L 27 10 L 27 14 L 21.19 14 C 20.14 12.21 18.21 11 16 11 C 13.79 11 11.86 12.21 10.81 14 L 5 14 L 5 10 L 11 10 L 11.31 9.59 Z M 23 11 L 23 13 L 25 13 L 25 11 Z M 16 13 C 18.22 13 20 14.78 20 17 C 20 19.22 18.22 21 16 21 C 13.78 21 12 19.22 12 17 C 12 14.78 13.78 13 16 13 Z M 5 16 L 10.09 16 C 10.04 16.32 10 16.66 10 17 C 10 20.3 12.7 23 16 23 C 19.3 23 22 20.3 22 17 C 22 16.66 21.96 16.32 21.91 16 L 27 16 L 27 24 L 5 24 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaCameraRetroSolid;
