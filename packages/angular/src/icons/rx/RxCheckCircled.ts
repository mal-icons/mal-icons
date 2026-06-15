import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-check-circled",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxCheckCircled {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M7.5 0.88C3.84 0.88 0.88 3.84 0.88 7.5C0.88 11.16 3.84 14.12 7.5 14.12C11.16 14.12 14.12 11.16 14.12 7.5C14.12 3.84 11.16 0.88 7.5 0.88ZM1.83 7.5C1.83 4.37 4.37 1.83 7.5 1.83C10.63 1.83 13.17 4.37 13.17 7.5C13.17 10.63 10.63 13.17 7.5 13.17C4.37 13.17 1.83 10.63 1.83 7.5ZM10.16 5.54C10.32 5.31 10.26 5 10.04 4.84C9.81 4.68 9.5 4.74 9.34 4.96L6.52 8.97L5.36 7.79C5.16 7.59 4.85 7.59 4.65 7.78C4.45 7.97 4.45 8.29 4.64 8.49L6.23 10.1C6.33 10.21 6.48 10.26 6.62 10.25C6.77 10.24 6.91 10.16 6.99 10.04L10.16 5.54Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxCheckCircled;
