import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-ruler-square",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxRulerSquare {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M0.5 0C0.22 0 0 0.22 0 0.5V14.5C0 14.78 0.22 15 0.5 15H4.5C4.78 15 5 14.78 5 14.5V5H14.5C14.78 5 15 4.78 15 4.5V0.5C15 0.22 14.78 0 14.5 0H0.5ZM1 4.08L1 1H4.08C4.08 1 4.08 1 4.08 1L4.08 4.08L1 4.08ZM1 4.93L1 14H4V12.93H2.75C2.52 12.93 2.33 12.73 2.33 12.5C2.33 12.27 2.52 12.08 2.75 12.08H4V10.93H2.25C2.02 10.93 1.83 10.73 1.83 10.5C1.83 10.27 2.02 10.07 2.25 10.07H4V8.93L2.75 8.93C2.52 8.93 2.33 8.73 2.33 8.5C2.33 8.27 2.52 8.08 2.75 8.08L4 8.08V6.93L2.75 6.93C2.52 6.93 2.33 6.73 2.33 6.5C2.33 6.27 2.52 6.08 2.75 6.08L4 6.08V4.93L1 4.93ZM4.93 4H6.08V2.75C6.08 2.52 6.27 2.33 6.5 2.33C6.73 2.33 6.93 2.52 6.93 2.75V4H8.08V2.75C8.08 2.52 8.27 2.33 8.5 2.33C8.73 2.33 8.93 2.52 8.93 2.75V4H10.08V2.25C10.08 2.02 10.27 1.83 10.5 1.83C10.73 1.83 10.93 2.02 10.93 2.25V4H12.08V2.75C12.08 2.52 12.27 2.33 12.5 2.33C12.73 2.33 12.93 2.52 12.93 2.75V4H14V1H4.93L4.93 4Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxRulerSquare;
