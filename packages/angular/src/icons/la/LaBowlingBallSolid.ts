import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-bowling-ball-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaBowlingBallSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16 3 C 8.83 3 3 8.83 3 16 C 3 23.17 8.83 29 16 29 C 23.17 29 29 23.17 29 16 C 29 8.83 23.17 3 16 3 z M 16 5 C 22.07 5 27 9.94 27 16 C 27 22.07 22.07 27 16 27 C 9.94 27 5 22.07 5 16 C 5 9.94 9.94 5 16 5 z M 14.5 9 A 1.5 1.5 0 0 0 14.5 12 A 1.5 1.5 0 0 0 14.5 9 z M 10.5 13 A 1.5 1.5 0 0 0 10.5 16 A 1.5 1.5 0 0 0 10.5 13 z M 15.5 14 A 1.5 1.5 0 0 0 15.5 17 A 1.5 1.5 0 0 0 15.5 14 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaBowlingBallSolid;
