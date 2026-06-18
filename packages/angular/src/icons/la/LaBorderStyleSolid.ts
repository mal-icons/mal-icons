import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-border-style-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaBorderStyleSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 5 5 L 5 25 L 5 27 L 7 27 L 9 27 L 9 25 L 7 25 L 7 7 L 25 7 L 25 9 L 27 9 L 27 7 L 27 5 L 25 5 L 5 5 z M 25 11 L 25 15 L 27 15 L 27 11 L 25 11 z M 25 17 L 25 21 L 27 21 L 27 17 L 25 17 z M 25 23 L 25 25 L 23 25 L 23 27 L 27 27 L 27 25 L 27 23 L 25 23 z M 11 25 L 11 27 L 15 27 L 15 25 L 11 25 z M 17 25 L 17 27 L 21 27 L 21 25 L 17 25 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaBorderStyleSolid;
