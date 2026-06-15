import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-hobby-knife",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxHobbyKnife {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M12.35 13.35C12.16 13.55 11.84 13.55 11.65 13.35L6.4 8.1C6.36 8.07 6.34 8.04 6.32 8H5C4.79 8 4.6 7.87 4.53 7.66L2.13 0.76C2.05 0.55 2.13 0.31 2.32 0.18C2.51 0.06 2.77 0.08 2.94 0.23L8.34 5.13C8.44 5.22 8.5 5.36 8.5 5.5V5.82C8.54 5.84 8.57 5.86 8.6 5.9L13.85 11.15C14.05 11.34 14.05 11.66 13.85 11.85L12.35 13.35ZM8.25 6.96L7.46 7.75L12 12.29L12.79 11.5L8.25 6.96ZM3.72 2.29L5.36 7H6.29L7.5 5.79V5.72L3.72 2.29Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxHobbyKnife;
