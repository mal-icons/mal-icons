import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-save",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaSave {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 5 5 L 5 27 L 27 27 L 27 9.59 L 26.72 9.28 L 22.72 5.28 L 22.41 5 Z M 7 7 L 10 7 L 10 13 L 22 13 L 22 7.44 L 25 10.44 L 25 25 L 23 25 L 23 16 L 9 16 L 9 25 L 7 25 Z M 12 7 L 16 7 L 16 9 L 18 9 L 18 7 L 20 7 L 20 11 L 12 11 Z M 11 18 L 21 18 L 21 25 L 11 25 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaSave;
