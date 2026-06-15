import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-font-size",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxFontSize {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M2.78 2.22C2.71 2.14 2.61 2.1 2.5 2.1C2.39 2.1 2.29 2.14 2.22 2.22L0.22 4.22C0.06 4.37 0.06 4.63 0.22 4.78C0.37 4.94 0.63 4.94 0.78 4.78L2.1 3.47L2.1 11.53L0.78 10.22C0.63 10.06 0.37 10.06 0.22 10.22C0.06 10.37 0.06 10.63 0.22 10.78L2.22 12.78C2.29 12.86 2.39 12.9 2.5 12.9C2.61 12.9 2.71 12.86 2.78 12.78L4.78 10.78C4.94 10.63 4.94 10.37 4.78 10.22C4.63 10.06 4.37 10.06 4.22 10.22L2.9 11.53L2.9 3.47L4.22 4.78C4.37 4.94 4.63 4.94 4.78 4.78C4.94 4.63 4.94 4.37 4.78 4.22L2.78 2.22ZM10.5 2.75C10.71 2.75 10.9 2.88 10.97 3.08L13.97 11.4C14.06 11.66 13.93 11.95 13.67 12.04C13.41 12.13 13.12 12 13.03 11.74L12.05 9.02H8.95L7.97 11.74C7.88 12 7.59 12.13 7.33 12.04C7.07 11.95 6.94 11.66 7.03 11.4L10.03 3.08C10.1 2.88 10.29 2.75 10.5 2.75ZM10.5 4.72L11.74 8.17H9.26L10.5 4.72Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxFontSize;
