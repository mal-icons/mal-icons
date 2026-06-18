import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-sign-out-alt-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaSignOutAltSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16 4 C 9.38 4 4 9.38 4 16 C 4 22.62 9.38 28 16 28 C 20.05 28 23.64 25.99 25.81 22.91 L 24.19 21.75 C 22.38 24.32 19.39 26 16 26 C 10.46 26 6 21.54 6 16 C 6 10.46 10.46 6 16 6 C 19.39 6 22.38 7.68 24.19 10.25 L 25.81 9.09 C 23.64 6.01 20.05 4 16 4 Z M 23.34 11.28 L 21.91 12.72 L 24.19 15 L 12 15 L 12 17 L 24.19 17 L 21.91 19.28 L 23.34 20.72 L 27.34 16.72 L 28.03 16 L 27.34 15.28 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaSignOutAltSolid;
