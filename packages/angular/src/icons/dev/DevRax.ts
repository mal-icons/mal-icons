import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-rax",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevRax {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-rax-1-a)"}],["path",{"fill":"currentColor","d":"m2 1.6 147 149.8 242.2-1.7s54 4.1 54 70.6-45.8 71.3-45.8 71.3l-100 2.7 137 143.3s163-37 163-216.7S413.8 0 413.8 0zm-1.5 294h209.8l298.5 300.3-212 4.1z"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevRax;
