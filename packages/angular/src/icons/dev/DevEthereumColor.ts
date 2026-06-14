import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-ethereum-color",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevEthereumColor {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-ethereum-color-1-a)"}],["path",{"fill":"currentColor","d":"M480 339.7 300 600V453.3zm-95.4 91.5-57.8 36.4v47z"}],["path",{"fill":"currentColor","d":"M120 339.7 300 600V453.3zm95.4 91.5 57.8 36.4v47z"}],["path",{"fill":"currentColor","d":"M322.8 220.7 442 287.1l4.2 12.9-14.2 12.4-109.2-61z"}],["path",{"fill":"currentColor","d":"M277.3 220.7 158 287.1l-4.3 12.9 14.2 12.4 109.3-61z"}],["path",{"fill":"currentColor","d":"m300 0 180 308.2-180 113.3zm26.6 98.9v275L444 300z"}],["path",{"fill":"currentColor","d":"M300 0 120 308.2l180 113.3zm-26.6 98.9v275L156 300z"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevEthereumColor;
