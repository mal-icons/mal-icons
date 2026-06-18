import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-maptiler",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiMaptiler {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m7.79 1.66 4.19 4.19 4.2-4.2A6.13 6.13 0 0 0 12 0a6.14 6.14 0 0 0-4.2 1.66ZM3.25 6.2 7.46 1.99l4.19 4.19-4.21 4.21Zm-0.31 8.7 4.17-4.17-2.89-2.89-1.3-1.3a6.19 6.19 0 0 0 0.02 8.36zm14.73-5.64 3.07-3.07-4.21-4.21-4.21 4.21 4.21 4.21Zm-6.01 6.01L7.44 11.06l-4.17 4.17 4.21 4.21zm5.22-4.54 4.18 4.18a6.18 6.18 0 0 0 0.02-8.39l-4.2 4.2zm-2.45 6.64 2.09 2.09 4.21-4.21-4.19-4.19-4.21 4.21zM11.97 24a3007.16 3007.16 0 0 0 4.2-4.21l-4.19-4.19-4.17 4.17c1.39 1.41 2.77 2.81 4.16 4.22Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiMaptiler;
