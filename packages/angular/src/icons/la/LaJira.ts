import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-jira",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaJira {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16.02 2.2 L 3.58 14.6 C 2.81 15.37 2.81 16.62 3.58 17.4 L 16.02 29.8 L 16.73 29.1 C 20.37 25.47 22.59 23.25 23.91 21.94 L 25.27 20.58 C 25.34 20.5 25.43 20.42 25.51 20.32 C 25.55 20.29 25.58 20.26 25.59 20.25 L 25.59 20.24 C 25.61 20.21 25.63 20.19 25.65 20.16 C 26.58 19.23 27.85 17.96 28.41 17.4 C 28.79 17.03 29 16.53 29 16 C 29 15.47 28.79 14.97 28.41 14.6 C 26.75 12.94 24.83 11.02 22.91 9.08 C 20.75 6.92 18.57 4.74 16.73 2.9 L 16.02 2.2 z M 16.02 5.02 C 17.7 6.7 19.6 8.6 21.49 10.5 C 23.41 12.42 25.33 14.34 26.99 16 C 25.63 17.35 24.68 18.3 24.03 18.99 C 23.9 19.1 23.77 19.23 23.64 19.35 C 23.42 19.57 23.2 19.79 23.15 19.83 L 23.17 19.85 C 21.93 21.09 19.56 23.45 16.02 26.98 L 4.99 16.02 L 16.02 5.02 z M 16.02 10.93 L 10.93 16 L 16.02 21.07 L 21.12 16 L 16.02 10.93 z M 16.02 13.75 L 18.28 16 L 16.02 18.25 L 13.76 16 L 16.02 13.75 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaJira;
