import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-calculator",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiCalculator {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M95 25v462h322V25H95zm193 18h80v18h-80V43zM114 83h284v84H114V83zm22 46v18h88v-18h-88zm-22 54h58v58h-58v-58zm76 0h58v58h-58v-58zm74 0h58v58h-58v-58zm76 0h58v58h-58v-58zm-208 18v22h22v-22h-22zm76 0v22h22v-22h-22zm74 0v22h22v-22h-22zm76 0v22h22v-22h-22zm-244 56h58v58h-58v-58zm76 0h58v58h-58v-58zm74 0h58v58h-58v-58zm76 0h58v58h-58v-58zm-208 18v22h22v-22h-22zm76 0v22h22v-22h-22zm74 0v22h22v-22h-22zm76 0v22h22v-22h-22zm-244 56h58v58h-58v-58zm76 0h58v58h-58v-58zm74 0h58v58h-58v-58zm76 0h58v132h-58V331zm-208 18v22h22v-22h-22zm76 0v22h22v-22h-22zm74 0v22h22v-22h-22zm76 0v96h22v-96h-22zm-244 56h58v58h-58v-58zm76 0h58v58h-58v-58zm74 0h58v58h-58v-58zm-132 18v22h22v-22h-22zm76 0v22h22v-22h-22zm74 0v22h22v-22h-22z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiCalculator;
