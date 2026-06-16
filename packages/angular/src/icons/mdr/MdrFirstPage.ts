import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-first-page",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrFirstPage {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17.7 15.89 13.82 12l3.89-3.89A11 0 1 0 16.3 6.7l-4.59 4.59a11 0 0 0 0 1.41l4.59 4.59c0.390.39 1.020.39 1.41 0a0.990.99 0 0 0-0.01-1.4zM7 6c0.55 0 1 0.45 1 1v10c0 0.55-0.45 1-1 1s-1-0.45-1-1V7c0-0.550.45-1 1-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrFirstPage;
