import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-angular",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaAngular {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16 3.94 L 4.36 8.17 L 6.45 23.84 L 16 29.14 L 25.55 23.84 L 27.64 8.17 L 16 3.94 z M 16 6.06 L 25.44 9.5 L 23.7 22.58 L 16 26.86 L 8.3 22.58 L 6.56 9.5 L 16 6.06 z M 16 8 L 10 22 L 12 22 L 13.29 19 L 18.71 19 L 20 22 L 22 22 L 16 8 z M 16 12.55 L 16.02 12.61 L 16.72 14.36 L 17.85 17 L 14.15 17 L 15.28 14.36 L 15.98 12.61 L 16 12.55 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaAngular;
