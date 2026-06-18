import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-user-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaUserSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16 5 C 12.14 5 9 8.14 9 12 C 9 14.41 10.23 16.55 12.09 17.81 C 8.53 19.34 6 22.88 6 27 L 8 27 C 8 22.57 11.57 19 16 19 C 20.43 19 24 22.57 24 27 L 26 27 C 26 22.88 23.47 19.34 19.91 17.81 C 21.77 16.55 23 14.41 23 12 C 23 8.14 19.86 5 16 5 Z M 16 7 C 18.77 7 21 9.23 21 12 C 21 14.77 18.77 17 16 17 C 13.23 17 11 14.77 11 12 C 11 9.23 13.23 7 16 7 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaUserSolid;
