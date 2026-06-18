import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-fort-awesome-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaFortAwesomeAlt {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 15.5 3 C 8.61 3 3 8.61 3 15.5 C 3 22.39 8.61 28 15.5 28 C 22.39 28 28 22.39 28 15.5 C 28 8.61 22.39 3 15.5 3 z M 15.5 5 C 21.29 5 26 9.71 26 15.5 C 26 21.29 21.29 26 15.5 26 C 9.71 26 5 21.29 5 15.5 C 5 9.71 9.71 5 15.5 5 z M 15 8 L 15 12 L 15 13 L 14 13 L 14 12 L 13 12 L 13 13 L 12 13 L 12 12 L 11 12 L 11 18 L 9 18 L 9 17 L 8 17 L 8 18 L 8 19.49 C 9.21 21.75 11.4 23.39 14 23.86 L 14 20.5 C 14 19.68 14.68 19 15.5 19 C 16.33 19 17 19.68 17 20.5 L 17 23.86 C 19.6 23.39 21.79 21.75 23 19.49 L 23 18 L 23 17 L 22 17 L 22 18 L 20 18 L 20 12 L 19 12 L 19 13 L 18 13 L 18 12 L 17 12 L 17 13 L 16 13 L 16 12 L 16 10 C 16 10 16.39 9.77 16.9 9.77 C 17.4 9.77 17.68 10 18.09 10 C 18.64 10 19 9.77 19 9.77 L 19 8 C 19 8 18.64 8.23 18.09 8.23 C 17.68 8.23 17.4 8 16.9 8 C 16.39 8 16 8.23 16 8.23 L 16 8 L 15 8 z M 13 15 L 14 15 L 14 17 L 13 17 L 13 15 z M 17 15 L 18 15 L 18 17 L 17 17 L 17 15 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaFortAwesomeAlt;
