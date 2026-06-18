import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-expeditedssl",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaExpeditedssl {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16 4 C 9.38 4 4 9.38 4 16 C 4 22.62 9.38 28 16 28 C 22.62 28 28 22.62 28 16 C 28 9.38 22.62 4 16 4 Z M 16 6 C 21.54 6 26 10.46 26 16 C 26 21.54 21.54 26 16 26 C 10.46 26 6 21.54 6 16 C 6 10.46 10.46 6 16 6 Z M 16.03 7.84 C 13.59 7.89 11.63 9.89 11.63 12.34 L 11.63 13.56 C 11.63 13.77 11.79 13.94 12 13.94 L 12.94 13.94 C 13.15 13.94 13.31 13.77 13.31 13.56 L 13.31 12.34 C 13.31 10.82 14.48 9.52 16 9.47 C 17.6 9.41 18.94 10.7 18.94 12.28 L 18.94 13.56 C 18.94 13.77 19.1 13.94 19.31 13.94 L 20.22 13.94 C 20.43 13.94 20.59 13.77 20.59 13.56 L 20.59 12.41 C 20.59 9.89 18.55 7.8 16.03 7.84 Z M 10.44 14.34 C 9.98 14.34 9.59 14.7 9.59 15.16 L 9.59 21.63 C 9.59 22.09 9.98 22.44 10.44 22.44 L 21.75 22.44 C 22.21 22.44 22.59 22.09 22.59 21.63 L 22.59 15.16 C 22.59 14.7 22.21 14.34 21.75 14.34 Z M 10.59 15.16 L 10.97 15.16 C 11.07 15.16 11.16 15.24 11.16 15.34 L 11.16 21.47 C 11.16 21.57 11.07 21.66 10.97 21.66 L 10.59 21.66 C 10.49 21.66 10.41 21.57 10.41 21.47 L 10.41 15.34 C 10.41 15.24 10.49 15.16 10.59 15.16 Z M 16.06 15.97 C 16.94 15.97 17.66 16.68 17.66 17.56 C 17.66 18.15 17.35 18.66 16.88 18.94 L 16.88 20.44 C 16.88 20.66 16.69 20.81 16.47 20.81 L 15.66 20.81 C 15.44 20.81 15.25 20.66 15.25 20.44 L 15.25 18.94 C 14.78 18.66 14.47 18.15 14.47 17.56 C 14.47 16.68 15.18 15.97 16.06 15.97 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaExpeditedssl;
