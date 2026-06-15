import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-mask-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxMaskOff {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M1 2H14V13H1L1 2ZM0 2C0 1.45 0.45 1 1 1H14C14.55 1 15 1.45 15 2V13C15 13.55 14.55 14 14 14H1C0.45 14 0 13.55 0 13V2ZM4.88 7.5C4.88 6.05 6.05 4.88 7.5 4.88C8.95 4.88 10.13 6.05 10.13 7.5C10.13 8.95 8.95 10.13 7.5 10.13C6.05 10.13 4.88 8.95 4.88 7.5ZM7.5 3.88C5.5 3.88 3.88 5.5 3.88 7.5C3.88 9.5 5.5 11.13 7.5 11.13C9.5 11.13 11.13 9.5 11.13 7.5C11.13 5.5 9.5 3.88 7.5 3.88Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxMaskOff;
