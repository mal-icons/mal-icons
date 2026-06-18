import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-scroll-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaScrollSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 10 4 C 8.36 4 7 5.36 7 7 L 7 21 L 4 21 L 4 25 C 4 26.65 5.36 28 7 28 L 21 28 L 21.03 28 C 22.66 27.98 24 26.63 24 25 L 24 11 L 28 11 L 28 7 C 28 5.36 26.65 4 25 4 L 10 4 z M 10 6 L 22.19 6 C 22.07 6.32 22 6.65 22 7 L 22 25 C 22 25.57 21.57 26 21 26 C 20.44 26.01 20.01 25.56 20 25 L 19.97 21 L 9 21 L 9 7 C 9 6.43 9.43 6 10 6 z M 25 6 C 25.57 6 26 6.43 26 7 L 26 9 L 24 9 L 24 7 C 24 6.43 24.43 6 25 6 z M 6 23 L 14 23 L 17.97 23 L 18 23 L 18 25 L 18 25.03 C 18 25.38 18.07 25.69 18.19 26 L 7 26 C 6.43 26 6 25.57 6 25 L 6 23 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaScrollSolid;
