import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-git-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaGitAlt {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16 2 C 15.5 2 15 2.18 14.63 2.56 L 11.81 5.41 C 11.66 5.49 11.53 5.61 11.44 5.75 L 2.56 14.63 C 1.8 15.38 1.8 16.62 2.56 17.38 L 14.63 29.44 C 15.38 30.19 16.62 30.19 17.38 29.44 L 29.44 17.38 C 30.2 16.62 30.2 15.38 29.44 14.63 L 17.38 2.56 C 17 2.18 16.5 2 16 2 Z M 16 4.03 L 27.97 16 L 16 27.97 L 4.03 16 L 12.31 7.72 L 14.06 9.47 C 14.02 9.64 14 9.82 14 10 C 14 10.74 14.4 11.37 15 11.72 L 15 20.28 C 14.4 20.63 14 21.26 14 22 C 14 23.11 14.89 24 16 24 C 17.11 24 18 23.11 18 22 C 18 21.26 17.6 20.63 17 20.28 L 17 12.44 L 20.06 15.5 C 20.02 15.66 20 15.83 20 16 C 20 17.11 20.89 18 22 18 C 23.11 18 24 17.11 24 16 C 24 14.89 23.11 14 22 14 C 21.83 14 21.66 14.02 21.5 14.06 L 17.94 10.5 C 17.98 10.34 18 10.17 18 10 C 18 8.89 17.11 8 16 8 C 15.82 8 15.64 8.02 15.47 8.06 L 13.72 6.31 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaGitAlt;
