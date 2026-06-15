import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-color-wheel",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxColorWheel {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M0.88 7.5C0.88 3.84 3.84 0.88 7.5 0.88C11.16 0.88 14.12 3.84 14.12 7.5C14.12 11.16 11.16 14.12 7.5 14.12C3.84 14.12 0.88 11.16 0.88 7.5ZM3.78 3.22C4.68 2.43 5.83 1.93 7.1 1.84V6.53L3.78 3.22ZM3.22 3.78C2.43 4.68 1.93 5.83 1.84 7.1H6.53L3.22 3.78ZM6.53 7.9H1.84C1.93 9.17 2.43 10.32 3.22 11.22L6.53 7.9ZM3.78 11.78C4.68 12.57 5.83 13.07 7.1 13.16V8.47L3.78 11.78ZM7.9 8.47V13.16C9.17 13.07 10.32 12.57 11.22 11.78L7.9 8.47ZM11.78 11.22C12.57 10.32 13.07 9.17 13.16 7.9H8.47L11.78 11.22ZM8.47 7.1H13.16C13.07 5.83 12.57 4.68 11.78 3.78L8.47 7.1ZM11.22 3.22C10.32 2.43 9.17 1.93 7.9 1.84V6.53L11.22 3.22Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxColorWheel;
