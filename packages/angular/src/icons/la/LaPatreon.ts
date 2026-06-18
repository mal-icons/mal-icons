import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-patreon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaPatreon {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 4 4 L 4 28 L 11 28 L 11 4 L 4 4 z M 21.5 4 C 16.81 4 13 7.81 13 12.5 C 13 17.19 16.81 21 21.5 21 C 26.19 21 30 17.19 30 12.5 C 30 7.81 26.19 4 21.5 4 z M 6 6 L 9 6 L 9 26 L 6 26 L 6 6 z M 21.5 6 C 25.08 6 28 8.92 28 12.5 C 28 16.08 25.08 19 21.5 19 C 17.92 19 15 16.08 15 12.5 C 15 8.92 17.92 6 21.5 6 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaPatreon;
