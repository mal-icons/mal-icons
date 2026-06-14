import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-together",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevTogether {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-together-1-a)"}],["path",{"fill":"currentColor","d":"M580 112.6A150 150 0 0 0 300 181l150 0.2v12.9H300c1 23.4 7.5 46.7 20 68.5a150 150 0 1 0 259.8-150"}],["path",{"fill":"currentColor","d":"M20.1 112.5a150 150 0 0 0 199.1 208.1l-74.7-130 11.1-6.3 75 129.8A150 150 0 1 0 20 112.5"}],["path",{"fill":"currentColor","d":"M300 597.4a150 150 0 0 0 80.6-276.5l-75.1 129.7-11.1-6.5 74.9-129.8a150 150 0 1 0-69.3 283"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevTogether;
