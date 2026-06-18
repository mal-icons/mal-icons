import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-meh-rolling-eyes",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaMehRollingEyes {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16 3 C 8.83 3 3 8.83 3 16 C 3 23.17 8.83 29 16 29 C 23.17 29 29 23.17 29 16 C 29 8.83 23.17 3 16 3 z M 16 5 C 22.07 5 27 9.94 27 16 C 27 22.07 22.07 27 16 27 C 9.94 27 5 22.07 5 16 C 5 9.94 9.94 5 16 5 z M 11 10 C 8.79 10 7 11.79 7 14 C 7 16.21 8.79 18 11 18 C 13.21 18 15 16.21 15 14 C 15 11.79 13.21 10 11 10 z M 21 10 C 18.79 10 17 11.79 17 14 C 17 16.21 18.79 18 21 18 C 23.21 18 25 16.21 25 14 C 25 11.79 23.21 10 21 10 z M 10.02 12.27 A 1.5 1.5 0 0 0 11.5 14 A 1.5 1.5 0 0 0 12.83 13.2 C 12.94 13.44 13 13.71 13 14 C 13 15.1 12.1 16 11 16 C 9.9 16 9 15.1 9 14 C 9 13.26 9.41 12.61 10.02 12.27 z M 21.98 12.27 C 22.59 12.61 23 13.26 23 14 C 23 15.1 22.1 16 21 16 C 19.9 16 19 15.1 19 14 C 19 13.71 19.06 13.44 19.17 13.2 A 1.5 1.5 0 0 0 20.5 14 A 1.5 1.5 0 0 0 21.98 12.27 z M 12 20 L 12 22 L 20 22 L 20 20 L 12 20 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaMehRollingEyes;
