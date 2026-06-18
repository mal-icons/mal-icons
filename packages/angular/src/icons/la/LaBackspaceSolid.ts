import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-backspace-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaBackspaceSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 11.59 7 L 11.28 7.28 L 3.28 15.28 L 2.59 16 L 3.28 16.72 L 11.28 24.72 L 11.59 25 L 29 25 L 29 7 Z M 12.44 9 L 27 9 L 27 23 L 12.44 23 L 5.44 16 Z M 15.16 11.75 L 13.75 13.16 L 16.59 16 L 13.75 18.84 L 15.16 20.25 L 18 17.41 L 20.84 20.25 L 22.25 18.84 L 19.41 16 L 22.25 13.16 L 20.84 11.75 L 18 14.59 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaBackspaceSolid;
