import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-gg-circle",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaGgCircle {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16 3 C 8.83 3 3 8.83 3 16 C 3 23.17 8.83 29 16 29 C 23.17 29 29 23.17 29 16 C 29 8.83 23.17 3 16 3 z M 16 5 C 22.07 5 27 9.94 27 16 C 27 22.07 22.07 27 16 27 C 9.94 27 5 22.07 5 16 C 5 9.94 9.94 5 16 5 z M 18.54 9.49 L 14.69 13.34 L 18.66 17.31 L 19.91 16.05 L 17.18 13.34 L 18.54 11.97 L 22.51 15.94 L 18.54 19.91 L 17.97 19.34 L 16.73 20.59 L 18.54 22.4 L 25 15.95 L 18.54 9.49 z M 13.46 9.6 L 7 16.05 L 13.46 22.51 L 17.31 18.65 L 13.34 14.68 L 12.09 15.94 L 14.82 18.65 L 13.45 20.02 L 9.49 16.05 L 13.45 12.09 L 14.02 12.66 L 15.27 11.41 L 13.46 9.6 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaGgCircle;
