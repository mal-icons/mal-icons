import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-glass-martini-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaGlassMartiniSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 5 5 L 5 6.34 L 15 19.34 L 15 26 L 10 26 L 10 28 L 22 28 L 22 26 L 17 26 L 17 19.34 L 27 6.34 L 27 5 L 5 5 z M 8.03 7 L 23.97 7 L 22.43 9 L 11.92 9 L 13.46 11 L 20.89 11 L 16 17.36 L 8.03 7 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaGlassMartiniSolid;
