import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-ellipsis-h-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaEllipsisHSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 6 14 C 4.89 14 4 14.89 4 16 C 4 17.11 4.89 18 6 18 C 7.11 18 8 17.11 8 16 C 8 14.89 7.11 14 6 14 Z M 16 14 C 14.89 14 14 14.89 14 16 C 14 17.11 14.89 18 16 18 C 17.11 18 18 17.11 18 16 C 18 14.89 17.11 14 16 14 Z M 26 14 C 24.89 14 24 14.89 24 16 C 24 17.11 24.89 18 26 18 C 27.11 18 28 17.11 28 16 C 28 14.89 27.11 14 26 14 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaEllipsisHSolid;
