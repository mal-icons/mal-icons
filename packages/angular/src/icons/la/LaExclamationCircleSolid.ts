import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-exclamation-circle-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaExclamationCircleSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16 4 C 9.38 4 4 9.38 4 16 C 4 22.62 9.38 28 16 28 C 22.62 28 28 22.62 28 16 C 28 9.38 22.62 4 16 4 Z M 16 6 C 21.54 6 26 10.46 26 16 C 26 21.54 21.54 26 16 26 C 10.46 26 6 21.54 6 16 C 6 10.46 10.46 6 16 6 Z M 15 10 L 15 18 L 17 18 L 17 10 Z M 15 20 L 15 22 L 17 22 L 17 20 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaExclamationCircleSolid;
