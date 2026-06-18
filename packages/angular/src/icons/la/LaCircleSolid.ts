import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-circle-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaCircleSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16 4 C 9.38 4 4 9.38 4 16 C 4 22.62 9.38 28 16 28 C 22.62 28 28 22.62 28 16 C 28 9.38 22.62 4 16 4 Z M 16 5 C 22.08 5 27 9.92 27 16 C 27 22.08 22.08 27 16 27 C 9.92 27 5 22.08 5 16 C 5 9.92 9.92 5 16 5 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaCircleSolid;
