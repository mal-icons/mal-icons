import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-user-circle-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaUserCircleSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16 3 C 8.83 3 3 8.83 3 16 C 3 23.17 8.83 29 16 29 C 23.17 29 29 23.17 29 16 C 29 8.83 23.17 3 16 3 Z M 16 5 C 22.09 5 27 9.91 27 16 C 27 22.09 22.09 27 16 27 C 9.91 27 5 22.09 5 16 C 5 9.91 9.91 5 16 5 Z M 16 8 C 13.25 8 11 10.25 11 13 C 11 14.52 11.71 15.86 12.78 16.78 C 10.53 17.95 9 20.3 9 23 L 11 23 C 11 20.23 13.23 18 16 18 C 18.77 18 21 20.23 21 23 L 23 23 C 23 20.3 21.47 17.95 19.22 16.78 C 20.29 15.86 21 14.52 21 13 C 21 10.25 18.75 8 16 8 Z M 16 10 C 17.67 10 19 11.33 19 13 C 19 14.67 17.67 16 16 16 C 14.33 16 13 14.67 13 13 C 13 11.33 14.33 10 16 10 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaUserCircleSolid;
