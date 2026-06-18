import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-venus-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaVenusSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16 3 C 11.59 3 8 6.59 8 11 C 8 15.07 11.07 18.44 15 18.94 L 15 23 L 11 23 L 11 25 L 15 25 L 15 29 L 17 29 L 17 25 L 21 25 L 21 23 L 17 23 L 17 18.94 C 20.93 18.44 24 15.07 24 11 C 24 6.59 20.41 3 16 3 Z M 16 5 C 19.32 5 22 7.68 22 11 C 22 14.32 19.32 17 16 17 C 12.68 17 10 14.32 10 11 C 10 7.68 12.68 5 16 5 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaVenusSolid;
