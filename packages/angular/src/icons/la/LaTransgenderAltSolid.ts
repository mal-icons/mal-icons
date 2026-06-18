import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-transgender-alt-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaTransgenderAltSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 4 4 L 4 11 L 6 11 L 6 7.41 L 9.06 10.5 L 7.28 12.28 L 8.72 13.72 L 10.5 11.94 L 11.81 13.25 C 11.29 14.04 11 14.98 11 16 C 11 18.41 12.73 20.44 15 20.91 L 15 23 L 12 23 L 12 25 L 15 25 L 15 28 L 17 28 L 17 25 L 20 25 L 20 23 L 17 23 L 17 20.91 C 19.27 20.44 21 18.41 21 16 C 21 14.98 20.71 14.04 20.19 13.25 L 26 7.41 L 26 11 L 28 11 L 28 4 L 21 4 L 21 6 L 24.59 6 L 18.75 11.81 C 17.96 11.29 17.02 11 16 11 C 14.98 11 14.04 11.29 13.25 11.81 L 11.94 10.5 L 13.72 8.72 L 12.28 7.28 L 10.5 9.06 L 7.41 6 L 11 6 L 11 4 Z M 16 13 C 17.67 13 19 14.33 19 16 C 19 17.67 17.67 19 16 19 C 14.33 19 13 17.67 13 16 C 13 14.33 14.33 13 16 13 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaTransgenderAltSolid;
