import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-gitlab",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaGitlab {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 8.38 1.97 L 4.08 13.45 L 3.84 14.11 L 1.8 19.54 L 16 29.88 L 30.2 19.54 L 28.16 14.11 L 23.61 1.97 L 19.88 13.45 L 12.12 13.45 Z M 8.25 8.03 L 10.02 13.45 L 6.21 13.45 Z M 23.75 8.03 L 25.79 13.45 L 21.98 13.45 Z M 5.46 15.45 L 10.66 15.45 L 14.09 26.02 L 4.2 18.82 Z M 12.77 15.45 L 19.23 15.45 L 16 25.4 Z M 21.34 15.45 L 26.53 15.45 L 27.8 18.82 L 17.9 26.02 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaGitlab;
