import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-viacoin",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaViacoin {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 6.28 6 L 8.84 12 L 5 12 L 5 14 L 9.69 14 L 10.53 16 L 5 16 L 5 18 L 11.41 18 L 15.88 28.53 L 20.47 18 L 27 18 L 27 16 L 21.34 16 L 22.22 14 L 27 14 L 27 12 L 23.09 12 L 25.72 6 L 23.53 6 L 19.16 16 L 12.72 16 L 8.44 6 Z M 13.56 18 L 18.28 18 L 15.91 23.47 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaViacoin;
