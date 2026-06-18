import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-toggle-on-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaToggleOnSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 9 7 C 4.04 7 0 11.04 0 16 C 0 20.96 4.04 25 9 25 L 23 25 C 27.96 25 32 20.96 32 16 C 32 11.04 27.96 7 23 7 Z M 23 9 C 26.88 9 30 12.12 30 16 C 30 19.88 26.88 23 23 23 C 19.12 23 16 19.88 16 16 C 16 12.12 19.12 9 23 9 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaToggleOnSolid;
