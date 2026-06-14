import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-styleci",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevStyleci {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-styleci-1-a)"}],["path",{"fill":"currentColor","d":"M600 0H0v600h600z"}],["path",{"fill":"currentColor","d":"M359.7 434.4A212 212 0 0 1 294 445c-73.6 0-120.6-49.4-120.6-144 0-102.4 54.7-147.1 120-147.1 28.8 0 50.6 6.4 65.9 13.5L378 83.3c-13-7-44.7-16.5-90.6-16.5-117 0-223 77-223 240 0 125.9 68.3 226.5 212.4 226.5 44.7 0 80-8.3 95.9-15.3zm72.4 93h103.5V72.7H432.1z"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevStyleci;
