import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-discourse",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaDiscourse {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16.11 3 C 8.99 3 3 8.72 3 15.77 C 3 16 3.01 29 3.01 29 L 16.11 28.99 C 23.23 28.99 29 23.05 29 15.99 C 29 8.94 23.23 3 16.11 3 z M 16 8 C 20.42 8 24 11.58 24 16 C 24 20.42 20.42 24 16 24 C 14.58 24 13.25 23.63 12.09 22.98 L 8 24 L 9.12 20.07 C 8.41 18.88 8 17.49 8 16 C 8 11.58 11.58 8 16 8 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaDiscourse;
