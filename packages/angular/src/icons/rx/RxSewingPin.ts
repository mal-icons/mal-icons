import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-sewing-pin",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxSewingPin {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M6 3.5C6 2.67 6.67 2 7.5 2C8.33 2 9 2.67 9 3.5C9 4.33 8.33 5 7.5 5C6.67 5 6 4.33 6 3.5ZM8 5.95C9.14 5.72 10 4.71 10 3.5C10 2.12 8.88 1 7.5 1C6.12 1 5 2.12 5 3.5C5 4.71 5.86 5.72 7 5.95V13.5C7 13.78 7.22 14 7.5 14C7.78 14 8 13.78 8 13.5V5.95Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxSewingPin;
