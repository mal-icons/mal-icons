import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-twilio-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevTwilioIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-twilio-icon-1-a)"}],["path",{"fill":"currentColor","d":"M300 0a300.1 300.1 0 0 1 0 600 300.1 300.1 0 0 1 0-600m0 79.2A220 220 0 0 0 79.2 300 220 220 0 0 0 300 520.8 220 220 0 0 0 520.8 300 220 220 0 0 0 300 79.2M374.4 312a62.4 62.4 0 1 1 0 124.8 62.4 62.4 0 0 1 0-124.8m-148.8 0a62.4 62.4 0 1 1 0 124.8 62.4 62.4 0 0 1 0-124.8m148.8-148.8a62.4 62.4 0 1 1 0 124.8 62.4 62.4 0 0 1 0-124.8m-148.8 0a62.4 62.4 0 1 1 0 124.8 62.4 62.4 0 0 1 0-124.8"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevTwilioIcon;
