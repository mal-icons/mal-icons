import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-speaker-moderate",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxSpeakerModerate {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M8 1.5C8 1.31 7.89 1.14 7.72 1.05C7.55 0.97 7.35 0.99 7.2 1.1L3.33 4H1.5C0.67 4 0 4.67 0 5.5V9.5C0 10.33 0.67 11 1.5 11H3.33L7.2 13.9C7.35 14.01 7.55 14.03 7.72 13.95C7.89 13.86 8 13.69 8 13.5V1.5ZM3.8 4.9L7 2.5V12.5L3.8 10.1C3.71 10.04 3.61 10 3.5 10H1.5C1.22 10 1 9.78 1 9.5V5.5C1 5.22 1.22 5 1.5 5H3.5C3.61 5 3.71 4.96 3.8 4.9ZM10.83 3.96C10.71 3.78 10.46 3.73 10.28 3.85C10.09 3.97 10.04 4.22 10.17 4.4C11.41 6.27 11.41 8.73 10.17 10.6C10.04 10.78 10.09 11.03 10.28 11.15C10.46 11.27 10.71 11.22 10.83 11.04C12.26 8.9 12.26 6.1 10.83 3.96Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxSpeakerModerate;
