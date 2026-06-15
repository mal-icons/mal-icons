import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-card-stack-plus",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxCardStackPlus {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M2 3.5C2 3.22 2.22 3 2.5 3H12.5C12.78 3 13 3.22 13 3.5V9.5C13 9.78 12.78 10 12.5 10H2.5C2.22 10 2 9.78 2 9.5V3.5ZM2 10.91C1.42 10.71 1 10.15 1 9.5V3.5C1 2.67 1.67 2 2.5 2H12.5C13.33 2 14 2.67 14 3.5V9.5C14 10.15 13.58 10.71 13 10.91V11.5C13 12.33 12.33 13 11.5 13H3.5C2.67 13 2 12.33 2 11.5V10.91ZM12 11V11.5C12 11.78 11.78 12 11.5 12H3.5C3.22 12 3 11.78 3 11.5V11H12ZM5 6.5C5 6.22 5.22 6 5.5 6H7V4.5C7 4.22 7.22 4 7.5 4C7.78 4 8 4.22 8 4.5V6H9.5C9.78 6 10 6.22 10 6.5C10 6.78 9.78 7 9.5 7H8V8.5C8 8.78 7.78 9 7.5 9C7.22 9 7 8.78 7 8.5V7H5.5C5.22 7 5 6.78 5 6.5Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxCardStackPlus;
