import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-html5-boilerplate",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevHtml5Boilerplate {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-html5-boilerplate-1-a)"}],["path",{"fill":"currentColor","d":"M600 0H0v600h600z"}],["path",{"fill":"currentColor","d":"M268.1 82.7 215.2 234l-160.50.4 130 96.1L138 485.8l131.5-93 135 98.7L355 330.1 483.8 234l-160 0.4z"}],["path",{"fill":"currentColor","d":"m274.8 80.5 53.3 25.1 44.6 121.7h-44.1z"}],["path",{"fill":"currentColor","d":"m366.4 333.4 52.7 25.9 127.6-92.7-52.7-28z"}],["path",{"fill":"currentColor","d":"m366.3 333.3 52.8 25.8 50 161.4-54.7-27.8z"}],["path",{"fill":"currentColor","d":"m145.5 491.3 124-88.7 43.4 32.2-117 82z"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevHtml5Boilerplate;
