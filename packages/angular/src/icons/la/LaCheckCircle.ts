import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-check-circle",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaCheckCircle {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16 3 C 8.8 3 3 8.8 3 16 C 3 23.2 8.8 29 16 29 C 23.2 29 29 23.2 29 16 C 29 14.6 28.81 13.21 28.31 11.91 L 26.69 13.5 C 26.89 14.3 27 15.1 27 16 C 27 22.1 22.1 27 16 27 C 9.9 27 5 22.1 5 16 C 5 9.9 9.9 5 16 5 C 19 5 21.7 6.2 23.59 8.09 L 25 6.69 C 22.7 4.39 19.5 3 16 3 Z M 27.28 7.28 L 16 18.56 L 11.72 14.28 L 10.28 15.72 L 15.28 20.72 L 16 21.41 L 16.72 20.72 L 28.72 8.72 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaCheckCircle;
