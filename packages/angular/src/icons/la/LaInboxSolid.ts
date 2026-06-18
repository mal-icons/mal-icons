import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-inbox-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaInboxSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 7.16 5 L 7 5.84 L 5 18.84 L 5 27 L 27 27 L 27 18.84 L 25 5.84 L 24.84 5 Z M 8.88 7 L 23.13 7 L 24.81 18 L 18 18 L 18 19 C 18 20.12 17.12 21 16 21 C 14.88 21 14 20.12 14 19 L 14 18 L 7.19 18 Z M 7 20 L 12.19 20 C 12.64 21.71 14.15 23 16 23 C 17.85 23 19.36 21.71 19.81 20 L 25 20 L 25 25 L 7 25 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaInboxSolid;
