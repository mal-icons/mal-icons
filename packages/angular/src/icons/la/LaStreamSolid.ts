import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-stream-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaStreamSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 5 5 L 5 11 L 24 11 L 24 5 L 5 5 z M 7 7 L 22 7 L 22 9 L 7 9 L 7 7 z M 9 13 L 9 19 L 28 19 L 28 13 L 9 13 z M 11 15 L 26 15 L 26 17 L 11 17 L 11 15 z M 5 21 L 5 27 L 24 27 L 24 21 L 5 21 z M 7 23 L 22 23 L 22 25 L 7 25 L 7 23 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaStreamSolid;
