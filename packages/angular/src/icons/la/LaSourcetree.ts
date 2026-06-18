import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-sourcetree",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaSourcetree {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16 4 C 10.49 4 6 8.49 6 14 C 6 17.98 8.38 21.58 12 23.16 L 12 28 L 20 28 L 20 23.16 C 23.62 21.58 26 17.98 26 14 C 26 8.49 21.51 4 16 4 z M 16 6 C 20.41 6 24 9.59 24 14 C 24 17.38 21.86 20.4 18.67 21.54 L 18 21.77 L 18 26 L 14 26 L 14 21.77 L 13.33 21.53 C 10.14 20.4 8 17.38 8 14 C 8 9.59 11.59 6 16 6 z M 16 10 C 13.79 10 12 11.79 12 14 C 12 16.21 13.79 18 16 18 C 18.21 18 20 16.21 20 14 C 20 11.79 18.21 10 16 10 z M 16 12 C 17.1 12 18 12.9 18 14 C 18 15.1 17.1 16 16 16 C 14.9 16 14 15.1 14 14 C 14 12.9 14.9 12 16 12 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaSourcetree;
