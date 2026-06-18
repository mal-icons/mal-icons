import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-etsy",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaEtsy {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 23.97 5 C 18.71 5.6 9.77 5.3 6.14 5.18 L 6.14 6.44 C 8.54 6.89 9.09 6.81 9.14 8.2 C 9.31 12.03 9.23 20.47 9.14 24.02 C 9.12 25.35 8.37 25.31 6.14 25.75 L 6.14 27 C 13.44 26.77 18.45 26.79 24.24 27 C 24.31 26.08 24.75 22.38 24.93 21 L 23.7 21 C 22.31 24.29 22.04 25.42 19.06 25.42 L 14.68 25.42 C 13.2 25.42 12.5 24.81 12.5 23.54 L 12.5 16.71 C 15.77 16.71 16.82 16.81 16.82 16.81 C 18.32 16.83 18.55 18.03 19 20 L 20 20 C 19.89 15.17 19.78 16.98 20 12 L 19 12 C 18.35 14.79 18.31 15.12 16.85 15.16 C 16.85 15.16 15.35 15.31 12.5 15.29 L 12.5 7.25 C 12.5 6.94 12.53 6.77 13.03 6.77 L 19.76 6.77 C 21.47 6.77 21.88 8.95 22.39 11 L 23.6 11 C 23.64 10.11 23.82 6.63 23.97 5 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaEtsy;
