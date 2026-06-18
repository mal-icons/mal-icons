import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-link-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaLinkSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 21.75 4 C 20.08 4 18.49 4.66 17.31 5.84 L 15.84 7.31 C 14.66 8.5 14 10.08 14 11.75 C 14 12.54 14.15 13.32 14.44 14.03 L 16.06 12.41 C 15.86 11.11 16.25 9.71 17.25 8.72 L 18.72 7.25 C 19.52 6.45 20.61 6 21.75 6 C 22.89 6 23.95 6.45 24.75 7.25 C 26.41 8.91 26.41 11.62 24.75 13.28 L 23.28 14.75 C 22.48 15.55 21.39 16 20.25 16 C 20.03 16 19.81 15.98 19.59 15.94 L 17.97 17.56 C 18.68 17.85 19.46 18 20.25 18 C 21.92 18 23.51 17.34 24.69 16.16 L 26.16 14.69 C 27.34 13.5 28 11.92 28 10.25 C 28 8.58 27.34 7.03 26.16 5.84 C 24.98 4.66 23.42 4 21.75 4 Z M 19.28 11.28 L 11.28 19.28 L 12.72 20.72 L 20.72 12.72 Z M 11.75 14 C 10.08 14 8.49 14.66 7.31 15.84 L 5.84 17.31 C 4.66 18.5 4 20.08 4 21.75 C 4 23.42 4.66 24.97 5.84 26.16 C 7.02 27.34 8.58 28 10.25 28 C 11.92 28 13.51 27.34 14.69 26.16 L 16.16 24.69 C 17.34 23.5 18 21.92 18 20.25 C 18 19.46 17.85 18.68 17.56 17.97 L 15.94 19.59 C 16.14 20.89 15.75 22.29 14.75 23.28 L 13.28 24.75 C 12.48 25.55 11.39 26 10.25 26 C 9.11 26 8.05 25.55 7.25 24.75 C 5.59 23.09 5.59 20.38 7.25 18.72 L 8.72 17.25 C 9.52 16.45 10.61 16 11.75 16 C 11.97 16 12.19 16.02 12.41 16.06 L 14.03 14.44 C 13.32 14.15 12.54 14 11.75 14 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaLinkSolid;
