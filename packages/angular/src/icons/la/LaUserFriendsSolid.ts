import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-user-friends-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaUserFriendsSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 9 7 C 5.7 7 3 9.7 3 13 C 3 14.98 3.98 16.75 5.47 17.84 C 2.83 19.15 1 21.86 1 25 L 3 25 C 3 21.68 5.68 19 9 19 C 12.32 19 15 21.68 15 25 L 17 25 C 17 21.68 19.68 19 23 19 C 26.32 19 29 21.68 29 25 L 31 25 C 31 21.86 29.17 19.15 26.53 17.84 C 28.02 16.75 29 14.98 29 13 C 29 9.7 26.3 7 23 7 C 19.7 7 17 9.7 17 13 C 17 14.98 17.98 16.75 19.47 17.84 C 18.01 18.57 16.79 19.71 16 21.13 C 15.21 19.71 13.99 18.57 12.53 17.84 C 14.02 16.75 15 14.98 15 13 C 15 9.7 12.3 7 9 7 Z M 9 9 C 11.22 9 13 10.78 13 13 C 13 15.22 11.22 17 9 17 C 6.78 17 5 15.22 5 13 C 5 10.78 6.78 9 9 9 Z M 23 9 C 25.22 9 27 10.78 27 13 C 27 15.22 25.22 17 23 17 C 20.78 17 19 15.22 19 13 C 19 10.78 20.78 9 23 9 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaUserFriendsSolid;
