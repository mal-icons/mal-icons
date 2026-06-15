import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-value",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxValue {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M0.88 7.5C0.88 3.84 3.84 0.88 7.5 0.88C11.16 0.88 14.12 3.84 14.12 7.5C14.12 11.16 11.16 14.12 7.5 14.12C3.84 14.12 0.88 11.16 0.88 7.5ZM7.5 1.83C4.37 1.83 1.83 4.37 1.83 7.5C1.83 10.63 4.37 13.17 7.5 13.17C10.63 13.17 13.17 10.63 13.17 7.5C13.17 4.37 10.63 1.83 7.5 1.83Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxValue;
