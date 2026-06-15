import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-mask-on",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxMaskOn {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M1 1C0.45 1 0 1.45 0 2V13C0 13.55 0.45 14 1 14H14C14.55 14 15 13.55 15 13V2C15 1.45 14.55 1 14 1H1ZM7.5 10.63C9.23 10.63 10.63 9.23 10.63 7.5C10.63 5.77 9.23 4.38 7.5 4.38C5.77 4.38 4.38 5.77 4.38 7.5C4.38 9.23 5.77 10.63 7.5 10.63Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxMaskOn;
