import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-surprise-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaSurpriseSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16 4 C 9.38 4 4 9.38 4 16 C 4 22.62 9.38 28 16 28 C 22.62 28 28 22.62 28 16 C 28 9.38 22.62 4 16 4 Z M 16 6 C 21.54 6 26 10.46 26 16 C 26 21.54 21.54 26 16 26 C 10.46 26 6 21.54 6 16 C 6 10.46 10.46 6 16 6 Z M 11.5 11 C 10.67 11 10 12.12 10 13.5 C 10 14.88 10.67 16 11.5 16 C 12.33 16 13 14.88 13 13.5 C 13 12.12 12.33 11 11.5 11 Z M 20.5 11 C 19.67 11 19 12.12 19 13.5 C 19 14.88 19.67 16 20.5 16 C 21.33 16 22 14.88 22 13.5 C 22 12.12 21.33 11 20.5 11 Z M 16 17 C 13.71 17 12 18.86 12 21 C 12 21.99 12.36 22.97 13.16 23.47 C 13.96 23.96 14.84 24 16 24 C 17.16 24 18.04 23.96 18.84 23.47 C 19.64 22.97 20 21.99 20 21 C 20 18.86 18.29 17 16 17 Z M 16 19 C 17.29 19 18 19.83 18 21 C 18 21.67 17.96 21.69 17.81 21.78 C 17.66 21.87 17.05 22 16 22 C 14.95 22 14.34 21.87 14.19 21.78 C 14.04 21.69 14 21.67 14 21 C 14 19.83 14.71 19 16 19 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaSurpriseSolid;
