import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-align-justify-flex-start",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrAlignJustifyFlexStart {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M109.83-80Q97-80 88.5-88.62T80-110v-740q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T140-850v740q0 12.75-8.68 21.38Q122.65-80 109.83-80ZM560-290q-12.75 0-21.37-8.62T530-320v-320q0-12.75 8.63-21.37T560-670h40q12.75 0 21.38 8.63T630-640v320q0 12.75-8.62 21.38T600-290h-40Zm-240 0q-12.75 0-21.37-8.62T290-320v-320q0-12.75 8.63-21.37T320-670h40q12.75 0 21.38 8.63T390-640v320q0 12.75-8.62 21.38T360-290h-40Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrAlignJustifyFlexStart;
