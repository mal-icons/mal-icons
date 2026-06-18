import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-expand-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaExpandSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 4 4 L 4 13 L 6 13 L 6 6 L 13 6 L 13 4 L 4 4 z M 19 4 L 19 6 L 26 6 L 26 13 L 28 13 L 28 4 L 19 4 z M 4 19 L 4 28 L 13 28 L 13 26 L 6 26 L 6 19 L 4 19 z M 26 19 L 26 26 L 19 26 L 19 28 L 28 28 L 28 19 L 26 19 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaExpandSolid;
