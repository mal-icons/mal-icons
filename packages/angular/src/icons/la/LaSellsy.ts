import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-sellsy",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaSellsy {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 18 4 C 14.34 4 11.27 6.25 9.88 9.41 C 9.29 9.16 8.67 9 8 9 C 5.25 9 3 11.25 3 14 C 3 14.14 3.02 14.27 3.03 14.41 C 1.26 15.68 0 17.66 0 20 C 0 23.86 3.14 27 7 27 L 25 27 C 28.86 27 32 23.86 32 20 C 32 16.85 29.85 14.27 26.97 13.41 C 26.98 13.27 27 13.14 27 13 C 27 8.04 22.96 4 18 4 Z M 18 6 C 21.88 6 25 9.12 25 13 C 25 13.3 24.98 13.61 24.94 13.94 L 24.78 14.91 L 25.78 15.06 C 28.18 15.43 30 17.49 30 20 C 30 22.77 27.77 25 25 25 L 7 25 C 4.23 25 2 22.77 2 20 C 2 18.12 3.03 16.48 4.56 15.63 L 5.19 15.28 L 5.06 14.56 C 5.02 14.37 5 14.19 5 14 C 5 12.33 6.33 11 8 11 C 8.65 11 9.25 11.2 9.75 11.56 L 10.88 12.41 L 11.28 11.03 C 12.13 8.13 14.81 6 18 6 Z M 20 13 L 20 22 L 22 22 L 22 13 Z M 16 15 L 16 22 L 18 22 L 18 15 Z M 12 16 L 12 22 L 14 22 L 14 16 Z M 8 17 L 8 22 L 10 22 L 10 17 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaSellsy;
