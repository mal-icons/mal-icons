import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-eventbrite-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevEventbriteIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-eventbrite-icon-1-a)"}],["path",{"fill":"currentColor","d":"M300 600a300 300 0 1 0 0-600 300 300 0 0 0 0 600"}],["path",{"fill":"currentColor","d":"M275.3 193.9c45.3-10 90.5 8.4 115.6 43.5L191 282.8c6.7-43 39.1-78.8 84.3-88.8M392 359.7a112.4 112.4 0 0 1-183.1 1.1l200.4-45.2 32.4-7.2 62.6-14q-1-20.2-5-39.6C474 147 364 79.4 254 104.6c-110 25-178.7 132.3-153 240.6s135.1 175.3 245.1 150.2a204 204 0 0 0 140.8-113.3z"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevEventbriteIcon;
