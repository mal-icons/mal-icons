import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-kong-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevKongIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-kong-icon-1-a)"}],["path",{"fill":"currentColor","d":"m189.2 487.4 14.3-18.5h106l55.4 70.7-9.9 24H218.3l3.2-24z"}],["path",{"fill":"currentColor","d":"m221.6 246.6 51.2-88.5h59.7L600 468.8l-20.7 94.7H464.6l7.2-26.6z"}],["path",{"fill":"currentColor","d":"M283.8 141.3 308.3 96l73.6-59.5 126 98.8-16.3 16.7 22 30.4v32.5l-62.9 51.3-105.4-124.9z"}],["path",{"fill":"currentColor","d":"M89 338.9h33.3l86.9-72.7L324.3 400 292 448.7H185.6L112.2 542l-16.9 21.5H0V449.1z"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevKongIcon;
