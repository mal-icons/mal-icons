import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-speakap",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaSpeakap {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 15.39 3 C 8.56 3 3 8.59 3 15.46 C 3 22.2 8 29 19.17 29 C 21.98 29 25.77 27.92 25.93 27.88 L 28 27.28 L 26.29 25.97 C 25.66 25.49 24.95 24.9 24.2 24.22 C 26.49 21.9 27.79 18.77 27.79 15.46 C 27.79 8.59 22.23 3 15.39 3 z M 15.39 5 C 21.13 5 25.79 9.69 25.79 15.46 C 25.79 18.24 24.72 20.85 22.78 22.81 L 21.31 24.29 L 22.86 25.7 C 23.12 25.94 23.38 26.17 23.64 26.39 C 22.35 26.68 20.59 27 19.17 27 C 8.71 27 5 20.78 5 15.46 C 5 9.69 9.66 5 15.39 5 z M 16.25 9 C 13.67 8.95 11.52 10.4 11.48 12.94 C 11.47 13.5 11.49 14.75 12.92 15.64 C 14.62 16.7 17.19 16.7 17.16 18.21 C 17.14 19.27 15.87 19.49 15.26 19.48 C 15.11 19.48 13.77 19.46 12.91 18.27 L 10.95 20.36 C 12.33 21.7 13.85 21.98 15.06 22 C 15.56 22.01 19.81 22.01 19.88 18 C 19.89 17.22 19.78 16.05 18.46 15.21 C 16.77 14.15 14.27 14.25 14.3 12.77 C 14.32 11.62 15.83 11.51 16.15 11.52 C 16.17 11.52 17.46 11.53 18.1 12.37 L 20 10.36 C 19.53 9.91 18.42 9.03 16.25 9 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaSpeakap;
