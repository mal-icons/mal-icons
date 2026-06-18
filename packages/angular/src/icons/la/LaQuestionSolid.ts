import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-question-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaQuestionSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16 4 C 11.67 4 8 7.05 8 11 L 8 14 L 14 14 L 14 11 C 14 10.85 14.09 10.64 14.44 10.41 C 14.79 10.18 15.35 10 16 10 C 16.65 10 17.22 10.18 17.56 10.41 C 17.91 10.64 18 10.84 18 11 C 18 11.58 17.81 11.98 17.44 12.44 C 17.06 12.89 16.48 13.37 15.84 13.91 C 14.57 14.99 13 16.5 13 19 L 13 20 L 19 20 L 19 19 C 19 18.66 19.13 18.42 19.5 18.03 C 19.88 17.64 20.5 17.18 21.16 16.63 C 22.48 15.52 24 13.82 24 11 C 24 7.09 20.34 4 16 4 Z M 16 6 C 19.39 6 22 8.37 22 11 C 22 13.14 21.02 14.1 19.84 15.09 C 19.25 15.59 18.63 16.07 18.06 16.66 C 17.71 17.02 17.45 17.48 17.25 18 L 15.31 18 C 15.63 16.99 16.23 16.22 17.16 15.44 C 17.77 14.92 18.44 14.38 19 13.69 C 19.56 12.99 20 12.08 20 11 C 20 10.04 19.43 9.24 18.69 8.75 C 17.95 8.26 17 8 16 8 C 14.99 8 14.05 8.26 13.31 8.75 C 12.57 9.24 12 10.04 12 11 L 12 12 L 10 12 L 10 11 C 10 8.32 12.6 6 16 6 Z M 13 22 L 13 28 L 19 28 L 19 22 Z M 15 24 L 17 24 L 17 26 L 15 26 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaQuestionSolid;
