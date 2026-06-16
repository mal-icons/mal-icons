import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-last-page",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrLastPage {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.29 8.11 10.18 12l-3.89 3.89A11 0 1 0 7.7 17.3l4.59-4.59a11 0 0 0 0-1.41L7.7 6.7a11 0 0 0-1.41 0c-0.380.39-0.38 1.03 0 1.41zM17 6c0.55 0 1 0.45 1 1v10c0 0.55-0.45 1-1 1s-1-0.45-1-1V7c0-0.550.45-1 1-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrLastPage;
