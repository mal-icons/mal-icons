import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-creative-commons-sampling-plus",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaCreativeCommonsSamplingPlus {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16 3 C 8.83 3 3 8.83 3 16 C 3 23.17 8.83 29 16 29 C 23.17 29 29 23.17 29 16 C 29 8.83 23.17 3 16 3 z M 16 5 C 22.07 5 27 9.94 27 16 C 27 22.07 22.07 27 16 27 C 9.94 27 5 22.07 5 16 C 5 9.94 9.94 5 16 5 z M 16.13 9 C 15.86 9 15.65 9.21 15.63 9.47 L 15.28 13.14 L 14.96 10.39 C 14.94 10.13 14.73 9.92 14.46 9.92 C 14.2 9.92 13.98 10.13 13.96 10.39 L 13.65 13.63 L 13.36 11.3 C 13.34 11.05 13.12 10.85 12.86 10.85 L 12.86 10.85 C 12.6 10.85 12.39 11.04 12.36 11.3 L 11.91 16 L 11.72 14.95 C 11.68 14.74 11.52 14.58 11.31 14.55 C 11.1 14.51 10.9 14.6 10.79 14.78 L 10.08 16 L 8 16 L 8 17 L 10.37 17 C 10.54 17 10.71 16.91 10.8 16.75 L 10.97 16.45 L 11.56 19.74 C 11.61 19.99 11.84 20.16 12.08 20.15 C 12.33 20.14 12.53 19.95 12.55 19.7 L 12.82 18 L 13.19 21.54 C 13.21 21.8 13.43 22 13.69 22 L 13.69 22 C 13.96 22 14.17 21.8 14.19 21.54 L 14.46 19.04 L 14.8 22.53 C 14.81 22.8 15.03 23 15.3 23 C 15.56 23 15.78 22.79 15.79 22.53 L 16.11 19 L 16.34 21.53 C 16.36 21.79 16.57 22 16.84 22 L 16.84 22 C 17.1 22 17.32 21.8 17.34 21.54 L 17.69 18.72 L 17.95 21.53 C 17.97 21.79 18.18 22 18.44 22 L 18.45 22 C 18.71 22 18.92 21.8 18.95 21.55 L 19.4 16.64 L 19.7 18.8 C 19.73 19.02 19.91 19.2 20.13 19.23 C 20.35 19.25 20.57 19.14 20.65 18.93 L 21.5 17 L 24 17 L 24 16 L 21.17 16 C 20.97 16 20.79 16.12 20.71 16.3 L 20.45 16.9 L 19.8 12.2 C 19.77 11.95 19.55 11.78 19.3 11.77 C 19.04 11.78 18.84 11.97 18.81 12.22 L 18.53 14 L 18.26 11.31 C 18.24 11.05 18.03 10.85 17.77 10.85 C 17.51 10.83 17.29 11.04 17.26 11.3 L 16.95 13 L 16.63 9.47 C 16.61 9.21 16.39 9 16.13 9 L 16.13 9 z M 15 14 L 17 14 L 17 15 L 18 15 L 18 17 L 17 17 L 17 18 L 15 18 L 15 17 L 14 17 L 14 15 L 15 15 L 15 14 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaCreativeCommonsSamplingPlus;
