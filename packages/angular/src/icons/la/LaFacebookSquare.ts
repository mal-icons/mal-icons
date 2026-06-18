import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-facebook-square",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaFacebookSquare {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 7 5 C 5.91 5 5 5.91 5 7 L 5 25 C 5 26.09 5.91 27 7 27 L 25 27 C 26.09 27 27 26.09 27 25 L 27 7 C 27 5.91 26.09 5 25 5 Z M 7 7 L 25 7 L 25 25 L 19.81 25 L 19.81 18.25 L 22.41 18.25 L 22.78 15.25 L 19.81 15.25 L 19.81 13.31 C 19.81 12.44 20.03 11.84 21.28 11.84 L 22.91 11.84 L 22.91 9.13 C 22.63 9.09 21.67 9.03 20.56 9.03 C 18.26 9.03 16.69 10.42 16.69 13 L 16.69 15.25 L 14.06 15.25 L 14.06 18.25 L 16.69 18.25 L 16.69 25 L 7 25 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaFacebookSquare;
