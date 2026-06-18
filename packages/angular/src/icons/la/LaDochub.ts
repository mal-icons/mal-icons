import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-dochub",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaDochub {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 19 3.59 L 19 12 L 27.41 12 L 19 3.59 z M 7 4 L 7 28 L 18 28 C 22.41 28 26 24.41 26 20 L 26 14 L 20 14 L 20 18.94 C 20 20.63 18.63 22 16.94 22 L 13 22 L 13 10 L 17 10 L 17 4 L 7 4 z M 9 6 L 15 6 L 15 8 L 11 8 L 11 24 L 16.94 24 C 19.73 24 22 21.73 22 18.94 L 22 16 L 24 16 L 24 20 C 24 23.31 21.31 26 18 26 L 9 26 L 9 6 z M 21 8.41 L 22.59 10 L 21 10 L 21 8.41 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaDochub;
