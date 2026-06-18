import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-tired",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaTired {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16 3 C 8.83 3 3 8.83 3 16 C 3 23.17 8.83 29 16 29 C 23.17 29 29 23.17 29 16 C 29 8.83 23.17 3 16 3 z M 16 5 C 22.07 5 27 9.94 27 16 C 27 22.07 22.07 27 16 27 C 9.94 27 5 22.07 5 16 C 5 9.94 9.94 5 16 5 z M 10.05 11.17 L 8.95 12.83 L 10.7 14 L 8.95 15.17 L 10.05 16.83 L 14.3 14 L 10.05 11.17 z M 21.95 11.17 L 17.7 14 L 21.95 16.83 L 23.05 15.17 L 21.3 14 L 23.05 12.83 L 21.95 11.17 z M 16 19 C 13.4 19 11.67 21.16 11.05 22.34 C 10.87 22.7 11.21 23.1 11.59 22.98 C 12.6 22.64 14.35 22 16 22 C 17.65 22 19.4 22.64 20.41 22.98 C 20.8 23.1 21.13 22.7 20.95 22.34 C 20.33 21.16 18.6 19 16 19 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaTired;
