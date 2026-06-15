import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-layout-slider",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfLayoutSlider {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 1v14h17v-14h-17zM16 14h-15v-12h15v12zM4.65 10.35l-2.35-2.35 2.35-2.35 0.71 0.71-1.65 1.65 1.65 1.65-0.71 0.71zM11.65 9.65l1.65-1.65-1.65-1.65 0.71-0.71 2.35 2.35-2.35 2.35-0.71-0.71z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfLayoutSlider;
