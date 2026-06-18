import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-google-plus-g",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaGooglePlusG {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 11 7 C 6.03 7 2 11.03 2 16 C 2 20.97 6.03 25 11 25 C 15.97 25 20 20.97 20 16 C 20 15.38 19.93 14.78 19.81 14.2 L 19.77 14 L 11 14 L 11 17 L 17 17 C 16.52 19.84 13.97 22 11 22 C 7.69 22 5 19.31 5 16 C 5 12.69 7.69 10 11 10 C 12.5 10 13.87 10.55 14.92 11.46 L 17.07 9.36 C 15.47 7.89 13.34 7 11 7 Z M 25 11 L 25 14 L 22 14 L 22 16 L 25 16 L 25 19 L 27 19 L 27 16 L 30 16 L 30 14 L 27 14 L 27 11 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaGooglePlusG;
