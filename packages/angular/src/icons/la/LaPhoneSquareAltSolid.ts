import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-phone-square-alt-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaPhoneSquareAltSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 5 5 L 5 27 L 27 27 L 27 5 L 5 5 z M 7 7 L 25 7 L 25 25 L 7 25 L 7 7 z M 20.13 9 C 19.61 9 19.13 9.2 18.77 9.56 L 17.62 10.71 C 16.9 11.43 16.9 12.7 17.62 13.42 L 19.33 15.13 C 18.8 15.9 18.2 16.62 17.52 17.28 L 17.27 17.53 C 16.62 18.2 15.89 18.81 15.12 19.33 L 13.42 17.63 C 13.06 17.26 12.57 17.06 12.06 17.06 C 11.55 17.06 11.07 17.26 10.71 17.63 L 9.56 18.78 C 8.81 19.52 8.81 20.74 9.56 21.48 L 10.51 22.44 C 11.04 22.97 11.8 23.14 12.5 22.89 L 12.63 22.85 C 13.13 22.68 14.31 22.3 16.18 21.04 C 17.09 20.43 17.94 19.72 18.69 18.94 L 18.93 18.71 C 19.71 17.94 20.42 17.09 21.03 16.18 C 22.29 14.31 22.68 13.14 22.85 12.63 L 22.89 12.5 C 22.96 12.29 23 12.08 23 11.86 C 23 11.37 22.8 10.88 22.43 10.52 L 21.48 9.56 C 21.12 9.2 20.64 9 20.13 9 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaPhoneSquareAltSolid;
