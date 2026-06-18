import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-door-closed-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaDoorClosedSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 8 5 L 8 27 L 24 27 L 24 5 Z M 10 7 L 22 7 L 22 25 L 10 25 Z M 20 15 C 19.45 15 19 15.45 19 16 C 19 16.55 19.45 17 20 17 C 20.55 17 21 16.55 21 16 C 21 15.45 20.55 15 20 15 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaDoorClosedSolid;
