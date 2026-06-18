import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-dev",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaDev {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 2 7 L 2 25 L 30 25 L 30 7 L 2 7 z M 4 9 L 28 9 L 28 23 L 4 23 L 4 9 z M 6 11 L 6 21 L 9 21 C 10.65 21 12 19.65 12 18 L 12 14 C 12 12.35 10.65 11 9 11 L 6 11 z M 16 11 C 14.9 11 14 11.9 14 13 L 14 19 C 14 20.1 14.9 21 16 21 L 18 21 L 18 19 L 16 19 L 16 17 L 18 17 L 18 15 L 16 15 L 16 13 L 18 13 L 18 11 L 16 11 z M 19.69 11 L 21.78 20.03 C 21.91 20.6 22.42 21 23 21 C 23.59 21 24.09 20.6 24.22 20.03 L 26.31 11 L 24.26 11 L 23 16.44 L 21.74 11 L 19.69 11 z M 8 13 L 9 13 C 9.55 13 10 13.45 10 14 L 10 18 C 10 18.55 9.55 19 9 19 L 8 19 L 8 13 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaDev;
