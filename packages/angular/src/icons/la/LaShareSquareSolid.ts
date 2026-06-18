import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-share-square-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaShareSquareSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 23.41 4.44 L 22 5.85 L 26.17 10 L 16.5 10 C 13.47 10 11 12.47 11 15.5 C 11 18.53 13.47 21 16.5 21 L 17 21 L 17 19 L 16.5 19 C 14.57 19 13 17.43 13 15.5 C 13 13.57 14.57 12 16.5 12 L 26.17 12 L 22.01 16.16 L 23.42 17.58 L 30 11 L 23.41 4.44 z M 5 5 L 5 27 L 27 27 L 27 17 L 25 19 L 25 25 L 7 25 L 7 7 L 17.85 7 L 19.85 5 L 5 5 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaShareSquareSolid;
