import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-fire-extinguisher-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaFireExtinguisherSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16 4 C 14.71 4 13.61 4.84 13.19 6 L 12 6 C 9.25 6 7 8.25 7 11 L 9 11 C 9 9.34 10.34 8 12 8 L 13 8 L 13 10.47 C 12.68 10.71 12.27 11.05 11.78 11.53 C 10.95 12.36 10 13.5 10 15 L 10 28 L 22 28 L 22 15 C 22 13.5 21.05 12.36 20.22 11.53 C 19.73 11.05 19.32 10.71 19 10.47 L 19 10.19 L 23.84 11 L 25 11.19 L 25 4.81 L 23.84 5 L 18.75 5.84 C 18.29 4.77 17.23 4 16 4 Z M 16 6 C 16.55 6 17 6.45 17 7 L 17 10 L 15 10 L 15 7 C 15 6.45 15.45 6 16 6 Z M 23 7.19 L 23 8.81 L 19 8.13 L 19 7.88 Z M 14.38 12 L 17.63 12 C 17.78 12.11 18.2 12.39 18.78 12.97 C 19.45 13.64 20 14.5 20 15 L 20 26 L 12 26 L 12 15 C 12 14.5 12.55 13.64 13.22 12.97 C 13.8 12.39 14.22 12.11 14.38 12 Z M 14 17 L 14 19 L 18 19 L 18 17 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaFireExtinguisherSolid;
