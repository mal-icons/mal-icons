import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-thermometer-quarter-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaThermometerQuarterSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 12 4 L 12 15.5 C 10.2 16.8 9 18.7 9 21 C 9 24.9 12.1 28 16 28 C 19.9 28 23 24.9 23 21 C 23 18.7 21.8 16.7 20 15.5 L 20 14 L 22 14 L 22 12 L 20 12 L 20 10 L 22 10 L 22 8 L 20 8 L 20 6 L 22 6 L 22 4 L 12 4 z M 14 6 L 18 6 L 18 16.4 L 18.5 16.7 C 20 17.5 21 19.2 21 21 C 21 23.8 18.8 26 16 26 C 13.2 26 11 23.8 11 21 C 11 19.2 12 17.5 13.5 16.7 L 14 16.4 L 14 6 z M 13.8 19 C 13.3 19.5 13 20.2 13 21 C 13 22.7 14.3 24 16 24 C 17.7 24 19 22.7 19 21 C 19 20.2 18.7 19.5 18.2 19 L 13.8 19 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaThermometerQuarterSolid;
