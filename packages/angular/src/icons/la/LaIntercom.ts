import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-intercom",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaIntercom {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 5 5 L 5 27 L 27 27 L 27 5 L 5 5 z M 7 7 L 25 7 L 25 25 L 7 25 L 7 7 z M 16 9 C 15.68 9 15.37 9.21 15.37 9.63 L 15.37 18.85 C 15.37 19.69 16.64 19.69 16.64 18.85 L 16.64 9.63 C 16.64 9.21 16.32 9 16 9 z M 12.82 9.32 C 12.5 9.32 12.19 9.53 12.19 9.95 L 12.19 18.44 C 12.19 19.29 13.46 19.29 13.46 18.44 L 13.46 9.95 C 13.46 9.53 13.14 9.32 12.82 9.32 z M 19.18 9.32 C 18.86 9.32 18.54 9.53 18.54 9.95 L 18.54 18.44 C 18.54 19.29 19.81 19.29 19.81 18.44 L 19.81 9.95 C 19.81 9.53 19.5 9.32 19.18 9.32 z M 9.64 10.59 C 9.32 10.59 9.01 10.8 9.01 11.22 L 9.01 16.94 C 9.01 17.78 10.28 17.78 10.28 16.94 L 10.28 11.22 C 10.28 10.8 9.96 10.59 9.64 10.59 z M 22.36 10.59 C 22.04 10.59 21.72 10.8 21.72 11.22 L 21.72 16.94 C 21.72 17.78 22.99 17.78 22.99 16.94 L 22.99 11.22 C 22.99 10.8 22.68 10.59 22.36 10.59 z M 22.43 19.8 C 22.27 19.78 22.1 19.82 21.95 19.96 C 19.26 22.25 12.86 22.31 10.06 19.96 C 9.42 19.41 8.59 20.38 9.23 20.92 C 12.48 23.71 19.67 23.6 22.77 20.92 C 23.25 20.51 22.9 19.86 22.43 19.8 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaIntercom;
