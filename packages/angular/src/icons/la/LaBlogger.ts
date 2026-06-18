import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-blogger",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaBlogger {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 5 5 L 5 27 L 27 27 L 27 5 L 5 5 z M 7 7 L 25 7 L 25 25 L 7 25 L 7 7 z M 15 10 C 13 10 13.03 10.02 12.4 10.27 C 11.23 10.74 10.39 11.72 10.09 12.98 C 10.04 13.21 10.02 13.59 10.01 15.76 C 9.99 18.47 10.01 18.87 10.18 19.41 C 10.6 20.74 11.79 21.72 12.97 21.94 C 13.37 22.01 18.26 22.03 18.75 21.96 C 19.63 21.84 20.3 21.49 20.94 20.83 C 21.41 20.36 21.7 19.85 21.89 19.17 C 22.03 18.7 22.02 15.35 21.96 15.11 C 21.91 14.9 21.79 14.69 21.63 14.61 C 21.58 14.59 21.28 14.56 20.96 14.54 C 20.42 14.52 20.36 14.51 20.19 14.4 C 19.93 14.25 19.85 14.07 19.85 13.62 C 19.85 12.74 19.48 11.91 18.75 11.17 C 18.23 10.64 17.66 10.28 16.99 10.08 C 16.84 10.04 16.19 10 15 10 z M 13.77 13 L 16.06 13 C 16.49 13 16.83 13.34 16.83 13.77 C 16.83 14.19 16.49 14.54 16.06 14.54 L 13.77 14.54 C 13.34 14.54 13 14.19 13 13.77 C 13 13.34 13.34 13 13.77 13 z M 13.77 17.46 L 18.04 17.46 C 18.47 17.46 18.81 17.81 18.81 18.23 C 18.81 18.66 18.47 19 18.04 19 L 13.77 19 C 13.34 19 13 18.66 13 18.23 C 13 17.81 13.34 17.46 13.77 17.46 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaBlogger;
