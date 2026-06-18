import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-gem",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaGem {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 9.53 6 L 4.22 12.38 L 3.72 12.97 L 4.22 13.63 L 15.22 27.63 L 16 28.63 L 16.78 27.63 L 27.78 13.63 L 28.28 12.97 L 27.78 12.38 L 22.47 6 Z M 10.47 8 L 14.13 8 L 11.44 12 L 7.13 12 Z M 17.88 8 L 21.53 8 L 24.88 12 L 20.56 12 Z M 16 8.84 L 18.13 12 L 13.88 12 Z M 7.03 14 L 11.25 14 L 13.63 22.41 Z M 13.31 14 L 18.66 14 L 16 23.31 Z M 20.75 14 L 24.97 14 L 18.38 22.38 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaGem;
