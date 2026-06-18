import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-dashcube",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaDashcube {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 24.5 3 L 24.19 3.28 L 20.47 7 L 11 7 C 8.25 7 6 9.25 6 12 L 6 22 C 6 24.75 8.25 27 11 27 L 21 27 C 23.75 27 26 24.75 26 22 L 26 3 Z M 24 6.31 L 24 22 C 24 23.67 22.67 25 21 25 L 11 25 C 9.33 25 8 23.67 8 22 L 8 12 C 8 10.33 9.33 9 11 9 L 21.31 9 Z M 13 12 C 11.91 12 11 12.91 11 14 L 11 20 C 11 21.09 11.91 22 13 22 L 23.41 22 L 21.72 20.28 L 21 19.56 L 21 14 C 21 12.91 20.09 12 19 12 Z M 13 14 L 19 14 L 19 20 L 13 20 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaDashcube;
