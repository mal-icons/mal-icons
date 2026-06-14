import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-insomnia",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevInsomnia {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-insomnia-2-a)"}],["path",{"fill":"currentColor","d":"M300 584.7a284.7 284.7 0 1 0 0-569.4 284.7 284.7 0 0 0 0 569.4"}],["path",{"fill":"currentColor","d":"M300 0a300 300 0 1 0 0 600 300 300 0 0 0 0-600m0 30.5a269.5 269.5 0 1 1 0 539 269.5 269.5 0 0 1 0-539"}],["path",{"fill":"currentColor","d":"M303.4 86.4a213.6 213.6 0 1 1-197.5 132.2 83 83 0 1 0 116-116.1 213 213 0 0 1 81.5-16"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevInsomnia;
