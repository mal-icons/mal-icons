import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-swatchbook-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaSwatchbookSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 5 5 L 5 23 C 5 25.21 6.79 27 9 27 C 11.21 27 13 25.21 13 23 L 13 5 L 5 5 z M 7 7 L 11 7 L 11 11 L 7 11 L 7 7 z M 18.9 7.44 L 14.5 11.84 L 14.5 14.67 L 18.9 10.27 L 21.73 13.1 L 14.5 20.33 L 14.5 23 C 14.5 23.06 14.49 23.11 14.49 23.16 L 24.56 13.1 L 18.9 7.44 z M 7 13 L 11 13 L 11 17 L 7 17 L 7 13 z M 7 19 L 11 19 L 11 23 C 11 24.1 10.1 25 9 25 C 7.9 25 7 24.1 7 23 L 7 19 z M 20.78 19 L 18.78 21 L 25 21 L 25 25 L 14.78 25 L 12.89 26.89 C 12.85 26.93 12.8 26.96 12.75 27 L 27 27 L 27 19 L 20.78 19 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaSwatchbookSolid;
