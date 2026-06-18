import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-envira",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaEnvira {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 5 5 C 7.61 13.98 7.36 18.18 11.9 21.69 C 15.87 24.72 19.84 23.93 22.01 23.61 L 25.4 27 L 27.4 27 L 23.42 23.02 C 23.39 20.61 29.01 5 5 5 z M 8.08 7 C 8.22 7.01 8.53 7.12 9.13 7.4 C 13.13 9.25 14.54 11.99 16.06 14.8 C 17.16 16.82 19.08 19.9 20.44 20.89 C 21.79 21.88 23.27 22.6 20.15 21.29 C 17.01 19.98 14.73 16.26 13.22 13.44 C 12.05 11.28 11.05 9.29 8.88 7.83 C 8.88 7.83 7.68 6.97 8.08 7 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaEnvira;
