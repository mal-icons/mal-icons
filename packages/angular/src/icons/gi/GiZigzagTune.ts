import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-zigzag-tune",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiZigzagTune {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M190.83 20.24v15.26h136.23l-37.82 19.69H190.83v236.53c-16.15-20.85-41.41-34.31-69.74-34.31-48.59 0-88.19 39.59-88.19 88.18s39.6 88.18 88.19 88.18c44.44 0 81.35-33.11 87.34-75.93 1.04-5.41 1.59-10.98 1.59-16.69h-0.5v-138.03h229.95v143.27c-16.16-20.73-41.34-34.11-69.58-34.11-48.59 0-88.19 39.59-88.19 88.18 0 48.59 39.6 88.18 88.19 88.18 45.26 0 82.7-34.34 87.63-78.310.74-4.6 1.13-9.31 1.13-14.12h-0.5V185.75H267.81l37.83-19.69h152.52v-26.53h-191.61L476.98 20.24H190.83zm18.69 63.49h117.56l-117.56 66.64V83.73zm-88.43 192.36c37 0 67.07 28.64 69.35 65.04H51.75c2.28-36.4 32.35-65.04 69.35-65.04zm248.79 54.86c37.07 0 67.17 28.74 69.36 65.23H300.52c2.19-36.49 32.3-65.23 69.36-65.23z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiZigzagTune;
