import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-tips-and-updates",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrTipsAndUpdates {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7 20h4c0 1.1-0.9 2-2 2s-2-0.9-2-2zm-2-2c0 0.550.45 1 1 1h6c0.55 0 1-0.45 1-1s-0.45-1-1-1H6c-0.55 0-1 0.45-1 1zm11.5-8.5c0 3.82-2.66 5.86-3.77 6.5H5.27c-1.11-0.64-3.77-2.68-3.77-6.5C1.5 5.36 4.86 2 9 2s7.5 3.36 7.5 7.5zm4.87-2.13L20 8l1.370.63L22 10l0.63-1.37L24 8l-1.37-0.63L22 6l-0.63 1.37zM19 6l0.94-2.06L22 3l-2.06-0.94L19 0l-0.94 2.06L16 3l2.060.94L19 6z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrTipsAndUpdates;
