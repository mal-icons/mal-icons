import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-favorite",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrFavorite {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.35 20.13c-0.760.69-1.930.69-2.69-0.01l-0.11-0.1C5.3 15.27 1.87 12.16 2 8.28c0.06-1.70.93-3.33 2.34-4.29 2.64-1.8 5.9-0.96 7.66 1.1 1.76-2.06 5.02-2.91 7.66-1.1 1.410.96 2.28 2.59 2.34 4.290.14 3.88-3.3 6.99-8.55 11.76l-0.10.09z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrFavorite;
