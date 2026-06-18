import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-creative-commons-zero",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaCreativeCommonsZero {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16 3 C 8.83 3 3 8.83 3 16 C 3 23.17 8.83 29 16 29 C 23.17 29 29 23.17 29 16 C 29 8.83 23.17 3 16 3 z M 16 5 C 22.07 5 27 9.94 27 16 C 27 22.07 22.07 27 16 27 C 9.94 27 5 22.07 5 16 C 5 9.94 9.94 5 16 5 z M 16 10 C 13.79 10 12 11.79 12 14 L 12 18 C 12 20.21 13.79 22 16 22 C 18.21 22 20 20.21 20 18 L 20 14 C 20 11.79 18.21 10 16 10 z M 16 12 C 16.26 12 16.5 12.05 16.72 12.14 L 14 17.88 L 14 14 C 14 12.9 14.9 12 16 12 z M 18 14.12 L 18 18 C 18 19.1 17.1 20 16 20 C 15.74 20 15.5 19.95 15.27 19.86 L 18 14.12 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaCreativeCommonsZero;
