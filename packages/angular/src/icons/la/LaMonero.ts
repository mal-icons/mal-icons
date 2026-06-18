import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-monero",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaMonero {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16 3 C 8.83 3 3 8.83 3 16 C 3 23.17 8.83 29 16 29 C 23.17 29 29 23.17 29 16 C 29 8.83 23.17 3 16 3 z M 16 5 C 22.07 5 27 9.94 27 16 C 27 17.04 26.84 18.04 26.57 19 L 22 19 L 22 10.98 L 16 17.26 L 10 10.98 L 10 19 L 5.43 19 C 5.16 18.04 5 17.04 5 16 C 5 9.94 9.94 5 16 5 z M 12 15.97 L 16 20.16 L 20 15.97 L 20 21 L 25.79 21 C 23.96 24.56 20.26 27 16 27 C 11.74 27 8.04 24.56 6.21 21 L 12 21 L 12 15.97 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaMonero;
