import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-comments-dollar-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaCommentsDollarSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 2 3 L 2 21 L 6 21 L 6 26.09 L 7.63 24.78 L 12.34 21 L 22 21 L 22 3 L 2 3 z M 4 5 L 20 5 L 20 19 L 11.66 19 L 11.38 19.22 L 8 21.91 L 8 19 L 4 19 L 4 5 z M 11 7 L 11 8.04 C 9.88 8.23 9 9.2 9 10.38 C 9 11.13 9.42 11.83 10.11 12.17 L 13 13.62 C 13 13.84 12.84 14 12.62 14 L 11.38 14 C 11.16 14 11 13.84 11 13.62 L 11 13 L 9 13 L 9 13.62 C 9 14.79 9.88 15.77 11 15.96 L 11 17 L 13 17 L 13 15.96 C 14.13 15.77 15 14.79 15 13.62 C 15 12.86 14.57 12.17 13.89 11.83 L 11 10.38 C 11.01 10.39 11 10.38 11 10.38 C 11 10.15 11.16 10 11.38 10 L 12.62 10 C 12.84 10 13 10.16 13 10.38 L 13 11 L 15 11 L 15 10.38 C 15 9.21 14.13 8.23 13 8.04 L 13 7 L 11 7 z M 24 9 L 24 11 L 28 11 L 28 23 L 24 23 L 24 25.91 L 20.34 23 L 12.84 23 L 10.34 25 L 19.66 25 L 26 30.09 L 26 25 L 30 25 L 30 9 L 24 9 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaCommentsDollarSolid;
