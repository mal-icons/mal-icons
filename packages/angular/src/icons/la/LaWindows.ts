import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-windows",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaWindows {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 27 5 L 5 7.99 L 5 24.01 L 27 27 L 27 5 z M 25 7.29 L 25 15 L 15 15 L 15 8.65 L 25 7.29 z M 13 8.92 L 13 15 L 7 15 L 7 9.74 L 13 8.92 z M 7 17 L 13 17 L 13 23.08 L 7 22.26 L 7 17 z M 15 17 L 25 17 L 25 24.71 L 15 23.35 L 15 17 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaWindows;
