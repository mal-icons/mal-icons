import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-led",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiLed {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M256 20.5c-45.5 0-74.14 18.28-92.68 44.23C144.78 90.69 137 125 137 155.5v151h238v-151c0-30.5-7.78-64.81-26.32-90.77C330.14 38.78 301.5 20.5 256 20.5zm8.76 11.89c1.29 0 2.550.02 3.810.05A184 235.5 0 0 0 145.91 160.34c1.11-28.64 9.05-59.75 26.17-83.72 18.54-25.95 47.18-44.23 92.68-44.23zM105 324.5v46h302v-46H105zm78 64v39h-7v32h7v32h18v-32h7v-32h-7v-39h-18zm128 0v39h-7v32h7v32h18v-32h7v-32h-7v-39h-18z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiLed;
