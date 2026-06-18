import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-share-alt-square-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaShareAltSquareSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 5 5 L 5 27 L 27 27 L 27 5 L 5 5 z M 7 7 L 25 7 L 25 25 L 7 25 L 7 7 z M 20 10 A 2 2 0 0 0 18.01 12.16 L 13.32 14.5 A 2 2 0 0 0 12 14 A 2 2 0 0 0 12 18 A 2 2 0 0 0 13.32 17.5 L 18.01 19.84 A 2 2 0 0 0 20 22 A 2 2 0 0 0 20 18 A 2 2 0 0 0 18.68 18.5 L 13.99 16.16 A 2 2 0 0 0 13.99 15.84 L 18.68 13.5 A 2 2 0 0 0 20 14 A 2 2 0 0 0 20 10 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaShareAltSquareSolid;
