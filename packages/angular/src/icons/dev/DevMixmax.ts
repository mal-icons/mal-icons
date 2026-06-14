import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-mixmax",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevMixmax {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-mixmax-1-a)"}],["path",{"fill":"currentColor","d":"M0 537.9h118.9V62H0z"}],["path",{"fill":"currentColor","d":"M240.5 62.1 0 538h118.9L359.4 62z"}],["path",{"fill":"currentColor","d":"M240.5 537.9h119V62h-119z"}],["path",{"fill":"currentColor","d":"M481.1 62.1 240.6 538h118.9L600 62z"}],["path",{"fill":"currentColor","d":"M480.4 537.9h119V62h-119z"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevMixmax;
