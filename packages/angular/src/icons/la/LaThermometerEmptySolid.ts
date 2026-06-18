import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-thermometer-empty-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaThermometerEmptySolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 13 5 L 13 16 C 11.26 17.05 10 18.83 10 21 C 10 24.3 12.7 27 16 27 C 19.3 27 22 24.3 22 21 C 22 18.83 20.74 17.05 19 16 L 19 15 L 21 15 L 21 13 L 19 13 L 19 11 L 21 11 L 21 9 L 19 9 L 19 7 L 21 7 L 21 5 Z M 15 7 L 17 7 L 17 17.06 L 17.59 17.34 C 19 17.96 20 19.35 20 21 C 20 23.22 18.22 25 16 25 C 13.78 25 12 23.22 12 21 C 12 19.35 13 17.96 14.41 17.34 L 15 17.06 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaThermometerEmptySolid;
