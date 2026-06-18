import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-share-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaShareSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 19.72 5.28 L 18.28 6.72 L 24.56 13 L 11 13 C 7.14 13 4 16.14 4 20 C 4 23.86 7.14 27 11 27 L 11 25 C 8.23 25 6 22.77 6 20 C 6 17.23 8.23 15 11 15 L 24.56 15 L 18.28 21.28 L 19.72 22.72 L 27.72 14.72 L 28.41 14 L 27.72 13.28 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaShareSolid;
